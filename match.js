// Fuzzy matching logic, testbaar met plain Node (zelfde code draait in de browser).

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
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

// True als `spoken` matcht met één van `acceptedAnswers`.
function isCorrectAnswer(spokenTranscript, acceptedAnswers) {
  if (!spokenTranscript) return false;
  const spoken = normalize(spokenTranscript);
  if (!spoken) return false;

  for (const raw of acceptedAnswers) {
    const answer = normalize(raw);
    if (!answer) continue;

    if (spoken === answer) return true;

    // hele frase als los woord/woordgroep in het transcript
    const containedRegex = new RegExp(`(^|\\s)${answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`);
    if (containedRegex.test(spoken)) return true;

    // fuzzy afstand, drempel schaalt met antwoordlengte
    const threshold = answer.length <= 4 ? 0 : Math.max(1, Math.floor(answer.length * 0.2));
    const dist = levenshtein(spoken, answer);
    if (dist <= threshold) return true;

    // vergelijk ook met vensters van gelijke woordlengte in het transcript
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

// Voor keyword-rondes: geef terug welke van de (nog open) keywords in het
// transcript voorkomen. `keywords` is [{ label, variants: [...] }, ...].
// Retourneert een array met indices van gematchte keywords.
function matchKeywords(spokenTranscript, keywords) {
  const matched = [];
  if (!spokenTranscript) return matched;
  keywords.forEach((kw, i) => {
    if (isCorrectAnswer(spokenTranscript, kw.variants)) matched.push(i);
  });
  return matched;
}

// Spraakcommando's: "pas" (beurt voorbij) en "herhaal" (vraag opnieuw).
// Retourneert "pass", "repeat" of null.
function detectCommand(spokenTranscript) {
  if (!spokenTranscript) return null;
  const t = normalize(spokenTranscript);
  const passPhrases = ["pas", "ik pas", "passen", "geen idee", "weet ik niet", "weet het niet", "ik weet het niet", "geen flauw idee", "volgende"];
  const repeatPhrases = ["herhaal", "herhalen", "nog een keer", "opnieuw", "herhaal de vraag", "zeg nog eens"];
  if (passPhrases.includes(t)) return "pass";
  if (repeatPhrases.includes(t)) return "repeat";
  // ook als het commando het hele korte transcript domineert ("uh herhaal")
  const words = t.split(" ");
  if (words.length <= 3) {
    if (words.includes("herhaal") || words.includes("opnieuw")) return "repeat";
    if (words.includes("pas") && !words.includes("niet")) return "pass";
  }
  return null;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { normalize, levenshtein, isCorrectAnswer, matchKeywords, detectCommand };
}
