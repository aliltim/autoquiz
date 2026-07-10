// Fuzzy matching logic, kept in its own file so it can be tested with plain Node
// before being loaded in the browser (same code runs in both places).

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // strip accents: caïro -> cairo
    .replace(/[^\w\s]/g, "") // strip punctuation
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,      // deletion
        dp[i][j - 1] + 1,      // insertion
        dp[i - 1][j - 1] + cost // substitution
      );
    }
  }
  return dp[m][n];
}

// Returns true if `spoken` is considered a match for any of `acceptedAnswers`.
// Strategy:
//  - exact match after normalization -> match
//  - accepted answer appears as a whole word/phrase inside the spoken transcript -> match
//    (handles STT adding filler words: "ik denk canberra" contains "canberra")
//  - otherwise, allow small edit-distance relative to answer length (typos / STT noise)
function isCorrectAnswer(spokenTranscript, acceptedAnswers) {
  if (!spokenTranscript) return false;
  const spoken = normalize(spokenTranscript);
  if (!spoken) return false;

  for (const raw of acceptedAnswers) {
    const answer = normalize(raw);
    if (!answer) continue;

    if (spoken === answer) return true;

    // whole-phrase containment, bounded by word edges
    const containedRegex = new RegExp(`(^|\\s)${answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`);
    if (containedRegex.test(spoken)) return true;

    // fuzzy distance, threshold scales with answer length (short answers need near-exact match)
    const threshold = answer.length <= 4 ? 0 : Math.max(1, Math.floor(answer.length * 0.2));
    const dist = levenshtein(spoken, answer);
    if (dist <= threshold) return true;

    // also compare against the closest-length window of the transcript, in case
    // the transcript has extra words around the answer ("het is canberra denk ik")
    const spokenWords = spoken.split(" ");
    const answerWordCount = answer.split(" ").length;
    for (let i = 0; i <= spokenWords.length - answerWordCount; i++) {
      const window = spokenWords.slice(i, i + answerWordCount).join(" ");
      const windowDist = levenshtein(window, answer);
      if (windowDist <= threshold) return true;
    }
  }
  return false;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { normalize, levenshtein, isCorrectAnswer };
}
