// Vragenbank "De Slimste Onderweg"
// Alle rondes: 3-6-9, Open Deur, De Puzzel, Collectief Geheugen (audio), Ingelijst, Finale.
// Elke keyword heeft varianten voor fuzzy STT-matching (cijfers ook als woorden).

// ---------------------------------------------------------------------------
// 3-6-9 — korte open vragen
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
  { q: "Hoe heette het schip waarmee Darwin zijn beroemde reis maakte?", answers: ["beagle", "de beagle", "hms beagle"] },
  { q: "Wat is de hoofdstad van Argentinië?", answers: ["buenos aires"] },
  { q: "Hoe heet het hoogste gebouw ter wereld?", answers: ["burj khalifa", "de burj khalifa"] },
  { q: "Welke Duitse componist schreef de Matthäus-Passion?", answers: ["bach", "johann sebastian bach"] },
  { q: "Wat is de kleinste planeet van ons zonnestelsel?", answers: ["mercurius"] },
  { q: "In welk land ligt Timboektoe?", answers: ["mali"] },
  { q: "Hoe heet de Griekse oppergod?", answers: ["zeus"] },
  { q: "Wie schreef Honderd jaar eenzaamheid?", answers: ["garcia marquez", "gabriel garcia marquez", "marquez"] },
  { q: "Wat is het scheikundig symbool voor ijzer?", answers: ["fe", "f e", "ferrum"] },
  { q: "Wiens expeditie voer als eerste rond de wereld?", answers: ["magelhaes", "magellan", "ferdinand magelhaes"] },
  { q: "Wat is de hoofdstad van Portugal?", answers: ["lissabon"] },
  { q: "Welke ziekte werd in 1980 officieel uitgeroeid verklaard?", answers: ["pokken", "de pokken"] },
  { q: "Wie schreef Het Achterhuis?", answers: ["anne frank"] },
  { q: "Wat is de langste rivier van Afrika?", answers: ["nijl", "de nijl"] },
  { q: "Hoe heet de wetenschap die fossielen bestudeert?", answers: ["paleontologie", "de paleontologie"] },
  { q: "Welke natuurkundige formuleerde de drie bewegingswetten?", answers: ["newton", "isaac newton"] },
  { q: "In welk jaar begon de Franse Revolutie?", answers: ["1789", "zeventienhonderd negenentachtig", "zeventien negenentachtig"] },
  { q: "Wat is de nationale munt van Japan?", answers: ["yen", "de yen"] },
  { q: "Welke kunstenaar maakte het beeld David in Florence?", answers: ["michelangelo"] },
  { q: "Hoe heet het grootste koraalrif ter wereld?", answers: ["great barrier reef", "groot barriererif", "barriere rif"] },
  { q: "Welk land schonk het Vrijheidsbeeld aan Amerika?", answers: ["frankrijk"] },
  { q: "Wat is de hoofdstad van Turkije?", answers: ["ankara"] },
  { q: "Wie was de laatste tsaar van Rusland?", answers: ["nicolaas de tweede", "nicolaas twee", "tsaar nicolaas", "nicolaas"] },
  { q: "Welk element heeft het symbool Na?", answers: ["natrium"] },
  { q: "Hoe heet de koude wind die door het Rhônedal naar Zuid-Frankrijk waait?", answers: ["mistral", "de mistral"] },
  { q: "Welke Amerikaanse staat is de grootste in oppervlakte?", answers: ["alaska"] },
  { q: "Wie componeerde De Vier Jaargetijden?", answers: ["vivaldi", "antonio vivaldi"] },
  { q: "Wat is de grootste hete woestijn ter wereld?", answers: ["sahara", "de sahara"] },
  { q: "Welke voetballer scoorde in 1986 met de 'Hand van God'?", answers: ["maradona", "diego maradona"] },
  { q: "Wat is de hoofdstad van Oostenrijk?", answers: ["wenen"] },
  { q: "Welk dier is wereldwijd het dodelijkst voor de mens?", answers: ["mug", "de mug", "muggen"] },
  { q: "Hoe heet het extreem zoute meer tussen Israël en Jordanië?", answers: ["dode zee", "de dode zee"] },
  { q: "Wie schilderde De Schreeuw?", answers: ["munch", "edvard munch"] },
  { q: "Welke organen zuiveren het bloed en maken urine?", answers: ["nieren", "de nieren", "nier"] },
  { q: "Wie ontwierp de Sagrada Família in Barcelona?", answers: ["gaudi", "antoni gaudi"] },
  { q: "Wat was de codenaam van de geallieerde invasie in Normandië?", answers: ["overlord", "operatie overlord", "operation overlord"] },
  { q: "Bij welke planeet hoort Ganymedes, de grootste maan van het zonnestelsel?", answers: ["jupiter"] },
  { q: "Hoe heet de Japanse rijstwijn?", answers: ["sake"] },
  { q: "Wat is de hoofdstad van Schotland?", answers: ["edinburgh", "edinburg"] },
  { q: "Welke oorlog werd beëindigd met het Verdrag van Versailles?", answers: ["eerste wereldoorlog", "de eerste wereldoorlog", "wereldoorlog een"] },
  { q: "Welke dwergplaneet was tot 2006 officieel een planeet?", answers: ["pluto"] },
  { q: "Welke Italiaanse stad is beroemd om zijn scheve toren?", answers: ["pisa"] },
  { q: "Wie schreef De Hobbit?", answers: ["tolkien", "j r r tolkien", "jrr tolkien"] },
  { q: "Wat is het snelste landdier ter wereld?", answers: ["jachtluipaard", "cheeta", "cheetah", "het jachtluipaard"] },
  { q: "Wat is de hoofdstad van Hongarije?", answers: ["boedapest", "budapest"] },
  { q: "Welke Franse schilder is beroemd om zijn waterlelies?", answers: ["monet", "claude monet"] },
  { q: "Hoe heet de angst voor kleine ruimtes?", answers: ["claustrofobie"] },
  { q: "Wie was president van Zuid-Afrika vóór Nelson Mandela?", answers: ["de klerk", "frederik de klerk", "f w de klerk"] },
  { q: "Hoe heet ons sterrenstelsel?", answers: ["melkweg", "de melkweg", "melkwegstelsel"] },
  { q: "Welk land heeft als enige geen rechthoekige vlag?", answers: ["nepal"] },
  { q: "Welke chemicus ontwierp het periodiek systeem?", answers: ["mendelejev", "mendeljev", "dmitri mendelejev"] },
  { q: "Wat is de hoofdstad van Ierland?", answers: ["dublin"] },
  { q: "Op welke eilanden bestudeerde Darwin zijn beroemde vinken?", answers: ["galapagos", "galapagoseilanden", "de galapagoseilanden"] },
  { q: "Wie zong Purple Rain?", answers: ["prince"] },
  { q: "Welke rivier vormt een groot deel van de grens tussen de VS en Mexico?", answers: ["rio grande", "de rio grande"] },
  { q: "Welke planeet wordt de rode planeet genoemd?", answers: ["mars"] },
  { q: "Wat is de hoofdstad van Griekenland?", answers: ["athene"] }
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
  },
  {
    topic: "Het Suezkanaal",
    prompt: "Wat weet je over het Suezkanaal?",
    keywords: [
      { label: "Egypte", variants: ["egypte"] },
      { label: "Verbindt Middellandse Zee en Rode Zee", variants: ["rode zee", "middellandse zee"] },
      { label: "Ever Given (blokkade 2021)", variants: ["ever given", "blokkade", "vastgelopen schip", "2021"] },
      { label: "Niet meer om Afrika varen", variants: ["om afrika", "kaap de goede hoop", "kortere route", "afrika"] }
    ]
  },
  {
    topic: "De Oriënt-Express",
    prompt: "Wat weet je over de Oriënt-Express?",
    keywords: [
      { label: "Luxetrein", variants: ["trein", "luxetrein", "slaaptrein"] },
      { label: "Parijs (vertrek)", variants: ["parijs"] },
      { label: "Istanbul (eindpunt)", variants: ["istanbul", "istanboel", "constantinopel"] },
      { label: "Agatha Christie (moordmysterie)", variants: ["agatha christie", "moord", "poirot"] }
    ]
  },
  {
    topic: "Machu Picchu",
    prompt: "Wat weet je over Machu Picchu?",
    keywords: [
      { label: "Peru", variants: ["peru"] },
      { label: "Inca's", variants: ["inca", "incas", "incastad"] },
      { label: "Hoog in de Andes", variants: ["andes", "bergen", "de andes"] },
      { label: "Herontdekt in 1911", variants: ["1911", "herontdekt", "hiram bingham", "bingham"] }
    ]
  },
  {
    topic: "Het Vrijheidsbeeld",
    prompt: "Wat weet je over het Vrijheidsbeeld?",
    keywords: [
      { label: "New York", variants: ["new york"] },
      { label: "Cadeau van Frankrijk", variants: ["frankrijk", "cadeau van frankrijk", "frans cadeau"] },
      { label: "Fakkel", variants: ["fakkel", "toorts"] },
      { label: "Ellis Island / immigranten", variants: ["ellis island", "immigranten", "landverhuizers"] }
    ]
  },
  {
    topic: "De Gouden Eeuw",
    prompt: "Wat weet je over de Nederlandse Gouden Eeuw?",
    keywords: [
      { label: "Zeventiende eeuw", variants: ["zeventiende eeuw", "17e eeuw", "1600"] },
      { label: "VOC", variants: ["voc", "verenigde oost indische compagnie", "oost indische compagnie"] },
      { label: "Rembrandt", variants: ["rembrandt"] },
      { label: "Handel en schepen", variants: ["handel", "schepen", "koopvaardij", "specerijen"] }
    ]
  },
  {
    topic: "Woodstock",
    prompt: "Wat weet je over Woodstock?",
    keywords: [
      { label: "1969", variants: ["1969", "negentien negenenzestig", "negentienhonderd negenenzestig"] },
      { label: "Muziekfestival", variants: ["festival", "muziekfestival", "popfestival"] },
      { label: "Jimi Hendrix", variants: ["jimi hendrix", "hendrix"] },
      { label: "Half miljoen bezoekers / modder", variants: ["half miljoen", "modder", "vierhonderdduizend", "massa"] }
    ]
  },
  {
    topic: "De Sixtijnse Kapel",
    prompt: "Wat weet je over de Sixtijnse Kapel?",
    keywords: [
      { label: "Michelangelo", variants: ["michelangelo"] },
      { label: "Vaticaan", variants: ["vaticaan", "rome", "vaticaanstad"] },
      { label: "Plafondschildering", variants: ["plafond", "plafondschildering", "de schepping van adam"] },
      { label: "Conclaaf (pausverkiezing)", variants: ["conclaaf", "pausverkiezing", "paus kiezen", "witte rook"] }
    ]
  },
  {
    topic: "Het monster van Loch Ness",
    prompt: "Wat weet je over het monster van Loch Ness?",
    keywords: [
      { label: "Schotland", variants: ["schotland"] },
      { label: "Meer", variants: ["meer", "loch", "het meer"] },
      { label: "Nessie", variants: ["nessie"] },
      { label: "Beroemde vervalste foto", variants: ["vervalste foto", "nepfoto", "foto", "hoax"] }
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
  { clues: ["Witje en de zeven dwergen", "Geen twee vlokken gelijk", "Ballen gooien in de winter", "Wit tapijt"], answer: { label: "Sneeuw", variants: ["sneeuw", "de sneeuw"] } },
  { clues: ["Bakker", "Beleg", "De mens leeft niet van ... alleen", "Wit of bruin"], answer: { label: "Brood", variants: ["brood", "het brood"] } },
  { clues: ["Sneeuwwitjes stiefmoeder vroeg het wat", "Achteruitkijken in de auto", "Reflectie", "Zeven jaar ongeluk"], answer: { label: "Spiegel", variants: ["spiegel", "de spiegel", "een spiegel"] } },
  { clues: ["Op een koningshoofd", "Deense munt", "Op een kies bij de tandarts", "Bovenkant van een boom"], answer: { label: "Kroon", variants: ["kroon", "de kroon", "een kroon"] } },
  { clues: ["Bewaart je geld", "In het park", "Voetbalreserves zitten erop", "In de woonkamer"], answer: { label: "Bank", variants: ["bank", "de bank", "een bank"] } },
  { clues: ["Valt in de herfst", "Roddeltijdschrift", "Klavertje met geluk heeft er vier", "Van een zaag"], answer: { label: "Blad", variants: ["blad", "het blad", "een blad", "bladeren"] } },
  { clues: ["Bij Waterloo", "Om de arm houden", "Roeien", "In je haar"], answer: { label: "Slag", variants: ["slag", "de slag", "een slag"] } },
  { clues: ["Geel of rood op het voetbalveld", "De aas is de hoogste", "Om de weg te vinden", "Verjaardagspost"], answer: { label: "Kaart", variants: ["kaart", "de kaart", "een kaart", "kaarten"] } },
  { clues: ["Pinokkio's groeide", "Van een schoen", "Cyrano had er een grote", "Ruiken"], answer: { label: "Neus", variants: ["neus", "de neus", "een neus"] } },
  { clues: ["Schaakstuk", "Troje", "Gymtoestel", "Van Sinterklaas"], answer: { label: "Paard", variants: ["paard", "het paard", "een paard"] } },
  { clues: ["Op een hoorntje", "Glad op de weg", "Schaatsen erop", "Beren op de Noordpool"], answer: { label: "IJs", variants: ["ijs", "het ijs"] } }
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
  },
  {
    title: "De kaasrace",
    story: "Elk jaar rolt er in Engeland een kaas van een steile heuvel, Cooper's Hill, en rennen tientallen deelnemers erachteraan. De kaas, een Double Gloucester van ongeveer vier kilo, haalt snelheden tot wel honderd kilometer per uur. De winnaar is wie als eerste beneden is, en de hoofdprijs is simpelweg de kaas zelf. Gebroken enkels en polsen horen er elk jaar bij, en een ambulance staat standaard onderaan de heuvel.",
    questions: [
      { q: "In welk land vindt de kaasrace plaats?", answers: ["engeland", "groot brittannie", "verenigd koninkrijk"] },
      { q: "Hoe heet de heuvel?", answers: ["coopers hill", "cooper's hill", "cooper hill"] },
      { q: "Welke kaassoort rolt er van de heuvel?", answers: ["double gloucester", "gloucester"] },
      { q: "Wat wint de winnaar?", answers: ["de kaas", "kaas", "de kaas zelf"] },
      { q: "Welke snelheid haalt de kaas ongeveer?", answers: ["100", "honderd", "honderd kilometer per uur", "100 km per uur"] }
    ]
  },
  {
    title: "De man die de Eiffeltoren verkocht",
    story: "In 1925 nodigde oplichter Victor Lustig een groep schroothandelaren uit in een chique hotel in Parijs. Hij deed zich voor als ambtenaar en beweerde dat de Eiffeltoren wegens roestproblemen als schroot verkocht zou worden. Handelaar André Poisson betaalde een smak geld voor de toren, en durfde uit schaamte geen aangifte te doen. Lustig probeerde de truc een maand later gewoon nog een keer.",
    questions: [
      { q: "Hoe heette de oplichter?", answers: ["lustig", "victor lustig"] },
      { q: "In welk jaar gebeurde dit?", answers: ["1925", "negentien vijfentwintig", "negentienhonderd vijfentwintig"] },
      { q: "Als wat verkocht hij de Eiffeltoren?", answers: ["schroot", "als schroot", "oud ijzer"] },
      { q: "Wat was het beroep van de slachtoffers?", answers: ["schroothandelaar", "schroothandelaren", "handelaar"] },
      { q: "Waarom deed het slachtoffer geen aangifte?", answers: ["schaamte", "uit schaamte", "hij schaamde zich"] }
    ]
  },
  {
    title: "De konijnenplaag",
    story: "In 1859 liet de Engelse kolonist Thomas Austin vierentwintig konijnen los op zijn landgoed in Australië, zodat hij iets had om op te jagen. Binnen enkele tientallen jaren waren het er honderden miljoenen, die het landschap kaalvraten. Australië bouwde uiteindelijk een konijnenwerend hek van ruim drieduizend kilometer lang, dwars door het continent. Het hielp nauwelijks: de konijnen waren al aan de andere kant.",
    questions: [
      { q: "In welk land speelde deze plaag?", answers: ["australie"] },
      { q: "Hoeveel konijnen werden er losgelaten?", answers: ["24", "vierentwintig"] },
      { q: "Hoe heette de man die ze losliet?", answers: ["austin", "thomas austin"] },
      { q: "Wat bouwde Australië tegen de konijnen?", answers: ["hek", "een hek", "konijnenhek", "konijnenwerend hek"] },
      { q: "Hoe lang was dat hek ongeveer?", answers: ["3000", "drieduizend", "ruim drieduizend kilometer", "drieduizend kilometer"] }
    ]
  },
  {
    title: "De duurste postzegel ter wereld",
    story: "In 1856 drukte de kolonie Brits-Guyana in noodhaast een klein aantal postzegels van één cent, in een dieproze kleur die magenta heet. Er is er precies één van bewaard gebleven. Het exemplaar werd in de loop der jaren steeds opnieuw geveild en bracht bij de laatste verkoop ongeveer acht miljoen dollar op, waarmee het per gram het duurste voorwerp ter wereld is.",
    questions: [
      { q: "Uit welke kolonie kwam de postzegel?", answers: ["brits guyana", "guyana", "brits guiana"] },
      { q: "Wat was de oorspronkelijke waarde van de zegel?", answers: ["een cent", "1 cent", "cent"] },
      { q: "Welke kleur heeft de zegel?", answers: ["magenta", "roze", "dieproze"] },
      { q: "Hoeveel exemplaren zijn er bewaard gebleven?", answers: ["1", "een", "precies een"] },
      { q: "Voor ongeveer hoeveel dollar werd hij laatst geveild?", answers: ["8 miljoen", "acht miljoen", "8000000", "acht miljoen dollar"] }
    ]
  }
];

// ---------------------------------------------------------------------------
// Ingelijst — lijstvraag met 10 tot 20 gezochte antwoorden.
// Om de beurt één antwoord; fout of pas = je ligt eruit.
// ---------------------------------------------------------------------------
const BANK_INGELIJST = [
  {
    question: "Noem de twaalf meest gevangen vissoorten in de Noordzee.",
    keywords: [
      { label: "Haring", variants: ["haring"] },
      { label: "Makreel", variants: ["makreel"] },
      { label: "Horsmakreel", variants: ["horsmakreel"] },
      { label: "Sprot", variants: ["sprot"] },
      { label: "Schol", variants: ["schol"] },
      { label: "Tong", variants: ["tong"] },
      { label: "Kabeljauw", variants: ["kabeljauw"] },
      { label: "Wijting", variants: ["wijting"] },
      { label: "Schar", variants: ["schar"] },
      { label: "Tarbot", variants: ["tarbot"] },
      { label: "Griet", variants: ["griet"] },
      { label: "Zeebaars", variants: ["zeebaars"] }
    ]
  },
  {
    question: "Noem de twaalf grootste koffie-exporterende landen ter wereld.",
    keywords: [
      { label: "Brazilië", variants: ["brazilie"] },
      { label: "Vietnam", variants: ["vietnam"] },
      { label: "Colombia", variants: ["colombia"] },
      { label: "Indonesië", variants: ["indonesie"] },
      { label: "Ethiopië", variants: ["ethiopie"] },
      { label: "Honduras", variants: ["honduras"] },
      { label: "India", variants: ["india"] },
      { label: "Oeganda", variants: ["oeganda", "uganda"] },
      { label: "Mexico", variants: ["mexico"] },
      { label: "Peru", variants: ["peru"] },
      { label: "Guatemala", variants: ["guatemala"] },
      { label: "Nicaragua", variants: ["nicaragua"] }
    ]
  },
  {
    question: "Noem de twaalf provincies van Nederland.",
    keywords: [
      { label: "Groningen", variants: ["groningen"] },
      { label: "Friesland", variants: ["friesland", "fryslan"] },
      { label: "Drenthe", variants: ["drenthe"] },
      { label: "Overijssel", variants: ["overijssel"] },
      { label: "Flevoland", variants: ["flevoland"] },
      { label: "Gelderland", variants: ["gelderland"] },
      { label: "Utrecht", variants: ["utrecht"] },
      { label: "Noord-Holland", variants: ["noord holland"] },
      { label: "Zuid-Holland", variants: ["zuid holland"] },
      { label: "Zeeland", variants: ["zeeland"] },
      { label: "Noord-Brabant", variants: ["noord brabant", "brabant"] },
      { label: "Limburg", variants: ["limburg"] }
    ]
  },
  {
    question: "Noem de twaalf onafhankelijke landen van Zuid-Amerika.",
    keywords: [
      { label: "Brazilië", variants: ["brazilie"] },
      { label: "Argentinië", variants: ["argentinie"] },
      { label: "Chili", variants: ["chili"] },
      { label: "Peru", variants: ["peru"] },
      { label: "Colombia", variants: ["colombia"] },
      { label: "Venezuela", variants: ["venezuela"] },
      { label: "Ecuador", variants: ["ecuador"] },
      { label: "Bolivia", variants: ["bolivia"] },
      { label: "Paraguay", variants: ["paraguay"] },
      { label: "Uruguay", variants: ["uruguay"] },
      { label: "Guyana", variants: ["guyana"] },
      { label: "Suriname", variants: ["suriname"] }
    ]
  },
  {
    question: "Noem de twaalf sterrenbeelden van de dierenriem.",
    keywords: [
      { label: "Ram", variants: ["ram"] },
      { label: "Stier", variants: ["stier"] },
      { label: "Tweelingen", variants: ["tweelingen", "tweeling"] },
      { label: "Kreeft", variants: ["kreeft"] },
      { label: "Leeuw", variants: ["leeuw"] },
      { label: "Maagd", variants: ["maagd"] },
      { label: "Weegschaal", variants: ["weegschaal"] },
      { label: "Schorpioen", variants: ["schorpioen"] },
      { label: "Boogschutter", variants: ["boogschutter"] },
      { label: "Steenbok", variants: ["steenbok"] },
      { label: "Waterman", variants: ["waterman"] },
      { label: "Vissen", variants: ["vissen"] }
    ]
  },
  {
    question: "Noem de twaalf Olympische goden uit de Griekse mythologie.",
    keywords: [
      { label: "Zeus", variants: ["zeus"] },
      { label: "Hera", variants: ["hera"] },
      { label: "Poseidon", variants: ["poseidon"] },
      { label: "Demeter", variants: ["demeter"] },
      { label: "Athene", variants: ["athene", "athena"] },
      { label: "Apollo", variants: ["apollo"] },
      { label: "Artemis", variants: ["artemis"] },
      { label: "Ares", variants: ["ares"] },
      { label: "Afrodite", variants: ["afrodite", "aphrodite"] },
      { label: "Hefaistos", variants: ["hefaistos", "hephaistos", "hefestos"] },
      { label: "Hermes", variants: ["hermes"] },
      { label: "Dionysos (of Hestia)", variants: ["dionysos", "dionysus", "hestia"] }
    ]
  },
  {
    question: "Noem de twaalf meest gesproken talen ter wereld.",
    keywords: [
      { label: "Engels", variants: ["engels"] },
      { label: "Chinees (Mandarijn)", variants: ["chinees", "mandarijn"] },
      { label: "Hindi", variants: ["hindi"] },
      { label: "Spaans", variants: ["spaans"] },
      { label: "Frans", variants: ["frans"] },
      { label: "Arabisch", variants: ["arabisch"] },
      { label: "Bengaals", variants: ["bengaals", "bengali"] },
      { label: "Portugees", variants: ["portugees"] },
      { label: "Russisch", variants: ["russisch"] },
      { label: "Urdu", variants: ["urdu"] },
      { label: "Indonesisch", variants: ["indonesisch", "bahasa"] },
      { label: "Duits", variants: ["duits"] }
    ]
  },
  {
    question: "Noem de eerste vijftien elementen van het periodiek systeem.",
    keywords: [
      { label: "Waterstof (1)", variants: ["waterstof"] },
      { label: "Helium (2)", variants: ["helium"] },
      { label: "Lithium (3)", variants: ["lithium"] },
      { label: "Beryllium (4)", variants: ["beryllium"] },
      { label: "Boor (5)", variants: ["boor", "borium"] },
      { label: "Koolstof (6)", variants: ["koolstof"] },
      { label: "Stikstof (7)", variants: ["stikstof"] },
      { label: "Zuurstof (8)", variants: ["zuurstof"] },
      { label: "Fluor (9)", variants: ["fluor"] },
      { label: "Neon (10)", variants: ["neon"] },
      { label: "Natrium (11)", variants: ["natrium"] },
      { label: "Magnesium (12)", variants: ["magnesium"] },
      { label: "Aluminium (13)", variants: ["aluminium"] },
      { label: "Silicium (14)", variants: ["silicium"] },
      { label: "Fosfor (15)", variants: ["fosfor"] }
    ]
  },
  {
    question: "Noem de landen die sinds 1960 de Olympische Zomerspelen organiseerden.",
    keywords: [
      { label: "Italië (Rome 1960)", variants: ["italie"] },
      { label: "Japan (Tokio)", variants: ["japan"] },
      { label: "Mexico (1968)", variants: ["mexico"] },
      { label: "Duitsland (München 1972)", variants: ["duitsland", "west duitsland"] },
      { label: "Canada (Montreal 1976)", variants: ["canada"] },
      { label: "Sovjet-Unie (Moskou 1980)", variants: ["sovjet unie", "sovjetunie", "rusland", "ussr"] },
      { label: "Verenigde Staten (LA, Atlanta)", variants: ["verenigde staten", "amerika", "vs", "usa"] },
      { label: "Zuid-Korea (Seoul 1988)", variants: ["zuid korea", "korea"] },
      { label: "Spanje (Barcelona 1992)", variants: ["spanje"] },
      { label: "Australië (Sydney 2000)", variants: ["australie"] },
      { label: "Griekenland (Athene 2004)", variants: ["griekenland"] },
      { label: "China (Peking 2008)", variants: ["china"] },
      { label: "Groot-Brittannië (Londen 2012)", variants: ["groot brittannie", "engeland", "verenigd koninkrijk"] },
      { label: "Brazilië (Rio 2016)", variants: ["brazilie"] },
      { label: "Frankrijk (Parijs 2024)", variants: ["frankrijk"] }
    ]
  },
  {
    question: "Noem de veertien wereldkampioenen Formule 1 tussen 1985 en 2024.",
    keywords: [
      { label: "Alain Prost", variants: ["prost", "alain prost"] },
      { label: "Ayrton Senna", variants: ["senna", "ayrton senna"] },
      { label: "Nigel Mansell", variants: ["mansell", "nigel mansell"] },
      { label: "Michael Schumacher", variants: ["schumacher", "michael schumacher"] },
      { label: "Damon Hill", variants: ["damon hill", "hill"] },
      { label: "Jacques Villeneuve", variants: ["villeneuve", "jacques villeneuve"] },
      { label: "Mika Häkkinen", variants: ["hakkinen", "mika hakkinen"] },
      { label: "Fernando Alonso", variants: ["alonso", "fernando alonso"] },
      { label: "Kimi Räikkönen", variants: ["raikkonen", "kimi raikkonen", "kimi"] },
      { label: "Lewis Hamilton", variants: ["hamilton", "lewis hamilton"] },
      { label: "Jenson Button", variants: ["button", "jenson button"] },
      { label: "Sebastian Vettel", variants: ["vettel", "sebastian vettel"] },
      { label: "Nico Rosberg", variants: ["rosberg", "nico rosberg"] },
      { label: "Max Verstappen", variants: ["verstappen", "max verstappen", "max"] }
    ]
  },
  {
    question: "Noem de acht planeten en de vijf erkende dwergplaneten van ons zonnestelsel.",
    keywords: [
      { label: "Mercurius", variants: ["mercurius"] },
      { label: "Venus", variants: ["venus"] },
      { label: "Aarde", variants: ["aarde", "de aarde"] },
      { label: "Mars", variants: ["mars"] },
      { label: "Jupiter", variants: ["jupiter"] },
      { label: "Saturnus", variants: ["saturnus"] },
      { label: "Uranus", variants: ["uranus"] },
      { label: "Neptunus", variants: ["neptunus"] },
      { label: "Pluto (dwerg)", variants: ["pluto"] },
      { label: "Eris (dwerg)", variants: ["eris"] },
      { label: "Ceres (dwerg)", variants: ["ceres"] },
      { label: "Haumea (dwerg)", variants: ["haumea"] },
      { label: "Makemake (dwerg)", variants: ["makemake", "make make"] }
    ]
  },
  {
    question: "Noem de twaalf dieren van de Chinese dierenriem.",
    keywords: [
      { label: "Rat", variants: ["rat", "muis"] },
      { label: "Os (buffel)", variants: ["os", "buffel", "koe"] },
      { label: "Tijger", variants: ["tijger"] },
      { label: "Konijn (haas)", variants: ["konijn", "haas"] },
      { label: "Draak", variants: ["draak"] },
      { label: "Slang", variants: ["slang"] },
      { label: "Paard", variants: ["paard"] },
      { label: "Geit (schaap)", variants: ["geit", "schaap"] },
      { label: "Aap", variants: ["aap"] },
      { label: "Haan", variants: ["haan"] },
      { label: "Hond", variants: ["hond"] },
      { label: "Varken (zwijn)", variants: ["varken", "zwijn"] }
    ]
  },
  {
    question: "Noem de 27 lidstaten van de Europese Unie.",
    keywords: [
      { label: "België", variants: ["belgie"] },
      { label: "Bulgarije", variants: ["bulgarije"] },
      { label: "Cyprus", variants: ["cyprus"] },
      { label: "Denemarken", variants: ["denemarken"] },
      { label: "Duitsland", variants: ["duitsland"] },
      { label: "Estland", variants: ["estland"] },
      { label: "Finland", variants: ["finland"] },
      { label: "Frankrijk", variants: ["frankrijk"] },
      { label: "Griekenland", variants: ["griekenland"] },
      { label: "Hongarije", variants: ["hongarije"] },
      { label: "Ierland", variants: ["ierland"] },
      { label: "Italië", variants: ["italie"] },
      { label: "Kroatië", variants: ["kroatie"] },
      { label: "Letland", variants: ["letland"] },
      { label: "Litouwen", variants: ["litouwen"] },
      { label: "Luxemburg", variants: ["luxemburg"] },
      { label: "Malta", variants: ["malta"] },
      { label: "Nederland", variants: ["nederland"] },
      { label: "Oostenrijk", variants: ["oostenrijk"] },
      { label: "Polen", variants: ["polen"] },
      { label: "Portugal", variants: ["portugal"] },
      { label: "Roemenië", variants: ["roemenie"] },
      { label: "Slovenië", variants: ["slovenie"] },
      { label: "Slowakije", variants: ["slowakije"] },
      { label: "Spanje", variants: ["spanje"] },
      { label: "Tsjechië", variants: ["tsjechie"] },
      { label: "Zweden", variants: ["zweden"] }
    ]
  },
  {
    question: "Noem de twintig grootste landen van Afrika in oppervlakte.",
    keywords: [
      { label: "Algerije", variants: ["algerije"] },
      { label: "DR Congo", variants: ["congo", "dr congo", "democratische republiek congo"] },
      { label: "Soedan", variants: ["soedan", "sudan"] },
      { label: "Libië", variants: ["libie"] },
      { label: "Tsjaad", variants: ["tsjaad"] },
      { label: "Niger", variants: ["niger"] },
      { label: "Angola", variants: ["angola"] },
      { label: "Mali", variants: ["mali"] },
      { label: "Zuid-Afrika", variants: ["zuid afrika"] },
      { label: "Ethiopië", variants: ["ethiopie"] },
      { label: "Mauritanië", variants: ["mauritanie"] },
      { label: "Egypte", variants: ["egypte"] },
      { label: "Tanzania", variants: ["tanzania"] },
      { label: "Nigeria", variants: ["nigeria"] },
      { label: "Namibië", variants: ["namibie"] },
      { label: "Mozambique", variants: ["mozambique"] },
      { label: "Zambia", variants: ["zambia"] },
      { label: "Zuid-Soedan", variants: ["zuid soedan", "zuid sudan"] },
      { label: "Somalië", variants: ["somalie"] },
      { label: "Centraal-Afrikaanse Republiek", variants: ["centraal afrikaanse republiek", "car"] }
    ]
  },
  {
    question: "Noem de twaalf provinciehoofdsteden van Nederland.",
    keywords: [
      { label: "Groningen", variants: ["groningen"] },
      { label: "Leeuwarden", variants: ["leeuwarden"] },
      { label: "Assen", variants: ["assen"] },
      { label: "Zwolle", variants: ["zwolle"] },
      { label: "Lelystad", variants: ["lelystad"] },
      { label: "Arnhem", variants: ["arnhem"] },
      { label: "Utrecht", variants: ["utrecht"] },
      { label: "Haarlem", variants: ["haarlem"] },
      { label: "Den Haag", variants: ["den haag", "s gravenhage"] },
      { label: "Middelburg", variants: ["middelburg"] },
      { label: "'s-Hertogenbosch", variants: ["den bosch", "s hertogenbosch", "hertogenbosch"] },
      { label: "Maastricht", variants: ["maastricht"] }
    ]
  },
  {
    question: "Noem de twintig grootste staten van de Verenigde Staten in oppervlakte.",
    keywords: [
      { label: "Alaska", variants: ["alaska"] },
      { label: "Texas", variants: ["texas"] },
      { label: "Californië", variants: ["californie", "california"] },
      { label: "Montana", variants: ["montana"] },
      { label: "New Mexico", variants: ["new mexico"] },
      { label: "Arizona", variants: ["arizona"] },
      { label: "Nevada", variants: ["nevada"] },
      { label: "Colorado", variants: ["colorado"] },
      { label: "Oregon", variants: ["oregon"] },
      { label: "Wyoming", variants: ["wyoming"] },
      { label: "Michigan", variants: ["michigan"] },
      { label: "Minnesota", variants: ["minnesota"] },
      { label: "Utah", variants: ["utah"] },
      { label: "Idaho", variants: ["idaho"] },
      { label: "Kansas", variants: ["kansas"] },
      { label: "Nebraska", variants: ["nebraska"] },
      { label: "South Dakota", variants: ["south dakota", "zuid dakota"] },
      { label: "Washington", variants: ["washington"] },
      { label: "North Dakota", variants: ["north dakota", "noord dakota"] },
      { label: "Oklahoma", variants: ["oklahoma"] }
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
  },
  {
    subject: "Nederland",
    keywords: [
      { label: "Tulpen", variants: ["tulpen", "tulp"] },
      { label: "Molens", variants: ["molens", "molen", "windmolens"] },
      { label: "Kaas", variants: ["kaas", "gouda", "edammer"] },
      { label: "Fietsen", variants: ["fietsen", "fiets"] },
      { label: "Oranje", variants: ["oranje", "koningshuis", "koning"] }
    ]
  },
  {
    subject: "De ruimte",
    keywords: [
      { label: "Raket", variants: ["raket", "raketten"] },
      { label: "Astronaut", variants: ["astronaut", "astronauten", "ruimtevaarder"] },
      { label: "NASA", variants: ["nasa"] },
      { label: "Zwaartekracht", variants: ["zwaartekracht", "gewichtloos", "gewichtloosheid"] },
      { label: "Satelliet", variants: ["satelliet", "satellieten"] }
    ]
  },
  {
    subject: "Sprookjes",
    keywords: [
      { label: "Assepoester", variants: ["assepoester"] },
      { label: "Roodkapje", variants: ["roodkapje"] },
      { label: "Sneeuwwitje", variants: ["sneeuwwitje"] },
      { label: "Hans en Grietje", variants: ["hans en grietje", "hans", "grietje"] },
      { label: "Doornroosje", variants: ["doornroosje"] }
    ]
  },
  {
    subject: "Pizza",
    keywords: [
      { label: "Italië", variants: ["italie", "italiaans"] },
      { label: "Margherita", variants: ["margherita", "margarita"] },
      { label: "Mozzarella", variants: ["mozzarella"] },
      { label: "Napels (bakermat)", variants: ["napels", "napoli"] },
      { label: "Tomatensaus", variants: ["tomatensaus", "tomaat", "tomaten"] }
    ]
  },
  {
    subject: "Sherlock Holmes",
    keywords: [
      { label: "Dr. Watson", variants: ["watson", "dokter watson"] },
      { label: "Baker Street 221B", variants: ["baker street", "221b"] },
      { label: "Arthur Conan Doyle", variants: ["conan doyle", "arthur conan doyle", "doyle"] },
      { label: "Moriarty (aartsvijand)", variants: ["moriarty"] },
      { label: "Pijp / speurdershoed", variants: ["pijp", "hoed", "deerstalker", "vergrootglas"] }
    ]
  },
  {
    subject: "Dinosaurussen",
    keywords: [
      { label: "T. rex", variants: ["t rex", "tyrannosaurus", "tyrannosaurus rex"] },
      { label: "Uitgestorven door meteoriet", variants: ["meteoriet", "uitgestorven", "asteroide", "inslag"] },
      { label: "Fossielen", variants: ["fossielen", "fossiel", "botten"] },
      { label: "Jurassic Park", variants: ["jurassic park", "jurassic"] },
      { label: "Triceratops", variants: ["triceratops"] }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BANK_369, BANK_OPENDEUR, BANK_PUZZEL, BANK_GEHEUGEN, BANK_INGELIJST, BANK_FINALE };
}
