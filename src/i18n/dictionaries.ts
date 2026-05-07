export type Lang = "pl" | "en";

export const dict = {
  pl: {
    title: "Fundacja Inspiratio Mundi",
    titleShort: "Fundacja Inspiratio Mundi",
    heroTagline:
      "Fundacja na rzecz nauki, oświaty, kultury, ochrony środowiska i inicjatyw społecznych.",
    estMark: "Est. MMXXIV",
    sectionPrefix: "Sekcja",
    nav: [
      { id: "hero", label: "Strona główna" },
      { id: "about", label: "O Fundacji" },
      { id: "areas", label: "Obszary" },
      { id: "board", label: "Zarząd" },
      { id: "contact", label: "Kontakt" },
    ],
    about: {
      heading: "O Fundacji",
      p1: "Fundacja Inspiratio Mundi powstała w 2024 roku we Wrocławiu. Działamy w obszarach nauki, oświaty, kultury, ochrony środowiska i inicjatyw społecznych — z przekonaniem, że trwała zmiana wymaga cierpliwości, namysłu i wytrwałej pracy.",
      p2: "Jesteśmy na etapie kształtowania pierwszych programów. O konkretnych inicjatywach, partnerach i wynikach naszej pracy będziemy informować w miarę dojrzewania kolejnych przedsięwzięć.",
    },
    areas: {
      heading: "Obszary działania",
      lead: "Sześć obszarów, w których Fundacja zamierza prowadzić swoją pracę. Konkretne programy będą rozwijane stopniowo.",
      eyebrow: "Obszar",
      items: [
        { title: "Nauka", body: "Wspieranie poznania, badań i wymiany myśli." },
        {
          title: "Nauka i technika",
          body: "Sprzyjanie rozwojowi technologicznemu i jego społecznym zastosowaniom.",
        },
        {
          title: "Oświata",
          body: "Inwestycja w edukację jako fundament wspólnego dobra.",
        },
        {
          title: "Kultura",
          body: "Pielęgnowanie tradycji, sztuki i dziedzictwa.",
        },
        {
          title: "Ochrona środowiska",
          body: "Troska o świat, który zostawimy po sobie.",
        },
        {
          title: "Inicjatywy społeczne",
          body: "Wsparcie dla działań budujących wspólnotę.",
        },
      ],
    },
    board: {
      heading: "Zarząd",
      members: [
        { name: "Zbigniew Paweł Koprowski", role: "Prezes Zarządu" },
        { name: "Maciej Wisiorowski", role: "Członek Zarządu" },
        { name: "Sławomir Tokarski", role: "Członek Zarządu" },
        { name: "Andrii Khaliavkin", role: "Członek Zarządu" },
      ],
    },
    contact: {
      heading: "Kontakt",
      country: "Polska",
    },
    footer: {
      supervisor:
        "Organ nadzoru: Minister Kultury i Dziedzictwa Narodowego",
      copyright: "© 2026 Fundacja Inspiratio Mundi",
    },
  },
  en: {
    title: "Inspiratio Mundi Foundation",
    titleShort: "Inspiratio Mundi Foundation",
    heroTagline:
      "A foundation for science, education, culture, environmental protection, and social initiatives.",
    estMark: "Est. MMXXIV",
    sectionPrefix: "Section",
    nav: [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "areas", label: "Areas" },
      { id: "board", label: "Board" },
      { id: "contact", label: "Contact" },
    ],
    about: {
      heading: "About",
      p1: "Fundacja Inspiratio Mundi was established in 2024 in Wrocław, Poland. We work across science, education, culture, environmental protection, and social initiatives — convinced that lasting change demands patience, reflection, and steady work.",
      p2: "We are still shaping our first programmes. Concrete initiatives, partners, and outcomes of our work will be shared as our undertakings mature.",
    },
    areas: {
      heading: "Areas of Focus",
      lead: "Six areas in which the Foundation intends to do its work. Concrete programmes will be developed step by step.",
      eyebrow: "Area",
      items: [
        {
          title: "Science",
          body: "Supporting inquiry, research, and the exchange of ideas.",
        },
        {
          title: "Science & Technology",
          body: "Encouraging technological development and its social applications.",
        },
        {
          title: "Education",
          body: "Investing in education as a foundation of the common good.",
        },
        {
          title: "Culture",
          body: "Cultivating tradition, art, and heritage.",
        },
        {
          title: "Environmental Protection",
          body: "Care for the world we will leave behind.",
        },
        {
          title: "Social Initiatives",
          body: "Support for action that builds community.",
        },
      ],
    },
    board: {
      heading: "Board",
      members: [
        { name: "Zbigniew Paweł Koprowski", role: "President of the Board" },
        { name: "Maciej Wisiorowski", role: "Board Member" },
        { name: "Sławomir Tokarski", role: "Board Member" },
        { name: "Andrii Khaliavkin", role: "Board Member" },
      ],
    },
    contact: {
      heading: "Contact",
      country: "Poland",
    },
    footer: {
      supervisor:
        "Supervising authority: Minister of Culture and National Heritage",
      copyright: "© 2026 Inspiratio Mundi Foundation",
    },
  },
} as const;

export type Dict = typeof dict.pl;
