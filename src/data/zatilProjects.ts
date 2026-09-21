export interface ZatilProject {
  id: string;
  title: string;
  church: string;
  location: string;
  category: 'organs' | 'strings' | 'awards';
  tag: string;
  code: string;
  description: string;
  specs: string[];
  images: string[];
}

export interface ShowcaseItem {
  title: string;
  category: 'strings' | 'showcase';
  tag: string;
  description: string;
  image: string;
  images: string[];
}

export interface AwardItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
  images: string[];
}

export const ZATIL_PROJECTS: ZatilProject[] = [
  {
    "id": "rccg-redemption-camp",
    "title": "RCCG Redemption Camp 3x3km Arena",
    "church": "Redeemed Christian Church of God (RCCG) Arena",
    "location": "Redemption Camp, Ogun State",
    "category": "organs",
    "tag": "Monumental Arena Pipe Façade",
    "code": "OPUS-ARENA",
    "description": "Phase II installation of the monumental Zatil Conference Pipe 21 engineered specifically for the world-renowned 3x3km auditorium arena.",
    "specs": [
      "Conference Pipe 21 Series",
      "Mega-Auditorium Acoustic Throw",
      "Gold Anodized Display Pipes"
    ],
    "images": [
      "/images/zatil/projects/sights-from-the-commencement-of-phase-ii-of-01.jpg",
      "/images/zatil/projects/sights-from-the-commencement-of-phase-ii-of-02.jpg",
      "/images/zatil/projects/sights-from-the-commencement-of-phase-ii-of-03.jpg",
      "/images/zatil/projects/sights-from-the-commencement-of-phase-ii-of-04.jpg"
    ]
  },
  {
    "id": "bishop-akinyele-ibadan",
    "title": "Bishop Akinyele Memorial Anglican Church",
    "church": "Bishop Akinyele Memorial Anglican Church",
    "location": "Ibadan, Oyo State",
    "category": "organs",
    "tag": "51-Piped Extended Façade + Dual Screen",
    "code": "OPUS-IBADAN",
    "description": "Fabrication and installation of a 51-piped Extended Conference Façade and dual 37-piped façade screens for a 4-Manual AltusKlass digital pipe organ.",
    "specs": [
      "4-Manual AltusKlass Console",
      "51-Piped Main Façade",
      "Dual 37-Piped Side Screens"
    ],
    "images": [
      "/images/zatil/projects/delivering-a-51-piped-extended-conference-pi-01.jpg",
      "/images/zatil/projects/delivering-a-51-piped-extended-conference-pi-02.jpg",
      "/images/zatil/projects/delivering-a-51-piped-extended-conference-pi-03.jpg",
      "/images/zatil/projects/delivering-a-51-piped-extended-conference-pi-04.jpg",
      "/images/zatil/projects/delivering-a-51-piped-extended-conference-pi-05.jpg"
    ]
  },
  {
    "id": "new-estate-baptist-abuja",
    "title": "New Estate Baptist Church",
    "church": "New Estate Baptist Church",
    "location": "Garki / Central Area, Abuja FCT",
    "category": "organs",
    "tag": "Zatil Conference Pipe E-Series",
    "code": "OPUS-ABUJA",
    "description": "Bespoke 43-piped decorative façade installation coupled with a Viscount CLV8 organ console in the main sanctuary.",
    "specs": [
      "43-Piped E-Series Façade",
      "Viscount CLV8 Integration",
      "Custom Altar Joinery"
    ],
    "images": [
      "/images/zatil/projects/we-are-pleased-to-announce-the-completion-of-01.jpg",
      "/images/zatil/projects/we-are-pleased-to-announce-the-completion-of-02.jpg",
      "/images/zatil/projects/we-are-pleased-to-announce-the-completion-of-03.jpg",
      "/images/zatil/projects/we-are-pleased-to-announce-the-completion-of-04.jpg"
    ]
  },
  {
    "id": "bayelsa-ecumenical-centre",
    "title": "Bayelsa State Ecumenical Centre",
    "church": "Bayelsa State Ecumenical Centre",
    "location": "Igbegene, Yenagoa, Bayelsa State",
    "category": "organs",
    "tag": "State Ecumenical Pipe Façade",
    "code": "OPUS-BAYELSA",
    "description": "Monumental Zatil extended conference pipe façade project custom-built for the landmark 10,000-seat state ecumenical auditorium.",
    "specs": [
      "Extended Conference Façade",
      "High-Ceiling Array",
      "Grand Auditorium Voicing"
    ],
    "images": [
      "/images/zatil/projects/we-are-glad-to-inform-you-about-our-zatil-26-01.jpg",
      "/images/zatil/projects/we-are-glad-to-inform-you-about-our-zatil-26-02.jpg",
      "/images/zatil/projects/we-are-glad-to-inform-you-about-our-zatil-26-03.jpg"
    ]
  },
  {
    "id": "st-thomas-port-harcourt",
    "title": "St. Thomas Anglican Church (Mile 2 Diobu)",
    "church": "St. Thomas Anglican Church, Niger Delta North Diocese",
    "location": "Mile 2 Diobu, Port Harcourt, Rivers State",
    "category": "organs",
    "tag": "Viscount Unico 700 4-Manual Organ",
    "code": "OPUS-PH-01",
    "description": "Viscount Unico 700 prestigious 4-manual 8-in-1 digital organ with 78 speaking stops in state-of-the-art luxury cabinet with Physis physical modeling technology and Zatil façade.",
    "specs": [
      "Viscount Unico 700 (4-Manual)",
      "78 Speaking Stops (Physis Modeling)",
      "Bespoke Architectural Casework"
    ],
    "images": [
      "/images/zatil/projects/viscount-unico-700-a-prestigious-4-manual-an-01.jpg",
      "/images/zatil/projects/viscount-unico-700-a-prestigious-4-manual-an-02.jpg",
      "/images/zatil/projects/viscount-unico-700-a-prestigious-4-manual-an-03.jpg",
      "/images/zatil/projects/viscount-unico-700-a-prestigious-4-manual-an-04.jpg"
    ]
  },
  {
    "id": "our-fathers-cathedral-ph",
    "title": "Our Father's Cathedral",
    "church": "Our Father's Cathedral",
    "location": "Port Harcourt, Rivers State",
    "category": "organs",
    "tag": "Cathedral Sanctuary Pipe Installation",
    "code": "OPUS-PH-02",
    "description": "Complete high-vaulted gallery façade casework and pipe staging for cathedral liturgical worship.",
    "specs": [
      "Cathedral Façade Casework",
      "Acoustic Stage Integration",
      "Solid Hardwood Framing"
    ],
    "images": [
      "/images/zatil/projects/sights-from-our-installation-at-our-fathers-01.jpg",
      "/images/zatil/projects/sights-from-our-installation-at-our-fathers-02.jpg",
      "/images/zatil/projects/sights-from-our-installation-at-our-fathers-03.jpg",
      "/images/zatil/projects/sights-from-our-installation-at-our-fathers-04.jpg",
      "/images/zatil/projects/sights-from-our-installation-at-our-fathers-05.jpg"
    ]
  },
  {
    "id": "st-pauls-igbara-oke",
    "title": "St. Paul's Anglican Cathedral",
    "church": "St. Paul's Anglican Cathedral",
    "location": "Igbara Oke, Ondo State",
    "category": "organs",
    "tag": "Custom Viscount Façade & Screen Upgrade",
    "code": "OPUS-ONDO-01",
    "description": "Viscount organ upgraded with custom-built Zatil conference pipe façade and two units of façade screens to elevate sanctuary acoustics and visual aesthetics.",
    "specs": [
      "Viscount Organ Upgrade",
      "2x Custom Façade Screens",
      "Cathedral Chancel Joinery"
    ],
    "images": [
      "/images/zatil/projects/the-viscount-organ-of-st-pauls-anglician-cat-01.jpg",
      "/images/zatil/projects/the-viscount-organ-of-st-pauls-anglician-cat-02.jpg",
      "/images/zatil/projects/the-viscount-organ-of-st-pauls-anglician-cat-03.jpg",
      "/images/zatil/projects/the-viscount-organ-of-st-pauls-anglician-cat-04.jpg"
    ]
  },
  {
    "id": "st-patrick-owo",
    "title": "St. Patrick Anglican Church",
    "church": "St. Patrick Anglican Church",
    "location": "Ijebu Owo, Ondo State",
    "category": "organs",
    "tag": "Sanctuary Pipe-Organ Façade",
    "code": "OPUS-ONDO-02",
    "description": "Architectural organ casework and gilded pipes designed to harmonize with church sanctuary woodwork.",
    "specs": [
      "Custom Pipe Array",
      "Chancel Woodwork Matching",
      "Acoustic Dispersion"
    ],
    "images": [
      "/images/zatil/projects/zatil-installation-at-st-patrick-anglician-c-01.jpg",
      "/images/zatil/projects/zatil-installation-at-st-patrick-anglician-c-02.jpg",
      "/images/zatil/projects/zatil-installation-at-st-patrick-anglician-c-03.jpg",
      "/images/zatil/projects/zatil-installation-at-st-patrick-anglician-c-04.jpg"
    ]
  },
  {
    "id": "wesley-methodist-ode-aye",
    "title": "Wesley Methodist Cathedral",
    "church": "Wesley Methodist Cathedral",
    "location": "Ode Aye, Ondo State",
    "category": "organs",
    "tag": "Cathedral Organ Façade",
    "code": "OPUS-ONDO-03",
    "description": "Full pipe façade installation for Methodist Cathedral liturgical services.",
    "specs": [
      "Liturgical Façade",
      "Solid Hardwood Structure",
      "Gold Display Pipes"
    ],
    "images": [
      "/images/zatil/projects/zatil-installation-at-wesley-methodist-cathe-01.jpg",
      "/images/zatil/projects/zatil-installation-at-wesley-methodist-cathe-02.jpg",
      "/images/zatil/projects/zatil-installation-at-wesley-methodist-cathe-03.jpg"
    ]
  },
  {
    "id": "private-chapel-chorum90",
    "title": "Private Home Chapel Viscount Chorum 90",
    "church": "Private Residential Chapel",
    "location": "Private Residence, Nigeria",
    "category": "organs",
    "tag": "145 Golden Pipes + Viscount Regent Classic",
    "code": "OPUS-PRIVATE",
    "description": "Viscount Regent Classic Chorum 90 digital pipe organ with 145 hand-finished golden display pipes.",
    "specs": [
      "Viscount Regent Chorum 90",
      "145 Gold Pipes Array",
      "Private Chapel Acoustics"
    ],
    "images": [
      "/images/zatil/projects/on-going-installation-of-viscount-regent-cla-01.jpg",
      "/images/zatil/projects/on-going-installation-of-viscount-regent-cla-02.jpg",
      "/images/zatil/projects/on-going-installation-of-viscount-regent-cla-03.jpg",
      "/images/zatil/projects/on-going-installation-of-viscount-regent-cla-04.jpg"
    ]
  },
  {
    "id": "bamac-altusklass-organ",
    "title": "BAMAC AltusKlass 4-Manual Digital Organ",
    "church": "Cathedral / Concert Auditorium",
    "location": "Nigeria",
    "category": "organs",
    "tag": "4-Manual BAMAC AltusKlass + Zatil Façade",
    "code": "OPUS-BAMAC",
    "description": "4-Manual BAMAC AltusKlass digital organ voiced and paired with bespoke Zatil architectural pipe façade.",
    "specs": [
      "4-Manual Console",
      "Multi-Division Pipe Tower",
      "Concert Voicing"
    ],
    "images": [
      "/images/zatil/projects/bamac-altusklass-4-manual-digital-organ-with-01.jpg",
      "/images/zatil/projects/bamac-altusklass-4-manual-digital-organ-with-02.jpg",
      "/images/zatil/projects/bamac-altusklass-4-manual-digital-organ-with-03.jpg",
      "/images/zatil/projects/bamac-altusklass-4-manual-digital-organ-with-04.jpg",
      "/images/zatil/projects/bamac-altusklass-4-manual-digital-organ-with-05.jpg"
    ]
  }
];

export const ZATIL_SHOWCASE: ShowcaseItem[] = [
  {
    "title": "Violin & Viola Hand-Carved Scrolls & Neck",
    "category": "strings",
    "tag": "Master Lutherie Craft",
    "description": "Hand-carved maple scrolls, fine pegbox detailing, and precision neck angles crafted at the 39 Yaba Street atelier in Akure.",
    "image": "/images/zatil/showcase/sounds-about-right-4-01.jpg",
    "images": [
      "/images/zatil/showcase/sounds-about-right-4-01.jpg",
      "/images/zatil/showcase/sounds-about-right-4-02.jpg",
      "/images/zatil/showcase/sounds-about-right-4-03.jpg",
      "/images/zatil/showcase/sounds-about-right-4-04.jpg",
      "/images/zatil/showcase/sounds-about-right-5-01.jpg",
      "/images/zatil/showcase/sounds-about-right-5-02.jpg",
      "/images/zatil/showcase/sounds-about-right-5-03.jpg"
    ]
  },
  {
    "title": "Concert Cello & Double Bass Soundboard Voicing",
    "category": "strings",
    "tag": "Acoustic Resonance Engineering",
    "description": "Precision plate graduation, bass bar fitting, and soundpost alignment producing rich, warm projection in Nigerian concert halls.",
    "image": "/images/zatil/showcase/sounds-about-right-4-05.jpg",
    "images": [
      "/images/zatil/showcase/sounds-about-right-4-05.jpg",
      "/images/zatil/showcase/sounds-about-right-5-04.jpg",
      "/images/zatil/showcase/sounds-about-right-5-05.jpg",
      "/images/zatil/showcase/if-you-believe-this-complete-the-statement-a-01.jpg"
    ]
  },
  {
    "title": "Exhibition & National Showcase",
    "category": "showcase",
    "tag": "National Brand Exhibition",
    "description": "Zatil Stand presenting indigenous violins, violas, cellos, and organ pipe casework to stakeholders and music directors nationwide.",
    "image": "/images/zatil/showcase/exhibition-monday-zatil-stand-at-the-ongoing-01.jpg",
    "images": [
      "/images/zatil/showcase/exhibition-monday-zatil-stand-at-the-ongoing-01.jpg",
      "/images/zatil/showcase/exhibition-monday-zatil-stand-at-the-ongoing-02.jpg",
      "/images/zatil/showcase/exhibition-monday-zatil-stand-at-the-ongoing-03.jpg",
      "/images/zatil/showcase/exhibition-monday-zatil-stand-at-the-ongoing-04.jpg",
      "/images/zatil/showcase/exhibition-monday-zatil-stand-at-the-ongoing-05.jpg"
    ]
  }
];

export const ZATIL_AWARDS: AwardItem[] = [
  {
    "title": "Southwest Nigeria Outstanding Musical Equipment Manufacturing Company (2020)",
    "issuer": "Odua Youth Parliament / Regional Industry Awards",
    "year": "2020",
    "description": "Recognizing Zatil Group for groundbreaking indigenous manufacturing of classical acoustic instruments and architectural pipe organ facades in Nigeria.",
    "images": [
      "/images/zatil/awards/thank-god-for-the-journey-so-far-we-started-01.jpg",
      "/images/zatil/awards/thank-god-for-the-journey-so-far-we-started-02.jpg",
      "/images/zatil/awards/thank-god-for-the-journey-so-far-we-started-03.jpg"
    ]
  }
];
