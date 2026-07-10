// Vragenbank "De Slimste Onderweg"
// Alle rondes: 3-6-9, Open Deur, De Puzzel, Collectief Geheugen (audio), Ingelijst, Finale.
// Elke keyword heeft varianten voor fuzzy STT-matching (cijfers ook als woorden).

// ---------------------------------------------------------------------------
// 3-6-9 — korte open vragen, elke derde vraag levert tijd/punten op
// ---------------------------------------------------------------------------
const BANK_369 = [
  { q: "Welke zee ligt tussen Griekenland en Turkije?", answers: ["egeische zee", "de egeische zee", "egeische"] },
  { q: "Welk orgaan produceert insuline?", answers: ["alvleesklier", "de alvleesklier", "pancreas"] },
  { q: "In welke stad werd Frans Ferdinand vermoord, het startschot van de Eerste Wereldoorlog?", answers: ["sarajevo"] },
  { q: "Welk scheikundig element heeft atoomnummer 1?", answers: ["waterstof"] },
  { q: "Wat is de hoofdstad van Nieuw-Zeeland?", answers: ["wellington"] },
  { q: "Hoe heet de angst voor spinnen?", answers: ["arachnofobie", "spinnenfobie"] },
  { q: "Wie componeerde de negende symfonie met de Ode an die Freude?", answers: ["beethoven", "ludwig van beethoven"] },
  { q: "Wat is de langste rivier van Europa?", answers: ["wolga", "de wolga", "volga"] },
  { q: "Welk land heette tot 1935 Perzië?", answers: ["iran"] },
  { q: "Hoe heet het proces waarbij planten zonlicht omzetten in energie?", answers: ["fotosynthese"] },
  { q: "Wie was de Britse premier tijdens het grootste deel van de Tweede Wereldoorlog?", answers: ["churchill", "winston churchill"] },
  { q: "Wat is het kleinste land ter wereld?", answers: ["vaticaanstad", "vaticaan", "het vaticaan"] },
  { q: "Welke Griekse filosoof was de leraar van Alexander de Grote?", answers: ["aristoteles"] },
  { q: "Hoe heet de zeestraat tussen Spanje en Marokko?", answers: ["straat van gibraltar", "gibraltar"] },
  { q: "Welk metaal is vloeibaar bij kamertemperatuur?", answers: ["kwik"] },
  { q: "Wie schilderde het Meisje met de Parel?", answers: ["vermeer", "johannes vermeer"] },
  { q: "In welk land ligt de Incastad Machu Picchu?", answers: ["peru"] },
  { q: "Welke Russische schrijver schreef Misdaad en Straf?", answers: ["dostojevski", "dostojewski", "fjodor dostojevski"] },
  { q: "Welk gas vormt ongeveer 78 procent van onze atmosfeer?", answers: ["stikstof"] },
  { q: "Wat is de hoofdstad van Marokko?", answers: ["rabat"] },
  { q: "Wie ontdekte per ongeluk penicilline?", answers: ["fleming", "alexander fleming"] },
  { q: "Hoe heet de kunststroming van Dalí en Magritte?", answers: ["surrealisme", "het surrealisme"] },
  { q: "Wat is de grootste maan van Saturnus?", answers: ["titan"] },
  { q: "Hoe heet het parlement van Israël?", answers: ["knesset", "de knesset"] },
  { q: "Welke Nederlandse stad werd in mei 1940 gebombardeerd, waarna Nederland capituleerde?", answers: ["rotterdam"] },
  { q: "Wat meet een barometer?", answers: ["luchtdruk", "de luchtdruk", "druk"] },
  { q: "Wie schreef de roman 1984?", answers: ["orwell", "george orwell"] },
  { q: "Welke bloedgroep is de universele donor?", answers: ["o negatief", "0 negatief", "o min", "nul negatief"] },
  { q: "Wat is de hoofdstad van Zuid-Korea?", answers: ["seoul", "seoel"] },
  { q: "Welke berg is de hoogste van Afrika?", answers: ["kilimanjaro", "de kilimanjaro"] },
  { q: "Hoe heet het Franse volkslied?", answers: ["marseillaise", "de marseillaise", "la marseillaise"] },
  { q: "Welke oceaanstroom houdt West-Europa relatief warm?", answers: ["golfstroom", "de golfstroom", "warme golfstroom"] },
  { q: "Wie was de eerste vrouw die een Nobelprijs won?", answers: ["marie curie", "curie", "madame curie"] },
  { q: "Welke stad was de hoofdstad van het Byzantijnse Rijk?", answers: ["constantinopel", "byzantium", "istanbul", "istanboel"] },
  { q: "Welke kunstenaar signeerde in 1917 een urinoir met R. Mutt?", answers: ["duchamp", "marcel duchamp"] },
  { q: "Wat is de munteenheid van Zwitserland?", answers: ["frank", "zwitserse frank", "de frank"] },
  { q: "Wie schreef De Avonden?", answers: ["reve", "gerard reve", "gerard kornelis van het reve"] },
  { q: "Hoeveel symfonieën voltooide Beethoven?", answers: ["9", "negen"] },
  { q: "Welke planeet draait als enige 'op zijn kant' om de zon?", answers: ["uranus"] },
  { q: "Hoe heet de rivier die door Rome stroomt?", answers: ["tiber", "de tiber"] },
  { q: "Welk land heeft de meeste inwoners van Afrika?", answers: ["nigeria"] },
  { q: "Wat is de medische term voor bijziendheid?", answers: ["myopie"] },
  { q: "Wie schilderde Guernica?", answers: ["picasso", "pablo picasso"] },
  { q: "Uit welk land komt het sprookje van de Kleine Zeemeermin, geschreven door Andersen?", answers: ["denemarken"] },
  { q: "Hoe heet de dichtstbijzijnde ster buiten ons zonnestelsel?", answers: ["proxima centauri", "proxima"] },
  { q: "Welke Amerikaanse president trad af na het Watergate-schandaal?", answers: ["nixon", "richard nixon"] },
  { q: "Hoeveel spelers staan er per team op het veld bij rugby union?", answers: ["15", "vijftien"] },
  { q: "Wat is de hoofdstad van Colombia?", answers: ["bogota", "bogotá"] },
  { q: "Welke wiskundige constante begint met 2,718?", answers: ["e", "het getal e", "getal e", "euler", "eulers getal"] },
  { q: "In welk jaar viel de Berlijnse Muur?", answers: ["1989", "negentien negenentachtig", "negentienhonderd negenentachtig"] },
  { q: "Welke keizer maakte het christendom legaal in het Romeinse Rijk?", answers: ["constantijn", "constantijn de grote"] },
  { q: "Hoe heet de vrees om zonder mobiele telefoon te zitten?", answers: ["nomofobie"] },
  { q: "Welke zanger werd geboren als Farrokh Bulsara?", answers: ["freddie mercury", "mercury"] },
  { q: "Wat is het enige zoogdier dat echt kan vliegen?", answers: ["vleermuis", "de vleermuis"] },
  { q: "Welke twee kleuren heeft de vlag van Polen?", answers: ["rood en wit", "wit en rood", "rood wit", "wit rood"] },
  { q: "Welke planeet is de heetste van ons zonnestelsel?", answers: ["venus"] },
  { q: "Hoe heet de Japanse kunst van het papiervouwen?", answers: ["origami"] },
  { q: "Welke Nederlander verbeterde de microscoop en zag als eerste bacteriën?", answers: ["van leeuwenhoek", "antoni van leeuwenhoek", "leeuwenhoek"] },
  { q: "In welke stad staat het Kremlin?", answers: ["moskou"] },
  { q: "Wat is het grootste orgaan van het menselijk lichaam?", answers: ["huid", "de huid"] },
  { q: "Hoe heette de dynastie van tsaar Nicolaas de Tweede?", answers: ["romanov", "de romanovs", "romanovs"] },
  { q: "Welke Franse koning stond bekend als de Zonnekoning?", answers: ["lodewijk de veertiende", "lodewijk veertien", "lodewijk de 14e", "louis quatorze"] },
  { q: "Op welk Indonesisch eiland ligt Jakarta?", answers: ["java"] },
  { q: "Welk fabeldier is het nationale dier van Schotland?", answers: ["eenhoorn", "de eenhoorn"] },
  { q: "Welke schrijver bedacht Sherlock Holmes?", answers: ["conan doyle", "arthur conan doyle", "doyle"] },
  { q: "Wat is de hoofdstad van Kenia?", answers: ["nairobi"] },
  { q: "Welke Griekse god heerste over de zee?", answers: ["poseidon"] },
  { q: "Hoe heet de wetenschap die het weer bestudeert?", answers: ["meteorologie", "de meteorologie"] },
  { q: "Welk land won het allereerste WK voetbal in 1930?", answers: ["uruguay"] },
  { q: "Hoe heette het schip waarmee Darwin zijn beroemde reis maakte?", answers: ["beagle", "de beagle", "hms beagle"] }
];

// ---------------------------------------------------------------------------
// Open Deur — onderwerp met 4 sleutelwoorden
// ---------------------------------------------------------------------------
const BANK_OPENDEUR = [
  {
    topic: "De Titanic",
    prompt: "Wat weet je over de Titanic?",
    keywords: [
      { label: "IJsberg", variants: ["ijsberg"] },
      { label: "1912", variants: ["1912", "negentien twaalf", "negentienhonderd twaalf"] },
      { label: "Southampton (vertrekhaven)", variants: ["southampton"] },
      { label: "Onzinkbaar genoemd", variants: ["onzinkbaar", "kon niet zinken"] }
    ]
  },
  {
    topic: "Tsjernobyl",
    prompt: "Wat weet je over de ramp in Tsjernobyl?",
    keywords: [
      { label: "Kernramp / kerncentrale", variants: ["kernramp", "kerncentrale", "kernreactor", "nucleaire ramp"] },
      { label: "1986", variants: ["1986", "negentien zesentachtig", "negentienhonderd zesentachtig"] },
      { label: "Oekraïne / Sovjet-Unie", variants: ["oekraine", "sovjet unie", "sovjetunie", "ussr"] },
      { label: "Pripjat (verlaten stad)", variants: ["pripjat", "pripyat", "spookstad"] }
    ]
  },
  {
    topic: "De Mona Lisa",
    prompt: "Wat weet je over de Mona Lisa?",
    keywords: [
      { label: "Leonardo da Vinci", variants: ["leonardo da vinci", "da vinci", "leonardo"] },
      { label: "Louvre", variants: ["louvre", "het louvre"] },
      { label: "Glimlach", variants: ["glimlach", "mysterieuze glimlach", "lach"] },
      { label: "Gestolen in 1911", variants: ["gestolen", "diefstal", "1911"] }
    ]
  },
  {
    topic: "De Tour de France",
    prompt: "Wat weet je over de Tour de France?",
    keywords: [
      { label: "Gele trui", variants: ["gele trui", "geel"] },
      { label: "Finish in Parijs / Champs-Élysées", variants: ["parijs", "champs elysees"] },
      { label: "Juli", variants: ["juli"] },
      { label: "Etappes", variants: ["etappes", "etappe", "ritten"] }
    ]
  },
  {
    topic: "Amelia Earhart",
    prompt: "Wat weet je over Amelia Earhart?",
    keywords: [
      { label: "Pilote / vliegtuig", variants: ["pilote", "piloot", "vliegtuig", "vliegenier"] },
      { label: "Eerste vrouw solo over de Atlantische Oceaan", variants: ["atlantische oceaan", "eerste vrouw"] },
      { label: "Verdwenen / vermist", variants: ["verdwenen", "vermist", "nooit gevonden", "spoorloos"] },
      { label: "1937", variants: ["1937", "negentien zevenendertig", "negentienhonderd zevenendertig"] }
    ]
  },
  {
    topic: "De Bermudadriehoek",
    prompt: "Wat weet je over de Bermudadriehoek?",
    keywords: [
      { label: "Atlantische Oceaan", variants: ["atlantische oceaan", "atlantisch"] },
      { label: "Verdwijningen van schepen en vliegtuigen", variants: ["verdwijningen", "verdwenen schepen", "verdwenen vliegtuigen", "verdwijnen"] },
      { label: "Florida / Miami", variants: ["florida", "miami"] },
      { label: "Bermuda / Puerto Rico (hoekpunten)", variants: ["bermuda", "puerto rico"] }
    ]
  },
  {
    topic: "Pompeii",
    prompt: "Wat weet je over Pompeii?",
    keywords: [
      { label: "Vesuvius", variants: ["vesuvius", "de vesuvius"] },
      { label: "Vulkaanuitbarsting", variants: ["vulkaanuitbarsting", "vulkaan", "uitbarsting", "eruptie"] },
      { label: "Romeinse stad", variants: ["romeins", "romeinse stad", "romeinen"] },
      { label: "Bedolven onder as", variants: ["as", "bedolven", "aslaag"] }
    ]
  },
  {
    topic: "De eerste maanlanding",
    prompt: "Wat weet je over de eerste maanlanding?",
    keywords: [
      { label: "Apollo 11", variants: ["apollo 11", "apollo elf", "apollo"] },
      { label: "Neil Armstrong", variants: ["neil armstrong", "armstrong"] },
      { label: "1969", variants: ["1969", "negentien negenenzestig", "negentienhonderd negenenzestig"] },
      { label: "Buzz Aldrin", variants: ["buzz aldrin", "aldrin"] }
    ]
  },
  {
    topic: "Elvis Presley",
    prompt: "Wat weet je over Elvis Presley?",
    keywords: [
      { label: "The King (of rock-'n-roll)", variants: ["the king", "king of rock", "rock n roll", "rock and roll", "rock 'n roll"] },
      { label: "Graceland / Memphis", variants: ["graceland", "memphis"] },
      { label: "Overleden in 1977", variants: ["1977", "negentien zevenenzeventig", "negentienhonderd zevenenzeventig"] },
      { label: "Heupbewegingen", variants: ["heupen", "heupbewegingen", "hip shake", "swingende heupen"] }
    ]
  },
  {
    topic: "Het Colosseum",
    prompt: "Wat weet je over het Colosseum?",
    keywords: [
      { label: "Rome", variants: ["rome"] },
      { label: "Gladiatoren", variants: ["gladiatoren", "gladiator", "gladiatorengevechten"] },
      { label: "Amfitheater", variants: ["amfitheater"] },
      { label: "Keizer (Vespasianus)", variants: ["keizer", "vespasianus"] }
    ]
  },
  {
    topic: "De Olympische Spelen",
    prompt: "Wat weet je over de Olympische Spelen?",
    keywords: [
      { label: "Griekenland / Olympia", variants: ["griekenland", "olympia", "grieken"] },
      { label: "Elke vier jaar", variants: ["vier jaar", "om de vier jaar", "elke vier jaar"] },
      { label: "Vijf ringen", variants: ["vijf ringen", "ringen", "olympische ringen"] },
      { label: "Olympisch vuur / fakkel", variants: ["vuur", "fakkel", "olympisch vuur", "vlam"] }
    ]
  },
  {
    topic: "Route 66",
    prompt: "Wat weet je over Route 66?",
    keywords: [
      { label: "Verenigde Staten", variants: ["verenigde staten", "amerika", "vs", "usa"] },
      { label: "Chicago (startpunt)", variants: ["chicago"] },
      { label: "Los Angeles / Santa Monica (eindpunt)", variants: ["los angeles", "santa monica", "californie"] },
      { label: "Mother Road / iconische snelweg", variants: ["mother road", "snelweg", "highway", "moederweg"] }
    ]
  },
  {
    topic: "De Berlijnse Muur",
    prompt: "Wat weet je over de Berlijnse Muur?",
    keywords: [
      { label: "Gebouwd in 1961", variants: ["1961", "negentien eenenzestig", "negentienhonderd eenenzestig"] },
      { label: "Oost-Duitsland / DDR", variants: ["oost duitsland", "ddr", "de ddr"] },
      { label: "Gevallen in 1989", variants: ["1989", "negentien negenentachtig", "negentienhonderd negenentachtig"] },
      { label: "Checkpoint Charlie", variants: ["checkpoint charlie", "checkpoint"] }
    ]
  },
  {
    topic: "Mount Everest",
    prompt: "Wat weet je over de Mount Everest?",
    keywords: [
      { label: "Himalaya", variants: ["himalaya", "de himalaya"] },
      { label: "Nepal / Tibet", variants: ["nepal", "tibet", "china"] },
      { label: "Hillary en Tenzing (eerste beklimming)", variants: ["hillary", "edmund hillary", "tenzing", "sherpa tenzing"] },
      { label: "8848 meter", variants: ["8848", "achtduizend achthonderd achtenveertig", "bijna negen kilometer"] }
    ]
  },
  {
    topic: "Stonehenge",
    prompt: "Wat weet je over Stonehenge?",
    keywords: [
      { label: "Engeland", variants: ["engeland", "groot brittannie", "verenigd koninkrijk"] },
      { label: "Stenen cirkel", variants: ["stenen cirkel", "steencirkel", "grote stenen", "cirkel van stenen"] },
      { label: "Zonnewende", variants: ["zonnewende", "midzomer", "solstitium", "zomerzonnewende"] },
      { label: "Prehistorie / druïden", variants: ["prehistorie", "prehistorisch", "druiden", "steentijd", "bronstijd"] }
    ]
  },
  {
    topic: "Alcatraz",
    prompt: "Wat weet je over Alcatraz?",
    keywords: [
      { label: "Gevangenis", variants: ["gevangenis", "de gevangenis", "cellen"] },
      { label: "Eiland bij San Francisco", variants: ["san francisco", "eiland", "baai van san francisco"] },
      { label: "Al Capone (gevangene)", variants: ["al capone", "capone"] },
      { label: "Ontsnapping van 1962", variants: ["ontsnapping", "1962", "ontsnapt", "lepels", "escape"] }
    ]
  }
];

// ---------------------------------------------------------------------------
// De Puzzel — 4 aanwijzingen, 1 verbindend antwoord
// ---------------------------------------------------------------------------
const BANK_PUZZEL = [
  { clues: ["Elba", "Waterloo", "Bonaparte", "Klein van stuk"], answer: { label: "Napoleon", variants: ["napoleon", "napoleon bonaparte"] } },
  { clues: ["Grachten", "Ajax", "Mokum", "Rode lampjes"], answer: { label: "Amsterdam", variants: ["amsterdam"] } },
  { clues: ["Newton", "Eva", "Big Apple", "Klokhuis"], answer: { label: "Appel", variants: ["appel", "de appel", "een appel"] } },
  { clues: ["Berlijn", "China", "Pink Floyd", "Klagen in Jeruzalem"], answer: { label: "Muur", variants: ["muur", "de muur", "een muur"] } },
  { clues: ["Saturnus", "Frodo", "Boksers", "Trouwen"], answer: { label: "Ring", variants: ["ring", "de ring", "een ring"] } },
  { clues: ["Roodkapje", "Wall Street", "Volle maan", "Roedel"], answer: { label: "Wolf", variants: ["wolf", "de wolf", "een wolf", "weerwolf"] } },
  { clues: ["Golden Gate", "Simon en Garfunkel", "Erasmus", "Kaartspel"], answer: { label: "Brug", variants: ["brug", "de brug", "een brug", "bridge"] } },
  { clues: ["Olympisch", "Klondike-koorts", "Spreken is zilver...", "Symbool Au"], answer: { label: "Goud", variants: ["goud"] } },
  { clues: ["Vlag van Wales", "Chinese dierenriem", "Komodo", "Ermee de spot drijven"], answer: { label: "Draak", variants: ["draak", "de draak", "een draak"] } },
  { clues: ["Papegaai", "Houten been", "Illegale radiozender", "Somalische kust"], answer: { label: "Piraat", variants: ["piraat", "piraten", "een piraat"] } },
  { clues: ["Fabergé", "Columbus", "Pasen", "Dooier"], answer: { label: "Ei", variants: ["ei", "het ei", "een ei", "eieren"] } },
  { clues: ["Zonnewijzer", "Lucky Luke is er sneller dan", "Boksen zonder tegenstander", "Peter Pan raakte hem kwijt"], answer: { label: "Schaduw", variants: ["schaduw", "de schaduw", "zijn schaduw"] } },
  { clues: ["Hollywood Boulevard", "Bethlehem", "Michelin", "De zon is er één"], answer: { label: "Ster", variants: ["ster", "de ster", "een ster", "sterren"] } },
  { clues: ["Notenbalk", "Onder de deurmat", "Tot succes", "Slot"], answer: { label: "Sleutel", variants: ["sleutel", "de sleutel", "een sleutel"] } },
  { clues: ["Achilles", "Hoge hakken", "Smalste deel van een fles", "Wijntje in de trein"], answer: { label: "Hiel / hak", variants: ["hiel", "hak", "de hiel", "de hak"] } },
  { clues: ["Titan is er één van", "Pink Floyd zong over de donkere kant", "Wassend of afnemend", "Neil Armstrong"], answer: { label: "Maan", variants: ["maan", "de maan"] } },
  { clues: ["Prometheus stal het van de goden", "Waar rook is...", "Kamp in de zomer", "Doven met water"], answer: { label: "Vuur", variants: ["vuur", "het vuur"] } },
  { clues: ["Heelt alle wonden", "Big Ben meet het", "Vliegt als je plezier hebt", "Voor Einstein was het relatief"], answer: { label: "Tijd", variants: ["tijd", "de tijd"] } },
  { clues: ["Kaartkleur naast schoppen", "Cupido mikt erop", "Breekt bij verdriet", "Klopt in je borst"], answer: { label: "Hart", variants: ["hart", "het hart", "harten"] } },
  { clues: ["Witje en de zeven dwergen", "Geen twee vlokken gelijk", "Ballen gooien in de winter", "Wit tapijt"], answer: { label: "Sneeuw", variants: ["sneeuw", "de sneeuw"] } }
];

// ---------------------------------------------------------------------------
// Collectief Geheugen (audio) — luister naar een verhaal, beantwoord 5 vragen
// ---------------------------------------------------------------------------
const BANK_GEHEUGEN = [
  {
    title: "De diamantroof",
    story: "In februari 2003 drongen dieven binnen in het Antwerpse diamantcentrum. De bende, geleid door de Italiaan Leonardo Notarbartolo, kraakte een kluis die als onkraakbaar bekendstond. Ze maakten voor meer dan honderd miljoen euro aan diamanten buit. De politie vond later een vuilniszak met bewijsmateriaal langs een bosweg, met daarin een half opgegeten salamiworst. Het grootste deel van de buit is nooit teruggevonden.",
    questions: [
      { q: "In welke stad vond de roof plaats?", answers: ["antwerpen"] },
      { q: "Wat was de nationaliteit van de bendeleider?", answers: ["italiaan", "italiaans", "italie"] },
      { q: "Voor hoeveel miljoen euro werd er minstens gestolen?", answers: ["100", "honderd", "meer dan honderd", "honderd miljoen"] },
      { q: "Wat voor etenswaar zat er in de gevonden vuilniszak?", answers: ["salami", "salamiworst", "worst"] },
      { q: "In welk jaar gebeurde de roof?", answers: ["2003", "tweeduizend drie", "twee duizend drie"] }
    ]
  },
  {
    title: "De langste vlucht",
    story: "In 1959 stegen Robert Timm en John Cook op in een klein Cessna-vliegtuigje boven Las Vegas. Ze bleven vierenzestig dagen onafgebroken in de lucht, een record dat nog steeds staat. Brandstof kregen ze via een slang vanaf een rijdende truck, en maaltijden werden omhoog gehesen in een emmer. De actie was reclame voor een hotel-casino genaamd Hacienda.",
    questions: [
      { q: "Boven welke stad vloog het toestel?", answers: ["las vegas", "vegas"] },
      { q: "Hoeveel dagen bleven ze in de lucht?", answers: ["64", "vierenzestig"] },
      { q: "Wat voor merk vliegtuigje was het?", answers: ["cessna"] },
      { q: "Hoe kwamen de maaltijden aan boord?", answers: ["emmer", "in een emmer", "omhoog gehesen"] },
      { q: "Hoe heette het hotel-casino waarvoor het reclame was?", answers: ["hacienda"] }
    ]
  },
  {
    title: "Het verdwenen schilderij",
    story: "In 1990 stapten twee mannen, verkleed als politieagenten, het Isabella Stewart Gardner Museum in Boston binnen. Ze bonden de bewakers vast en verdwenen met dertien kunstwerken, waaronder een zeldzame Vermeer en drie Rembrandts. De totale waarde wordt geschat op vijfhonderd miljoen dollar. De lege lijsten hangen tot op vandaag in het museum, wachtend op de terugkeer van de werken.",
    questions: [
      { q: "In welke Amerikaanse stad staat het museum?", answers: ["boston"] },
      { q: "Als wat waren de dieven verkleed?", answers: ["politieagenten", "politie", "agenten"] },
      { q: "Hoeveel kunstwerken werden er gestolen?", answers: ["13", "dertien"] },
      { q: "Van welke Nederlandse meester hingen er drie werken bij de buit?", answers: ["rembrandt", "rembrandts"] },
      { q: "Wat hangt er tot vandaag nog in het museum?", answers: ["lege lijsten", "lijsten", "de lege lijsten"] }
    ]
  },
  {
    title: "De marathonloper die de bus nam",
    story: "Tijdens de olympische marathon van 1904 in Sint-Louis kwam de Amerikaan Fred Lorz als eerste over de finish. Later bleek dat hij halverwege met kramp was gestopt en achttien kilometer had meegereden in een auto. De echte winnaar, Thomas Hicks, werd onderweg overeind gehouden met brandewijn en zelfs kleine doses rattengif, dat toen als stimulerend middel werd gezien.",
    questions: [
      { q: "In welke stad vond deze olympische marathon plaats?", answers: ["sint louis", "saint louis", "st louis"] },
      { q: "Hoe heette de valsspeler die als eerste finishte?", answers: ["lorz", "fred lorz"] },
      { q: "Hoeveel kilometer reed hij mee in een auto?", answers: ["18", "achttien"] },
      { q: "Welk drankje kreeg de echte winnaar onderweg?", answers: ["brandewijn", "brandy"] },
      { q: "Welk gif kreeg de winnaar als stimulerend middel?", answers: ["rattengif", "strychnine"] }
    ]
  },
  {
    title: "Het eiland dat verdween",
    story: "In 1831 verrees plotseling een vulkanisch eiland tussen Sicilië en Tunesië. Groot-Brittannië plantte er als eerste een vlag en noemde het Graham Island. Ook Frankrijk en het koninkrijk Sicilië claimden het eiland, wat bijna tot oorlog leidde. Voordat de ruzie kon escaleren zakte het eiland na zes maanden gewoon weer onder de zeespiegel. Het ligt er nog steeds, zes meter onder water.",
    questions: [
      { q: "In welk jaar verscheen het eiland?", answers: ["1831", "achttien eenendertig", "achttienhonderd eenendertig"] },
      { q: "Welk land plantte er als eerste een vlag?", answers: ["groot brittannie", "engeland", "britten", "verenigd koninkrijk"] },
      { q: "Hoe noemden de Britten het eiland?", answers: ["graham island", "graham"] },
      { q: "Na hoeveel maanden verdween het weer in zee?", answers: ["6", "zes"] },
      { q: "Hoe diep onder water ligt de top nu?", answers: ["6 meter", "zes meter", "6", "zes"] }
    ]
  },
  {
    title: "De kortste oorlog ooit",
    story: "Op 27 augustus 1896 brak de kortste oorlog uit de geschiedenis uit, tussen Groot-Brittannië en het sultanaat Zanzibar. Nadat sultan Khalid zichzelf zonder Britse goedkeuring tot heerser had uitgeroepen, openden Britse oorlogsschepen het vuur op het paleis. Na ongeveer achtendertig minuten was de oorlog voorbij. De sultan vluchtte naar het Duitse consulaat en het paleis stond in brand.",
    questions: [
      { q: "Tegen welk sultanaat vocht Groot-Brittannië?", answers: ["zanzibar"] },
      { q: "Hoe heette de sultan?", answers: ["khalid"] },
      { q: "Ongeveer hoeveel minuten duurde de oorlog?", answers: ["38", "achtendertig", "40", "veertig"] },
      { q: "Naar welk consulaat vluchtte de sultan?", answers: ["duitse", "duitsland", "het duitse consulaat"] },
      { q: "In welk jaar vond deze oorlog plaats?", answers: ["1896", "achttien zesennegentig", "achttienhonderd zesennegentig"] }
    ]
  },
  {
    title: "De vliegende tuinstoel",
    story: "In 1982 bond de Amerikaan Larry Walters vijfenveertig weerballonnen aan een tuinstoel en steeg op boven Los Angeles. Hij klom tot bijna vijf kilometer hoogte en zweefde het luchtruim van de luchthaven binnen, tot verbijstering van twee passerende piloten. Om te dalen schoot hij ballonnen kapot met een luchtbuks. Hij landde uiteindelijk in elektriciteitskabels, ongedeerd, en kreeg een boete van de luchtvaartautoriteit.",
    questions: [
      { q: "Hoeveel weerballonnen gebruikte hij?", answers: ["45", "vijfenveertig"] },
      { q: "Waaraan bond hij de ballonnen vast?", answers: ["tuinstoel", "een tuinstoel", "stoel"] },
      { q: "Boven welke stad steeg hij op?", answers: ["los angeles"] },
      { q: "Waarmee schoot hij ballonnen kapot om te dalen?", answers: ["luchtbuks", "een luchtbuks", "buks", "geweer"] },
      { q: "Waarin landde hij?", answers: ["elektriciteitskabels", "stroomkabels", "kabels", "hoogspanningskabels"] }
    ]
  },
  {
    title: "De zoete vloedgolf",
    story: "In 1919 barstte in Boston een gigantische opslagtank open. Een golf van ruim acht meter hoge melasse, dikke suikerstroop, raasde met wel vijfenvijftig kilometer per uur door de straten. Eenentwintig mensen kwamen om en gebouwen werden van hun fundering geduwd. Bewoners beweerden dat de buurt op warme zomerdagen nog tientallen jaren zoet rook.",
    questions: [
      { q: "In welke stad gebeurde dit?", answers: ["boston"] },
      { q: "Welke stof stroomde door de straten?", answers: ["melasse", "suikerstroop", "stroop"] },
      { q: "In welk jaar was de ramp?", answers: ["1919", "negentien negentien", "negentienhonderd negentien"] },
      { q: "Hoeveel mensen kwamen om?", answers: ["21", "eenentwintig"] },
      { q: "Wat roken bewoners nog jaren op warme dagen?", answers: ["zoet", "zoete geur", "stroop", "melasse", "suiker"] }
    ]
  },
  {
    title: "De man die nooit bestond",
    story: "In 1943 lieten de Britten het lichaam van een zogenaamde majoor William Martin aanspoelen bij de Spaanse kust, met een koffertje vol valse invasieplannen. De Duitsers trapten erin: de documenten wezen naar Griekenland, terwijl het echte doel Sicilië was. Hitler verplaatste troepen naar Griekenland, en de geallieerde landing op Sicilië verliep daardoor veel makkelijker. De operatie heette Mincemeat.",
    questions: [
      { q: "In welk jaar gebeurde dit?", answers: ["1943", "negentien drieenveertig", "negentienhonderd drieenveertig"] },
      { q: "Welke naam en rang had het lichaam gekregen?", answers: ["majoor william martin", "william martin", "majoor martin", "martin"] },
      { q: "Bij welk land spoelde het lichaam aan?", answers: ["spanje", "de spaanse kust"] },
      { q: "Welk eiland was het echte doelwit?", answers: ["sicilie"] },
      { q: "Hoe heette de operatie?", answers: ["mincemeat", "operatie mincemeat", "operation mincemeat"] }
    ]
  }
];

// ---------------------------------------------------------------------------
// Ingelijst — onderwerp, 5 sleutelwoorden
// ---------------------------------------------------------------------------
const BANK_INGELIJST = [
  {
    subject: "Albert Einstein",
    keywords: [
      { label: "Relativiteitstheorie", variants: ["relativiteitstheorie", "relativiteit"] },
      { label: "E = mc²", variants: ["e is mc kwadraat", "emc kwadraat", "e mc kwadraat", "mc kwadraat"] },
      { label: "Nobelprijs (Natuurkunde)", variants: ["nobelprijs"] },
      { label: "Duitsland (geboorteland)", variants: ["duitsland", "duitser", "duits"] },
      { label: "Foto met uitgestoken tong", variants: ["tong", "uitgestoken tong"] }
    ]
  },
  {
    subject: "Vincent van Gogh",
    keywords: [
      { label: "Zonnebloemen", variants: ["zonnebloemen", "de zonnebloemen"] },
      { label: "Afgesneden oor", variants: ["oor", "oor afgesneden", "zijn oor"] },
      { label: "Arles / Zuid-Frankrijk", variants: ["arles", "frankrijk", "zuid frankrijk", "provence"] },
      { label: "Broer Theo", variants: ["theo", "broer theo", "zijn broer"] },
      { label: "De Sterrennacht", variants: ["sterrennacht", "de sterrennacht", "starry night"] }
    ]
  },
  {
    subject: "Cleopatra",
    keywords: [
      { label: "Egypte / farao", variants: ["egypte", "farao", "koningin van egypte"] },
      { label: "Julius Caesar", variants: ["caesar", "julius caesar"] },
      { label: "Marcus Antonius", variants: ["marcus antonius", "antonius"] },
      { label: "Dood door slangenbeet", variants: ["slang", "slangenbeet", "adder", "cobra"] },
      { label: "Ezelinnenmelk (baden)", variants: ["ezelinnenmelk", "melk", "baden in melk"] }
    ]
  },
  {
    subject: "Freddie Mercury",
    keywords: [
      { label: "Queen", variants: ["queen"] },
      { label: "Bohemian Rhapsody", variants: ["bohemian rhapsody", "bohemian"] },
      { label: "Live Aid (1985)", variants: ["live aid", "wembley"] },
      { label: "Snor", variants: ["snor", "de snor"] },
      { label: "Zanzibar (geboren)", variants: ["zanzibar"] }
    ]
  },
  {
    subject: "Nelson Mandela",
    keywords: [
      { label: "Zuid-Afrika", variants: ["zuid afrika"] },
      { label: "Apartheid", variants: ["apartheid", "anti apartheid"] },
      { label: "Robbeneiland", variants: ["robbeneiland", "robben island"] },
      { label: "27 jaar gevangen", variants: ["27 jaar", "zevenentwintig jaar", "27", "zevenentwintig"] },
      { label: "Nobelprijs voor de Vrede", variants: ["nobelprijs", "vredesprijs", "nobelprijs voor de vrede"] }
    ]
  },
  {
    subject: "Marie Curie",
    keywords: [
      { label: "Radioactiviteit", variants: ["radioactiviteit", "straling", "radioactief"] },
      { label: "Polonium en radium", variants: ["polonium", "radium"] },
      { label: "Twee Nobelprijzen", variants: ["twee nobelprijzen", "2 nobelprijzen", "twee keer de nobelprijs"] },
      { label: "Polen (geboorteland)", variants: ["polen", "pools", "poolse"] },
      { label: "Echtgenoot Pierre", variants: ["pierre", "pierre curie", "haar man pierre"] }
    ]
  },
  {
    subject: "Leonardo da Vinci",
    keywords: [
      { label: "Mona Lisa", variants: ["mona lisa"] },
      { label: "Het Laatste Avondmaal", variants: ["laatste avondmaal", "het laatste avondmaal"] },
      { label: "Uitvinder / vliegmachines", variants: ["uitvinder", "vliegmachine", "uitvindingen", "helikopter"] },
      { label: "Spiegelschrift", variants: ["spiegelschrift", "achterstevoren schrijven"] },
      { label: "Florence / Italië", variants: ["florence", "italie", "italiaan", "toscane"] }
    ]
  },
  {
    subject: "Muhammad Ali",
    keywords: [
      { label: "Boksen (zwaargewicht)", variants: ["boksen", "bokser", "zwaargewicht"] },
      { label: "Geboren als Cassius Clay", variants: ["cassius clay", "clay"] },
      { label: "Float like a butterfly", variants: ["float like a butterfly", "butterfly", "sting like a bee", "vlinder"] },
      { label: "Weigerde dienst in Vietnam", variants: ["vietnam", "dienstweigering", "weigerde het leger"] },
      { label: "Parkinson", variants: ["parkinson", "ziekte van parkinson"] }
    ]
  },
  {
    subject: "Anne Frank",
    keywords: [
      { label: "Dagboek", variants: ["dagboek", "het dagboek", "kitty"] },
      { label: "Het Achterhuis", variants: ["achterhuis", "het achterhuis"] },
      { label: "Amsterdam (Prinsengracht)", variants: ["amsterdam", "prinsengracht"] },
      { label: "Ondergedoken", variants: ["ondergedoken", "onderduiken", "verstopt"] },
      { label: "Bergen-Belsen (omgekomen)", variants: ["bergen belsen", "concentratiekamp", "kamp"] }
    ]
  },
  {
    subject: "Winston Churchill",
    keywords: [
      { label: "Brits premier", variants: ["premier", "minister president", "prime minister"] },
      { label: "Tweede Wereldoorlog", variants: ["tweede wereldoorlog", "wereldoorlog"] },
      { label: "Sigaar", variants: ["sigaar", "sigaren"] },
      { label: "V-teken", variants: ["v teken", "victory", "overwinningsteken"] },
      { label: "Nobelprijs voor de Literatuur", variants: ["nobelprijs", "literatuur", "nobelprijs literatuur"] }
    ]
  },
  {
    subject: "Frida Kahlo",
    keywords: [
      { label: "Mexico", variants: ["mexico", "mexicaans", "mexicaanse"] },
      { label: "Zelfportretten", variants: ["zelfportretten", "zelfportret"] },
      { label: "Doorlopende wenkbrauw", variants: ["wenkbrauw", "wenkbrauwen", "monobrauw"] },
      { label: "Diego Rivera", variants: ["diego rivera", "rivera", "diego"] },
      { label: "Busongeluk", variants: ["busongeluk", "ongeluk", "bus"] }
    ]
  },
  {
    subject: "De Beatles",
    keywords: [
      { label: "Liverpool", variants: ["liverpool"] },
      { label: "John Lennon", variants: ["john lennon", "lennon"] },
      { label: "Paul McCartney", variants: ["paul mccartney", "mccartney"] },
      { label: "Abbey Road (zebrapad)", variants: ["abbey road", "zebrapad"] },
      { label: "Yellow Submarine", variants: ["yellow submarine", "submarine"] }
    ]
  },
  {
    subject: "Charlie Chaplin",
    keywords: [
      { label: "Stomme films", variants: ["stomme film", "stomme films", "zwijgende film", "geen geluid"] },
      { label: "Snorretje", variants: ["snor", "snorretje"] },
      { label: "The Tramp / de zwerver", variants: ["tramp", "the tramp", "zwerver", "de zwerver"] },
      { label: "The Great Dictator", variants: ["great dictator", "the great dictator", "dictator", "hitler parodie"] },
      { label: "Bolhoed en wandelstok", variants: ["bolhoed", "wandelstok", "hoed en stok"] }
    ]
  },
  {
    subject: "Mozart",
    keywords: [
      { label: "Salzburg / Oostenrijk", variants: ["salzburg", "oostenrijk", "wenen"] },
      { label: "Wonderkind", variants: ["wonderkind", "kindgenie", "componeerde als kind"] },
      { label: "Die Zauberflöte / De Toverfluit", variants: ["zauberflote", "toverfluit", "de toverfluit"] },
      { label: "Requiem (onvoltooid)", variants: ["requiem", "het requiem"] },
      { label: "Jong gestorven (35)", variants: ["35", "vijfendertig", "jong gestorven", "jong overleden"] }
    ]
  },
  {
    subject: "Pablo Picasso",
    keywords: [
      { label: "Spanje (Málaga)", variants: ["spanje", "spaans", "malaga"] },
      { label: "Kubisme", variants: ["kubisme", "het kubisme", "kubist"] },
      { label: "Guernica", variants: ["guernica"] },
      { label: "Blauwe periode", variants: ["blauwe periode", "blauw"] },
      { label: "Vredesduif", variants: ["vredesduif", "duif", "de duif"] }
    ]
  },
  {
    subject: "Stephen Hawking",
    keywords: [
      { label: "Zwarte gaten", variants: ["zwarte gaten", "zwart gat", "hawkingstraling"] },
      { label: "ALS / rolstoel", variants: ["als", "rolstoel", "spierziekte"] },
      { label: "Spraakcomputer", variants: ["spraakcomputer", "computerstem", "stemcomputer"] },
      { label: "A Brief History of Time", variants: ["a brief history of time", "brief history of time", "het heelal", "korte geschiedenis van de tijd"] },
      { label: "Cambridge", variants: ["cambridge"] }
    ]
  }
];

// ---------------------------------------------------------------------------
// Finale — onderwerp, 5 sleutelwoorden, klokken tellen af
// ---------------------------------------------------------------------------
const BANK_FINALE = [
  {
    subject: "Parijs",
    keywords: [
      { label: "Eiffeltoren", variants: ["eiffeltoren", "de eiffeltoren"] },
      { label: "Louvre", variants: ["louvre", "het louvre"] },
      { label: "Seine", variants: ["seine", "de seine"] },
      { label: "Notre-Dame", variants: ["notre dame"] },
      { label: "Arc de Triomphe", variants: ["arc de triomphe", "triomfboog"] }
    ]
  },
  {
    subject: "De Tweede Wereldoorlog",
    keywords: [
      { label: "Hitler", variants: ["hitler", "adolf hitler"] },
      { label: "D-Day / Normandië", variants: ["d day", "normandie", "landing in normandie"] },
      { label: "Pearl Harbor", variants: ["pearl harbor", "pearl harbour"] },
      { label: "Atoombom / Hiroshima", variants: ["atoombom", "hiroshima", "nagasaki"] },
      { label: "Anne Frank", variants: ["anne frank"] }
    ]
  },
  {
    subject: "Egypte",
    keywords: [
      { label: "Piramides", variants: ["piramides", "piramide"] },
      { label: "De Nijl", variants: ["nijl", "de nijl"] },
      { label: "Farao", variants: ["farao", "farao's", "toetanchamon"] },
      { label: "Caïro", variants: ["cairo"] },
      { label: "Sfinx", variants: ["sfinx", "de sfinx"] }
    ]
  },
  {
    subject: "James Bond",
    keywords: [
      { label: "007", variants: ["007", "dubbel nul zeven", "agent 007"] },
      { label: "Sean Connery / Daniel Craig (acteurs)", variants: ["sean connery", "daniel craig", "roger moore", "pierce brosnan"] },
      { label: "Martini, shaken not stirred", variants: ["martini", "shaken not stirred"] },
      { label: "Aston Martin", variants: ["aston martin"] },
      { label: "MI6 / M / Q", variants: ["mi6", "mi zes", "geheime dienst"] }
    ]
  },
  {
    subject: "New York",
    keywords: [
      { label: "Vrijheidsbeeld", variants: ["vrijheidsbeeld", "het vrijheidsbeeld", "statue of liberty"] },
      { label: "Manhattan", variants: ["manhattan"] },
      { label: "Central Park", variants: ["central park"] },
      { label: "Broadway", variants: ["broadway"] },
      { label: "Wall Street", variants: ["wall street"] }
    ]
  },
  {
    subject: "Harry Potter",
    keywords: [
      { label: "Zweinstein / Hogwarts", variants: ["zweinstein", "hogwarts"] },
      { label: "Voldemort", variants: ["voldemort", "jeweetwel", "hij die niet genoemd mag worden"] },
      { label: "J.K. Rowling", variants: ["rowling", "jk rowling"] },
      { label: "Ron en Hermelien", variants: ["ron", "hermelien", "hermione", "ron wemel"] },
      { label: "Zwerkbal / Quidditch", variants: ["zwerkbal", "quidditch"] }
    ]
  },
  {
    subject: "Rome",
    keywords: [
      { label: "Colosseum", variants: ["colosseum", "het colosseum"] },
      { label: "Vaticaan / paus", variants: ["vaticaan", "paus", "sint pieter"] },
      { label: "Tiber", variants: ["tiber", "de tiber"] },
      { label: "Romulus en Remus", variants: ["romulus", "remus", "romulus en remus", "wolvin"] },
      { label: "Trevifontein", variants: ["trevifontein", "trevi fontein", "trevi"] }
    ]
  },
  {
    subject: "Het menselijk lichaam",
    keywords: [
      { label: "Hart", variants: ["hart", "het hart"] },
      { label: "Hersenen", variants: ["hersenen", "brein", "de hersenen"] },
      { label: "206 botten", variants: ["206", "tweehonderd zes botten", "206 botten", "botten"] },
      { label: "Longen", variants: ["longen", "de longen"] },
      { label: "DNA", variants: ["dna", "d n a"] }
    ]
  },
  {
    subject: "Voetbal",
    keywords: [
      { label: "WK / wereldkampioenschap", variants: ["wk", "wereldkampioenschap", "wereldbeker"] },
      { label: "Messi / Ronaldo", variants: ["messi", "ronaldo", "lionel messi", "cristiano ronaldo"] },
      { label: "Buitenspel", variants: ["buitenspel", "offside"] },
      { label: "Penalty / strafschop", variants: ["penalty", "strafschop"] },
      { label: "Rode kaart", variants: ["rode kaart", "gele kaart", "kaart"] }
    ]
  },
  {
    subject: "Willem van Oranje",
    keywords: [
      { label: "Vader des Vaderlands", variants: ["vader des vaderlands"] },
      { label: "Vermoord in Delft", variants: ["delft", "vermoord", "vermoord in delft"] },
      { label: "Balthasar Gerards (moordenaar)", variants: ["balthasar gerards", "gerards", "balthazar gerards"] },
      { label: "Opstand tegen Spanje / Filips II", variants: ["spanje", "filips", "filips de tweede", "tachtigjarige oorlog"] },
      { label: "Het Wilhelmus", variants: ["wilhelmus", "het wilhelmus", "volkslied"] }
    ]
  },
  {
    subject: "Amsterdam",
    keywords: [
      { label: "Grachten", variants: ["grachten", "de grachten", "grachtengordel"] },
      { label: "Rijksmuseum", variants: ["rijksmuseum", "het rijksmuseum", "nachtwacht"] },
      { label: "Anne Frank Huis", variants: ["anne frank huis", "anne frank", "achterhuis"] },
      { label: "Fietsen", variants: ["fietsen", "fiets", "fietsers"] },
      { label: "Ajax", variants: ["ajax", "johan cruijff arena"] }
    ]
  },
  {
    subject: "De Efteling",
    keywords: [
      { label: "Sprookjesbos", variants: ["sprookjesbos", "het sprookjesbos", "sprookjes"] },
      { label: "Holle Bolle Gijs", variants: ["holle bolle gijs", "papier hier"] },
      { label: "Kaatsheuvel", variants: ["kaatsheuvel", "brabant", "noord brabant"] },
      { label: "Baron 1898 / Python (achtbanen)", variants: ["baron", "python", "achtbaan", "achtbanen"] },
      { label: "Anton Pieck", variants: ["anton pieck", "pieck"] }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BANK_369, BANK_OPENDEUR, BANK_PUZZEL, BANK_GEHEUGEN, BANK_INGELIJST, BANK_FINALE };
}
