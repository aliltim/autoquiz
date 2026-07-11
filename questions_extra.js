// Extra vragen — wordt geladen ná questions.js en voegt toe aan de bestaande banken.
// Eigen vragen toevoegen? Kopieer een blokje en pas het aan.

// ---------------------------------------------------------------------------
// 3-6-9 extra
// ---------------------------------------------------------------------------
BANK_369.push(
  { q: "Wat is de hoofdstad van Canada?", answers: ["ottawa"] },
  { q: "Welke Griekse filosoof dronk de gifbeker?", answers: ["socrates"] },
  { q: "Wat is het grootste eiland van Japan?", answers: ["honshu", "honsjoe"] },
  { q: "Wie schreef De Ontdekking van de Hemel?", answers: ["mulisch", "harry mulisch"] },
  { q: "Welk element heeft het symbool K?", answers: ["kalium"] },
  { q: "In welk jaar was de watersnoodramp in Zeeland?", answers: ["1953", "negentien drieenvijftig", "negentienhonderd drieenvijftig"] },
  { q: "Wat is de hoofdstad van Noorwegen?", answers: ["oslo"] },
  { q: "Welke Italiaan schreef De Goddelijke Komedie?", answers: ["dante", "dante alighieri"] },
  { q: "Hoeveel poten heeft een insect?", answers: ["6", "zes"] },
  { q: "Welke kleur is de bovenste baan van de Nederlandse vlag?", answers: ["rood"] },
  { q: "Wie was de eerste president van de Verenigde Staten?", answers: ["washington", "george washington"] },
  { q: "Wat is het hardste natuurlijke materiaal?", answers: ["diamant"] },
  { q: "Welke Franse wetenschapper ontwikkelde het eerste vaccin tegen hondsdolheid?", answers: ["pasteur", "louis pasteur"] },
  { q: "Wat is de hoofdstad van Finland?", answers: ["helsinki"] },
  { q: "Welk land was gastheer van het WK voetbal in 2010?", answers: ["zuid afrika"] },
  { q: "Welk dier staat op de vlag van Sri Lanka?", answers: ["leeuw", "een leeuw"] },
  { q: "Wie schreef Max Havelaar?", answers: ["multatuli", "eduard douwes dekker"] },
  { q: "Hoeveel seconden zitten er in een kwartier?", answers: ["900", "negenhonderd"] },
  { q: "Welke zangeres wordt de Queen of Pop genoemd?", answers: ["madonna"] },
  { q: "Welk gas geeft cola zijn prik?", answers: ["koolzuur", "koolstofdioxide", "co2"] },
  { q: "Welke woestijn ligt in Mongolië en Noord-China?", answers: ["gobi", "de gobi", "gobiwoestijn"] },
  { q: "Van welke farao werd het graf in 1922 ontdekt?", answers: ["toetanchamon", "toetankamon", "tutankhamun"] },
  { q: "Hoeveel spelers van één team staan er bij volleybal in het veld?", answers: ["6", "zes"] },
  { q: "Welke rivier stroomt door Wenen, Boedapest én Belgrado?", answers: ["donau", "de donau"] },
  { q: "Wat is de hoofdstad van Peru?", answers: ["lima"] },
  { q: "Wie bedacht de relativiteitstheorie?", answers: ["einstein", "albert einstein"] },
  { q: "Wat is de kleinste staat van de Verenigde Staten?", answers: ["rhode island"] },
  { q: "Welke componist schreef de Boléro?", answers: ["ravel", "maurice ravel"] },
  { q: "Welk orgaan maakt gal aan?", answers: ["lever", "de lever"] },
  { q: "Hoe heet de zeearm tussen Engeland en Frankrijk?", answers: ["het kanaal", "kanaal", "nauw van calais"] },
  { q: "Wie won in 1968 als eerste Nederlander de Tour de France?", answers: ["jan janssen", "janssen"] },
  { q: "Wat is de hoofdstad van Australië?", answers: ["canberra"] },
  { q: "Hoeveel ringen heeft het logo van Audi?", answers: ["4", "vier"] }
);

// ---------------------------------------------------------------------------
// Open Deur extra
// ---------------------------------------------------------------------------
BANK_OPENDEUR.push(
  {
    topic: "De Deltawerken",
    prompt: "Wat weet je over de Deltawerken?",
    keywords: [
      { label: "Na de watersnoodramp van 1953", variants: ["watersnoodramp", "1953", "de ramp"] },
      { label: "Zeeland", variants: ["zeeland", "zeeuwse eilanden"] },
      { label: "Oosterscheldekering", variants: ["oosterscheldekering", "oosterschelde", "stormvloedkering"] },
      { label: "Modern wereldwonder", variants: ["wereldwonder", "achtste wereldwonder", "modern wereldwonder"] }
    ]
  },
  {
    topic: "Che Guevara",
    prompt: "Wat weet je over Che Guevara?",
    keywords: [
      { label: "Cubaanse revolutie", variants: ["cuba", "cubaanse revolutie", "castro"] },
      { label: "Argentijn", variants: ["argentinie", "argentijn", "argentijns"] },
      { label: "Icoon op t-shirts en posters", variants: ["t shirts", "posters", "icoon", "beroemde foto"] },
      { label: "Gedood in Bolivia", variants: ["bolivia", "gedood in bolivia", "geexecuteerd"] }
    ]
  },
  {
    topic: "De Transsiberische spoorlijn",
    prompt: "Wat weet je over de Transsiberische spoorlijn?",
    keywords: [
      { label: "Moskou (beginpunt)", variants: ["moskou"] },
      { label: "Vladivostok (eindpunt)", variants: ["vladivostok"] },
      { label: "Langste spoorlijn ter wereld (9000+ km)", variants: ["langste spoorlijn", "negenduizend kilometer", "9000"] },
      { label: "Ongeveer een week reizen", variants: ["een week", "zeven dagen", "dagenlang"] }
    ]
  },
  {
    topic: "Het Vaticaan",
    prompt: "Wat weet je over het Vaticaan?",
    keywords: [
      { label: "Kleinste land ter wereld", variants: ["kleinste land", "kleinste staat"] },
      { label: "De paus", variants: ["paus", "de paus"] },
      { label: "Zwitserse Garde", variants: ["zwitserse garde", "garde"] },
      { label: "Sint-Pietersbasiliek", variants: ["sint pieter", "sint pietersbasiliek", "pietersbasiliek"] }
    ]
  },
  {
    topic: "Cleopatra",
    prompt: "Wat weet je over Cleopatra?",
    keywords: [
      { label: "Koningin van Egypte", variants: ["egypte", "farao", "koningin van egypte"] },
      { label: "Julius Caesar", variants: ["caesar", "julius caesar"] },
      { label: "Marcus Antonius", variants: ["marcus antonius", "antonius"] },
      { label: "Dood door slangenbeet", variants: ["slang", "slangenbeet", "adder", "cobra"] }
    ]
  },
  {
    topic: "De Californische goudkoorts",
    prompt: "Wat weet je over de Californische goudkoorts?",
    keywords: [
      { label: "1848-1849 (forty-niners)", variants: ["1848", "1849", "forty niners"] },
      { label: "Goudzoekers", variants: ["goudzoekers", "goud zoeken", "goud wassen"] },
      { label: "San Francisco groeide explosief", variants: ["san francisco"] },
      { label: "Weinigen werden echt rijk", variants: ["weinig rijk", "arm gebleven", "schep en pikhouweel verkopers werden rijk", "niet rijk"] }
    ]
  },
  {
    topic: "Astrid Lindgren",
    prompt: "Wat weet je over Astrid Lindgren?",
    keywords: [
      { label: "Pippi Langkous", variants: ["pippi langkous", "pippi"] },
      { label: "Zweden", variants: ["zweden", "zweeds", "zweedse"] },
      { label: "Emil / Ronja / Michiel", variants: ["emil", "ronja", "michiel van de hazelhoeve", "karlsson"] },
      { label: "Kinderboekenschrijfster", variants: ["kinderboeken", "kinderboekenschrijfster", "jeugdboeken"] }
    ]
  },
  {
    topic: "De Boston Tea Party",
    prompt: "Wat weet je over de Boston Tea Party?",
    keywords: [
      { label: "1773", variants: ["1773", "zeventien drieenzeventig", "zeventienhonderd drieenzeventig"] },
      { label: "Thee in de haven gegooid", variants: ["thee", "thee in het water", "thee overboord"] },
      { label: "Aanloop naar de Amerikaanse onafhankelijkheid", variants: ["amerikaanse revolutie", "onafhankelijkheid", "onafhankelijkheidsoorlog"] },
      { label: "Verkleed als indianen", variants: ["indianen", "verkleed", "vermomd"] }
    ]
  }
);

// ---------------------------------------------------------------------------
// De Puzzel extra
// ---------------------------------------------------------------------------
BANK_PUZZEL.push(
  { clues: ["Voetballers trappen ertegen", "Deftig dansfeest", "Oog...", "Gehakt..."], answer: { label: "Bal", variants: ["bal", "de bal", "een bal"] } },
  { clues: ["Zwart-witte toetsen", "De vleugel is de grote broer", "Elton John", "Zachtjes, in het Italiaans"], answer: { label: "Piano", variants: ["piano", "de piano"] } },
  { clues: ["Graaft gangen in het gazon", "Verrader in een tv-programma", "Scheikundige eenheid", "Mineur-toonsoort"], answer: { label: "Mol", variants: ["mol", "de mol"] } },
  { clues: ["Hond kluift erop", "Onbeleefd", "Platvis", "Niet scherp"], answer: { label: "Bot", variants: ["bot", "een bot"] } },
  { clues: ["Schaakstuk", "Pisa heeft een scheve", "Eiffel...", "Kerk..."], answer: { label: "Toren", variants: ["toren", "de toren", "een toren"] } },
  { clues: ["Sport met achttien holes", "Volkswagen", "Zee...", "Radio..."], answer: { label: "Golf", variants: ["golf", "de golf"] } },
  { clues: ["Mannetjespoes", "Na een avond stappen", "Garfield", "Tom uit Tom en Jerry"], answer: { label: "Kater", variants: ["kater", "de kater", "een kater"] } },
  { clues: ["Noord of zuid", "Biljartvariant", "Inwoner van Warschau", "Plus of min op een batterij"], answer: { label: "Pool", variants: ["pool", "de pool"] } },
  { clues: ["Schilders zetten er hun doek op", "Balkt", "Koppig dier", "Stoot zich niet twee keer aan dezelfde steen"], answer: { label: "Ezel", variants: ["ezel", "de ezel", "een ezel"] } },
  { clues: ["Groen bij het stoplicht", "Niet zwaar", "Edison", "Aan het eind van de tunnel"], answer: { label: "Licht", variants: ["licht", "het licht"] } }
);

// ---------------------------------------------------------------------------
// Collectief Geheugen extra
// ---------------------------------------------------------------------------
BANK_GEHEUGEN.push(
  {
    title: "De dansplaag",
    story: "In 1518 begon een vrouw genaamd Frau Troffea midden in Straatsburg te dansen, en ze hield niet meer op. Binnen een maand dansten honderden mensen dag en nacht mee, zonder het te willen. Het stadsbestuur dacht dat uitdansen de kwaal zou verhelpen, en huurde zelfs muzikanten in. Meerdere dansers stierven aan uitputting. Tot vandaag weet niemand zeker wat de oorzaak was.",
    questions: [
      { q: "In welk jaar begon de dansplaag?", answers: ["1518", "vijftien achttien", "vijftienhonderd achttien"] },
      { q: "In welke stad gebeurde dit?", answers: ["straatsburg"] },
      { q: "Hoe heette de vrouw die begon?", answers: ["troffea", "frau troffea"] },
      { q: "Wat deden de getroffenen dag en nacht?", answers: ["dansen", "ze dansten"] },
      { q: "Wie huurde het stadsbestuur in?", answers: ["muzikanten", "muziek", "een band"] }
    ]
  },
  {
    title: "Napoleon en de konijnen",
    story: "In 1807 organiseerde Napoleons stafchef Berthier een konijnenjacht om een verdrag te vieren. Hij liet duizenden konijnen verzamelen, maar kocht per ongeluk tamme exemplaren. Toen de kooien opengingen, vluchtten de konijnen niet, maar stormden ze recht op Napoleon af, omdat ze dachten dat het voedertijd was. De keizer moest zich al slaand met zijn rijzweep terugtrekken in zijn koets.",
    questions: [
      { q: "Welke keizer werd belaagd?", answers: ["napoleon"] },
      { q: "Door welke dieren?", answers: ["konijnen"] },
      { q: "Waarom vluchtten de dieren niet?", answers: ["tam", "ze waren tam", "voedertijd", "dachten dat ze eten kregen"] },
      { q: "Hoe heette de organisator van de jacht?", answers: ["berthier"] },
      { q: "Waarin trok Napoleon zich terug?", answers: ["koets", "zijn koets", "de koets"] }
    ]
  },
  {
    title: "Schepen in de woestijn",
    story: "Het Aralmeer was ooit het op drie na grootste meer ter wereld, op de grens van Kazachstan en Oezbekistan. De Sovjet-Unie leidde de rivieren om voor de irrigatie van katoenvelden, en het meer kromp met ongeveer negentig procent. Vissersschepen kwamen kilometers van het water op het droge te liggen, roestend in een woestijn die vroeger meerbodem was.",
    questions: [
      { q: "Hoe heet het meer?", answers: ["aralmeer", "het aralmeer"] },
      { q: "Voor welk gewas werd het water omgeleid?", answers: ["katoen", "katoenvelden"] },
      { q: "Met hoeveel procent kromp het meer ongeveer?", answers: ["90", "negentig", "negentig procent"] },
      { q: "Wat ligt er nu roestend in de woestijn?", answers: ["schepen", "vissersschepen", "boten"] },
      { q: "Noem een van de twee landen aan het meer.", answers: ["kazachstan", "oezbekistan"] }
    ]
  },
  {
    title: "De radiopaniek",
    story: "Op Halloween-avond 1938 zond regisseur Orson Welles een hoorspel uit van het boek The War of the Worlds, gebracht als echte nieuwsflitsen over Marsmannen die Amerika binnenvielen. Sommige luisteraars die de intro hadden gemist, dachten dat het echt was. Kranten dikten de paniek later flink aan, maar het maakte Welles op slag wereldberoemd.",
    questions: [
      { q: "Wie regisseerde het hoorspel?", answers: ["orson welles", "welles"] },
      { q: "Op welk boek was het gebaseerd?", answers: ["war of the worlds", "the war of the worlds", "oorlog der werelden"] },
      { q: "Wezens van welke planeet vielen aan in het verhaal?", answers: ["mars", "marsmannen", "marsbewoners"] },
      { q: "In welk jaar was de uitzending?", answers: ["1938", "negentien achtendertig", "negentienhonderd achtendertig"] },
      { q: "Via welk medium werd het uitgezonden?", answers: ["radio", "de radio"] }
    ]
  },
  {
    title: "De langste file ooit",
    story: "In de zomer van 2010 ontstond op de snelweg naar Peking een file van ruim honderd kilometer, veroorzaakt door wegwerkzaamheden en eindeloze vrachtwagens met kolen. De file duurde bijna twee weken. Sommige chauffeurs stonden dagen stil en speelden kaart op het asfalt, terwijl omwonenden goede zaken deden met de verkoop van noedels en water tegen woekerprijzen.",
    questions: [
      { q: "In welk land stond deze recordfile?", answers: ["china"] },
      { q: "Hoe lang was de file ongeveer?", answers: ["100", "honderd", "honderd kilometer", "ruim honderd kilometer"] },
      { q: "Hoe lang duurde de file ongeveer?", answers: ["twee weken", "bijna twee weken", "twaalf dagen", "dagen"] },
      { q: "In welk jaar was dit?", answers: ["2010", "tweeduizend tien"] },
      { q: "Wat verkochten omwonenden aan de chauffeurs?", answers: ["noedels", "water", "noedels en water", "eten"] }
    ]
  },
  {
    title: "Caesar en de piraten",
    story: "Als jonge man werd Julius Caesar op de Middellandse Zee ontvoerd door piraten. Toen hij hoorde welk losgeld ze vroegen, was hij beledigd: hij vond zichzelf het dubbele waard en liet het bedrag verhogen naar vijftig talenten. Tijdens zijn gevangenschap grapte hij dat hij ze later allemaal zou kruisigen. De piraten lachten. Na zijn vrijlating joeg Caesar ze op, en voerde zijn belofte uit.",
    questions: [
      { q: "Wie werd er ontvoerd door piraten?", answers: ["caesar", "julius caesar"] },
      { q: "Op welke zee gebeurde dit?", answers: ["middellandse zee", "de middellandse zee"] },
      { q: "Wat liet Caesar verhogen?", answers: ["losgeld", "het losgeld"] },
      { q: "Naar hoeveel talenten?", answers: ["50", "vijftig"] },
      { q: "Wat beloofde hij met de piraten te doen?", answers: ["kruisigen", "ze kruisigen", "doden"] }
    ]
  }
);

// ---------------------------------------------------------------------------
// Ingelijst extra (gesloten lijsten)
// ---------------------------------------------------------------------------
BANK_INGELIJST.push(
  {
    question: "Noem de zeven antieke en de zeven nieuwe wereldwonderen.",
    keywords: [
      { label: "Piramide van Gizeh", variants: ["piramide", "piramide van gizeh", "piramides"] },
      { label: "Hangende tuinen van Babylon", variants: ["hangende tuinen", "babylon"] },
      { label: "Zeusbeeld van Olympia", variants: ["zeusbeeld", "zeus", "beeld van zeus"] },
      { label: "Tempel van Artemis", variants: ["tempel van artemis", "artemis"] },
      { label: "Mausoleum van Halicarnassus", variants: ["mausoleum", "halicarnassus"] },
      { label: "Kolossus van Rhodos", variants: ["kolossus", "rhodos", "kolossus van rhodos"] },
      { label: "Vuurtoren van Alexandrië", variants: ["vuurtoren", "alexandrie", "pharos"] },
      { label: "Chinese Muur", variants: ["chinese muur", "grote muur"] },
      { label: "Petra", variants: ["petra"] },
      { label: "Christus de Verlosser (Rio)", variants: ["christus de verlosser", "christusbeeld", "rio"] },
      { label: "Machu Picchu", variants: ["machu picchu"] },
      { label: "Chichén Itzá", variants: ["chichen itza"] },
      { label: "Colosseum", variants: ["colosseum"] },
      { label: "Taj Mahal", variants: ["taj mahal"] }
    ]
  },
  {
    question: "Noem de veertien landen die aan China grenzen.",
    keywords: [
      { label: "Rusland", variants: ["rusland"] },
      { label: "Mongolië", variants: ["mongolie"] },
      { label: "Kazachstan", variants: ["kazachstan"] },
      { label: "Kirgizië", variants: ["kirgizie", "kirgizistan"] },
      { label: "Tadzjikistan", variants: ["tadzjikistan"] },
      { label: "Afghanistan", variants: ["afghanistan"] },
      { label: "Pakistan", variants: ["pakistan"] },
      { label: "India", variants: ["india"] },
      { label: "Nepal", variants: ["nepal"] },
      { label: "Bhutan", variants: ["bhutan"] },
      { label: "Myanmar", variants: ["myanmar", "birma"] },
      { label: "Laos", variants: ["laos"] },
      { label: "Vietnam", variants: ["vietnam"] },
      { label: "Noord-Korea", variants: ["noord korea"] }
    ]
  },
  {
    question: "Noem de tien plagen van Egypte.",
    keywords: [
      { label: "Water wordt bloed", variants: ["bloed", "water wordt bloed"] },
      { label: "Kikkers", variants: ["kikkers"] },
      { label: "Muggen / luizen", variants: ["muggen", "luizen"] },
      { label: "Steekvliegen", variants: ["steekvliegen", "vliegen"] },
      { label: "Veepest", variants: ["veepest", "pest onder het vee", "dode dieren"] },
      { label: "Zweren", variants: ["zweren", "puisten"] },
      { label: "Hagel", variants: ["hagel"] },
      { label: "Sprinkhanen", variants: ["sprinkhanen"] },
      { label: "Duisternis", variants: ["duisternis", "donker"] },
      { label: "Dood van de eerstgeborenen", variants: ["eerstgeborenen", "dood van de eerstgeborenen"] }
    ]
  },
  {
    question: "Noem de elf steden van de Elfstedentocht.",
    keywords: [
      { label: "Leeuwarden", variants: ["leeuwarden"] },
      { label: "Sneek", variants: ["sneek"] },
      { label: "IJlst", variants: ["ijlst"] },
      { label: "Sloten", variants: ["sloten"] },
      { label: "Stavoren", variants: ["stavoren"] },
      { label: "Hindeloopen", variants: ["hindeloopen"] },
      { label: "Workum", variants: ["workum"] },
      { label: "Bolsward", variants: ["bolsward"] },
      { label: "Harlingen", variants: ["harlingen"] },
      { label: "Franeker", variants: ["franeker"] },
      { label: "Dokkum", variants: ["dokkum"] }
    ]
  },
  {
    question: "Noem de tien grootste eilanden ter wereld.",
    keywords: [
      { label: "Groenland", variants: ["groenland"] },
      { label: "Nieuw-Guinea", variants: ["nieuw guinea", "papoea"] },
      { label: "Borneo", variants: ["borneo", "kalimantan"] },
      { label: "Madagaskar", variants: ["madagaskar", "madagascar"] },
      { label: "Baffineiland", variants: ["baffineiland", "baffin"] },
      { label: "Sumatra", variants: ["sumatra"] },
      { label: "Honshu", variants: ["honshu", "honsjoe"] },
      { label: "Groot-Brittannië", variants: ["groot brittannie", "engeland"] },
      { label: "Victoria-eiland", variants: ["victoria eiland", "victoria"] },
      { label: "Ellesmere", variants: ["ellesmere"] }
    ]
  },
  {
    question: "Noem de tien landen met de meeste inwoners.",
    keywords: [
      { label: "India", variants: ["india"] },
      { label: "China", variants: ["china"] },
      { label: "Verenigde Staten", variants: ["verenigde staten", "amerika", "vs", "usa"] },
      { label: "Indonesië", variants: ["indonesie"] },
      { label: "Pakistan", variants: ["pakistan"] },
      { label: "Nigeria", variants: ["nigeria"] },
      { label: "Brazilië", variants: ["brazilie"] },
      { label: "Bangladesh", variants: ["bangladesh"] },
      { label: "Rusland", variants: ["rusland"] },
      { label: "Ethiopië", variants: ["ethiopie"] }
    ]
  }
);

// ---------------------------------------------------------------------------
// Finale extra (niche onderwerpen)
// ---------------------------------------------------------------------------
BANK_FINALE.push(
  {
    subject: "Icarus",
    prompt: "Wat weet je over Icarus?",
    keywords: [
      { label: "Griekse mythe", variants: ["griekse mythe", "griekse mythologie", "mythe"] },
      { label: "Vleugels van veren en was", variants: ["vleugels", "was", "wassen vleugels", "veren"] },
      { label: "Vloog te dicht bij de zon", variants: ["zon", "te dicht bij de zon"] },
      { label: "Vader Daedalus", variants: ["daedalus"] },
      { label: "Ontsnapte van Kreta (labyrint)", variants: ["kreta", "labyrint", "minos"] }
    ]
  },
  {
    subject: "De Hindenburg",
    prompt: "Wat weet je over de Hindenburg?",
    keywords: [
      { label: "Duitse zeppelin", variants: ["zeppelin", "luchtschip"] },
      { label: "Ramp in 1937", variants: ["1937", "negentien zevenendertig"] },
      { label: "Gevuld met waterstof", variants: ["waterstof"] },
      { label: "Verongelukt bij Lakehurst (VS)", variants: ["lakehurst", "new jersey", "amerika"] },
      { label: "In vlammen opgegaan bij de landing", variants: ["vlammen", "brand", "vloog in brand", "explosie"] }
    ]
  },
  {
    subject: "Coco Chanel",
    prompt: "Wat weet je over Coco Chanel?",
    keywords: [
      { label: "Frans modeontwerpster", variants: ["mode", "modeontwerpster", "frans", "parijs"] },
      { label: "Chanel No. 5", variants: ["chanel no 5", "nummer 5", "parfum"] },
      { label: "Het kleine zwarte jurkje", variants: ["zwarte jurkje", "little black dress", "zwart jurkje"] },
      { label: "Tweed pakjes", variants: ["tweed", "pakjes", "mantelpakje"] },
      { label: "Bevrijdde vrouwen van het korset", variants: ["korset", "zonder korset"] }
    ]
  },
  {
    subject: "De Gouden Koets",
    prompt: "Wat weet je over de Gouden Koets?",
    keywords: [
      { label: "Prinsjesdag", variants: ["prinsjesdag"] },
      { label: "Geschenk van Amsterdam", variants: ["geschenk van amsterdam", "cadeau van amsterdam", "amsterdam"] },
      { label: "Vervoert de koning(in)", variants: ["koning", "koningin", "koninklijke familie"] },
      { label: "Jarenlang gerestaureerd", variants: ["restauratie", "gerestaureerd"] },
      { label: "Omstreden zijpaneel", variants: ["zijpaneel", "omstreden", "koloniaal", "discussie"] }
    ]
  },
  {
    subject: "Harry Houdini",
    prompt: "Wat weet je over Harry Houdini?",
    keywords: [
      { label: "Boeienkoning", variants: ["boeienkoning", "boeien"] },
      { label: "Ontsnappingsacts", variants: ["ontsnappen", "ontsnappingsacts", "ontsnappingskunstenaar"] },
      { label: "Illusionist / goochelaar", variants: ["illusionist", "goochelaar", "magier"] },
      { label: "Geboren in Hongarije", variants: ["hongarije", "boedapest"] },
      { label: "Stierf na stomp in de buik", variants: ["stomp", "buik", "blindedarm"] }
    ]
  },
  {
    subject: "De Concorde",
    prompt: "Wat weet je over de Concorde?",
    keywords: [
      { label: "Supersonisch passagiersvliegtuig", variants: ["supersonisch", "sneller dan het geluid"] },
      { label: "Parijs-New York in ruim 3 uur", variants: ["drie uur", "3 uur", "parijs new york"] },
      { label: "Brits-Frans project", variants: ["brits frans", "frankrijk en engeland", "brits en frans"] },
      { label: "Crash in 2000", variants: ["crash", "2000", "ongeluk"] },
      { label: "Uit dienst in 2003", variants: ["2003", "uit dienst", "gestopt"] }
    ]
  },
  {
    subject: "Banksy",
    prompt: "Wat weet je over Banksy?",
    keywords: [
      { label: "Straatkunstenaar", variants: ["straatkunst", "straatkunstenaar", "graffiti"] },
      { label: "Identiteit onbekend", variants: ["anoniem", "onbekend", "niemand weet wie"] },
      { label: "Bristol", variants: ["bristol"] },
      { label: "Zelfvernietigend kunstwerk (shredder)", variants: ["shredder", "versnipperd", "girl with balloon", "meisje met ballon"] },
      { label: "Werkt met sjablonen (stencils)", variants: ["sjablonen", "stencils", "spuitbus"] }
    ]
  },
  {
    subject: "De Krakatau",
    prompt: "Wat weet je over de Krakatau?",
    keywords: [
      { label: "Vulkaan in Indonesië", variants: ["vulkaan", "indonesie"] },
      { label: "Uitbarsting van 1883", variants: ["1883", "achttien drieentachtig"] },
      { label: "Knal rond de wereld gehoord", variants: ["knal", "hardste geluid", "duizenden kilometers te horen"] },
      { label: "Dodelijke tsunami's", variants: ["tsunami", "tsunamis", "vloedgolven"] },
      { label: "Anak Krakatau (het kind)", variants: ["anak krakatau", "anak", "nieuwe vulkaan"] }
    ]
  }
);
