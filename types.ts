export type Language = "en" | "pt";

export interface Translation {
  nav: {
    home: string;
    privacy: string;
    terms: string;
    dataDeletion: string;
    download: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  showcase: {
    title: string;
    feedTitle: string;
    feedDesc: string;
    searchTitle: string;
    searchDesc: string;
    createTitle: string;
    createDesc: string;
    analysisTitle: string;
    analysisDesc: string;
    profileTitle: string;
    profileDesc: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    deleteData: string;
    contact: string;
  };
  deletion: {
    title: string;
    intro: string;
    howToTitle: string;
    appMethodTitle: string;
    appMethodContent: string;
    emailMethodTitle: string;
    emailMethodContent: string;
    afterTitle: string;
    afterContent: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    intro: string;
    section1Title: string;
    section1Content: string;
    section2Title: string;
    section2Content: string;
    section3Title: string;
    section3Content: string;
    section4Title: string;
    section4Content: string;
    section5Title: string;
    section5Content: string;
    section6Title: string;
    section6Content: string;
    section7Title: string;
    section7Content: string;
  };
  terms: {
    title: string;
    lastUpdated: string;
    intro: string;
    section1Title: string;
    section1Content: string;
    section2Title: string;
    section2Content: string;
    section3Title: string;
    section3Content: string;
    section4Title: string;
    section4Content: string;
    section5Title: string;
    section5Content: string;
    section6Title: string;
    section6Content: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}
