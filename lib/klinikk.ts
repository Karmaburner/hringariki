// Alt innhold om den oppdiktede klinikken samlet ett sted.
// Mappen siden ligger i på GitHub Pages. Bildeadresser må ha den foran seg.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// Åpningstider, adresse og priser hentes herfra overalt, så de aldri spriker.

export const klinikk = {
  navn: "Hringariki Tannklinikk",
  kortnavn: "Hringariki",
  slagord: "Tannlegen i sentrum",
  gate: "Kløvergata 4",
  postnr: "3999",
  sted: "Elvby",
  telefon: "12 34 56 78",
  telefonLenke: "+4712345678",
  epost: "post@tannlegene.example",
  url: "https://karmaburner.github.io/hringariki",
  parkering: "Gratis parkering i bakgården, to plasser for rullestol rett ved døra.",
  adkomst: "Inngang på gateplan, ingen trapper. Heis til begge behandlingsrom.",
};

export type Dag = {
  dag: string;
  kort: string;
  apner: string | null;
  stenger: string | null;
  schema: string;
};

export const apningstider: Dag[] = [
  { dag: "Mandag", kort: "Man", apner: "08:00", stenger: "16:00", schema: "Monday" },
  { dag: "Tirsdag", kort: "Tir", apner: "08:00", stenger: "18:00", schema: "Tuesday" },
  { dag: "Onsdag", kort: "Ons", apner: "08:00", stenger: "18:00", schema: "Wednesday" },
  { dag: "Torsdag", kort: "Tor", apner: "08:00", stenger: "18:00", schema: "Thursday" },
  { dag: "Fredag", kort: "Fre", apner: "08:00", stenger: "14:00", schema: "Friday" },
  { dag: "Lørdag", kort: "Lør", apner: null, stenger: null, schema: "Saturday" },
  { dag: "Søndag", kort: "Søn", apner: null, stenger: null, schema: "Sunday" },
];

export type Bilde = { src: string; alt: string; w: number; h: number };

// KI-genererte bilder fra Kenneth. Ligger i public/bilder.
export const bilder = {
  resepsjonStor: { src: `${base}/bilder/resepsjon-stor.webp`, alt: "Lys resepsjon med Hringariki-skilt på veggen, varmt lys under disken og lenestoler ved vinduet.", w: 1600, h: 900 },
  resepsjon: { src: `${base}/bilder/resepsjon.webp`, alt: "Lys resepsjon med Hringariki-skilt på veggen, varmt lys under disken og lenestoler ved vinduet.", w: 1200, h: 675 },
  teamet: { src: `${base}/bilder/teamet.webp`, alt: "Ingrid, Jonas og Mira i mørkeblå arbeidsklær, smilende i gangen på klinikken.", w: 601, h: 336 },
  venterom: { src: `${base}/bilder/venterom.webp`, alt: "Rolig venterom med lenestoler, planter og et maleri av et fjellvann.", w: 427, h: 336 },
  gang: { src: `${base}/bilder/gang.webp`, alt: "Lys gang uten trapper, med nummererte dører til behandlingsrommene.", w: 367, h: 302 },
  tannskilt: { src: `${base}/bilder/tannskilt.webp`, alt: "", w: 398, h: 302 },
} satisfies Record<string, Bilde>;

export const behandlingsbilder: Record<string, Bilde> = {
  undersokelse: { src: `${base}/bilder/barn-i-stolen.webp`, alt: "Ei jente smiler i tannlegestolen mens tannlegen ser på tennene hennes.", w: 486, h: 336 },
  fylling: { src: `${base}/bilder/tannlege-i-arbeid.webp`, alt: "Tannlege med lupebriller behandler en pasient.", w: 380, h: 360 },
  akutt: { src: `${base}/bilder/behandlingsrom.webp`, alt: "Behandlingsrom med grønn tannlegestol, røntgenbilde på skjermen og stort vindu mot trær.", w: 1200, h: 675 },
  rotfylling: { src: `${base}/bilder/utstyr.webp`, alt: "Tannlegeinstrumenter på et blått brett.", w: 425, h: 302 },
  tannbleking: { src: `${base}/bilder/tannskilt.webp`, alt: "Tannsymbol på en glassdør, med en grønn plante foran.", w: 398, h: 302 },
  implantat: { src: `${base}/bilder/tannmodell.webp`, alt: "Modell av to tenner på disken ved siden av en plante.", w: 316, h: 302 },
};

export type Behandling = {
  slug: string;
  navn: string;
  ingress: string;
  pris: string;
  varighet: string;
  vondt: string;
  steg: string[];
  etterpa: string;
  sokeord: string;
};

export const behandlinger: Behandling[] = [
  {
    slug: "undersokelse",
    navn: "Undersøkelse",
    ingress:
      "En rolig gjennomgang av tenner og tannkjøtt. Vi forteller hva vi ser, og du bestemmer hva som skjer videre.",
    pris: "1 190 kr",
    varighet: "45 minutter",
    vondt:
      "Nei. Vi ser, tar bilder og renser lett. Har du ømt tannkjøtt, sier du fra, så tar vi det roligere.",
    steg: [
      "Vi tar en prat om hvordan du har det, og om noe plager deg.",
      "Tannlegen ser på tenner, tannkjøtt og bitt.",
      "Vi tar røntgenbilder hvis det er lenge siden sist.",
      "Du får en plan med pris før noe annet gjøres.",
    ],
    etterpa: "Du kan spise og drikke som vanlig med en gang.",
    sokeord: "tannsjekk",
  },
  {
    slug: "fylling",
    navn: "Fylling av hull",
    ingress:
      "Små hull fikser vi ofte på samme time. Du får bedøvelse først, og vi venter til den virker.",
    pris: "fra 1 290 kr",
    varighet: "30 til 60 minutter",
    vondt:
      "Du merker stikket fra bedøvelsen, men vi bruker bedøvende gel først. Etterpå skal det ikke gjøre vondt. Kjenner du noe, løfter du hånda, så stopper vi.",
    steg: [
      "Bedøvende gel på tannkjøttet, så bedøvelse.",
      "Vi fjerner det ødelagte og renser hullet.",
      "Hullet fylles med tannfarget materiale.",
      "Vi pusser fyllingen så bittet kjennes riktig.",
    ],
    etterpa: "Vent med å spise til bedøvelsen har gått ut, vanligvis to til tre timer.",
    sokeord: "hull i tann",
  },
  {
    slug: "akutt",
    navn: "Akutt tannpine",
    ingress:
      "Har du vondt nå? Ring oss før klokka ti, så prøver vi å finne en time samme dag.",
    pris: "fra 1 290 kr",
    varighet: "30 til 60 minutter",
    vondt:
      "Målet med timen er at du skal gå herfra med mindre vondt enn du kom. Vi bedøver før vi gjør noe.",
    steg: [
      "Ring oss. Vi spør kort om hvor det gjør vondt og hvor lenge.",
      "Tannlegen finner årsaken, ofte med et røntgenbilde.",
      "Vi stopper smerten, og avtaler resten av behandlingen senere.",
    ],
    etterpa: "Du får skriftlig beskjed om hva du bør gjøre de neste dagene.",
    sokeord: "tannlegevakt",
  },
  {
    slug: "rotfylling",
    navn: "Rotfylling",
    ingress:
      "Når nerven i tanna er betent, kan vi ofte redde tanna i stedet for å trekke den.",
    pris: "fra 5 500 kr",
    varighet: "1 til 2 timer, ofte to besøk",
    vondt:
      "Rotfylling har dårlig rykte, men gjøres med full bedøvelse. Det som gjør vondt er betennelsen før behandlingen, ikke selve behandlingen.",
    steg: [
      "Bedøvelse og en tynn gummiduk rundt tanna.",
      "Vi renser kanalene i roten.",
      "Kanalene fylles og tettes.",
      "Tanna får en fylling eller krone til slutt.",
    ],
    etterpa: "Tanna kan være øm i noen dager. Vanlige smertestillende hjelper.",
    sokeord: "rotfylling pris",
  },
  {
    slug: "tannbleking",
    navn: "Tannbleking",
    ingress:
      "Hvitere tenner hjemme, med skinner laget etter dine tenner og tett oppfølging fra oss.",
    pris: "3 900 kr",
    varighet: "To korte besøk og to uker hjemme",
    vondt:
      "Noen kjenner at tennene blir ilende i bleketiden. Det går over, og vi gir deg en gel som demper det.",
    steg: [
      "Vi sjekker at tennene er friske nok til bleking.",
      "Vi tar avtrykk og lager skinner til deg.",
      "Du bleker hjemme i en time om dagen i to uker.",
      "Vi ser på resultatet sammen.",
    ],
    etterpa: "Unngå kaffe, te og rødvin den første timen etter hver bleking.",
    sokeord: "tannbleking",
  },
  {
    slug: "implantat",
    navn: "Implantat",
    ingress:
      "En fast erstatning for en tann som mangler. Kjennes og ser ut som en vanlig tann.",
    pris: "fra 22 000 kr",
    varighet: "Tre til seks måneder fra start til ferdig tann",
    vondt:
      "Inngrepet gjøres med bedøvelse. De fleste beskriver dagene etter som mindre vondt enn de ventet.",
    steg: [
      "Undersøkelse og bilder for å se om kjeven passer.",
      "En liten skrue settes i kjeven.",
      "Skruen gror fast i to til tre måneder.",
      "Den nye tanna festes på skruen.",
    ],
    etterpa: "Du får en plan for stell. Implantatet pusses som en vanlig tann.",
    sokeord: "tannimplantat",
  },
];

export type Tannlege = {
  navn: string;
  rolle: string;
  utdannet: string;
  om: string;
  initialer: string;
  farge: string;
  portrett: string;
  hoy: string;
  sitat: string;
};

export const team: Tannlege[] = [
  {
    navn: "Ingrid Solheim",
    rolle: "Tannlege og daglig leder",
    utdannet: "Tannlege fra Universitetet i Oslo, 2009",
    om: "Har jobbet mye med pasienter som gruer seg. Forklarer alltid før hun gjør noe.",
    initialer: "IS",
    farge: "#DDEBE6",
    portrett: `${base}/bilder/portrett-ingrid.webp`,
    hoy: `${base}/bilder/hoy-ingrid.webp`,
    sitat: "Jeg forteller alltid hva jeg skal gjøre, før jeg gjør det.",
  },
  {
    navn: "Jonas Aas",
    rolle: "Tannlege",
    utdannet: "Tannlege fra Universitetet i Bergen, 2015",
    om: "Tar seg av implantater og rotfyllinger. Spiller fiolin når han ikke er på jobb.",
    initialer: "JA",
    farge: "#F3DDCF",
    portrett: `${base}/bilder/portrett-jonas.webp`,
    hoy: `${base}/bilder/hoy-jonas.webp`,
    sitat: "Det beste jeg hører, er at det gikk bedre enn du trodde.",
  },
  {
    navn: "Mira Haugland",
    rolle: "Tannpleier",
    utdannet: "Tannpleier fra Universitetet i Tromsø, 2018",
    om: "Rens, råd og barn. Er den mange av de minste pasientene spør etter.",
    initialer: "MH",
    farge: "#E8E4F0",
    portrett: `${base}/bilder/portrett-mira.webp`,
    hoy: `${base}/bilder/hoy-mira.webp`,
    sitat: "Barna får alltid prøve stolen før vi begynner.",
  },
];

export const sporsmal = [
  {
    s: "Jeg har ikke vært hos tannlegen på mange år. Blir dere sure?",
    svar:
      "Nei. Det er vanlig, og vi hører det hver uke. Vi starter med en prat og en undersøkelse, og lager en plan i ditt tempo.",
  },
  {
    s: "Kan jeg få vite prisen før dere begynner?",
    svar:
      "Ja, alltid. Etter undersøkelsen får du en skriftlig plan med pris. Ingenting gjøres før du har sagt ja.",
  },
  {
    s: "Hva om jeg må stoppe midt i behandlingen?",
    svar:
      "Vi avtaler et tegn før vi starter, som å løfte hånda. Da stopper vi med en gang, uten diskusjon.",
  },
  {
    s: "Hvordan avbestiller jeg?",
    svar:
      "Ring eller send SMS senest dagen før. Avbestiller du senere enn det, kan vi ta et gebyr på 500 kr.",
  },
  {
    s: "Får jeg støtte fra Helfo?",
    svar:
      "Noen behandlinger gir rett til støtte, for eksempel ved sykdom i tannkjøttet. Vi sjekker for deg og trekker støtten fra regningen.",
  },
];
