// Starter vragenbank voor "Autoquiz" - open kennisvragen ronde
// Elke vraag heeft één of meer geaccepteerde antwoorden (varianten voor fuzzy matching).
// Voeg gerust meer categorieën / vragen toe, of vervang dit bestand later door een grotere bank.

const QUESTION_BANK = [
  {
    question: "Wat is de hoofdstad van Australië?",
    answers: ["canberra"],
    category: "Aardrijkskunde"
  },
  {
    question: "In welk jaar viel de Berlijnse Muur?",
    answers: ["1989", "negentienhonderdnegenentachtig"],
    category: "Geschiedenis"
  },
  {
    question: "Wie schreef de boekenreeks Harry Potter?",
    answers: ["jk rowling", "j.k. rowling", "joanne rowling", "rowling"],
    category: "Kunst & Cultuur"
  },
  {
    question: "Wat is het scheikundig symbool voor goud?",
    answers: ["au"],
    category: "Wetenschap"
  },
  {
    question: "Welke rivier stroomt door Parijs?",
    answers: ["de seine", "seine"],
    category: "Aardrijkskunde"
  },
  {
    question: "Hoeveel planeten heeft ons zonnestelsel?",
    answers: ["8", "acht"],
    category: "Wetenschap"
  },
  {
    question: "Wie schilderde de Nachtwacht?",
    answers: ["rembrandt", "rembrandt van rijn"],
    category: "Kunst & Cultuur"
  },
  {
    question: "Wat is de grootste oceaan ter wereld?",
    answers: ["de stille oceaan", "stille oceaan", "grote oceaan", "pacifische oceaan"],
    category: "Aardrijkskunde"
  },
  {
    question: "In welke stad staat de Eiffeltoren?",
    answers: ["parijs"],
    category: "Aardrijkskunde"
  },
  {
    question: "Wat is de snelste diersoort op aarde?",
    answers: ["slechtvalk", "de slechtvalk"],
    category: "Natuur"
  },
  {
    question: "Wie was de eerste man op de maan?",
    answers: ["neil armstrong", "armstrong"],
    category: "Geschiedenis"
  },
  {
    question: "Hoeveel snaren heeft een standaard gitaar?",
    answers: ["6", "zes"],
    category: "Muziek"
  },
  {
    question: "Wat is de hoofdstad van Canada?",
    answers: ["ottawa"],
    category: "Aardrijkskunde"
  },
  {
    question: "Welk land heeft de vorm van een laars?",
    answers: ["italie", "italië"],
    category: "Aardrijkskunde"
  },
  {
    question: "Wie schreef Romeo en Julia?",
    answers: ["shakespeare", "william shakespeare"],
    category: "Kunst & Cultuur"
  },
  {
    question: "Wat is de hoofdstad van Japan?",
    answers: ["tokio", "tokyo"],
    category: "Aardrijkskunde"
  },
  {
    question: "Hoeveel benen heeft een spin?",
    answers: ["8", "acht"],
    category: "Natuur"
  },
  {
    question: "Wat is het langste bot in het menselijk lichaam?",
    answers: ["dijbeen", "het dijbeen", "femur"],
    category: "Wetenschap"
  },
  {
    question: "Welke Nederlandse schilder sneed een deel van zijn eigen oor af?",
    answers: ["van gogh", "vincent van gogh"],
    category: "Kunst & Cultuur"
  },
  {
    question: "Wat is de hoofdstad van Egypte?",
    answers: ["cairo", "caïro"],
    category: "Aardrijkskunde"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTION_BANK };
}
