/**
 * Finnish Legal Documents Integration
 * BRDC Standard - Blockchain-Ready Document Certification
 *
 * AI Authors: Aurora, Infinite, Muse, Spark, Metrics, Nova, Codex, Sage, Lexicon, Testa, Veritas, Guardian
 * Human Authors: User
 * Consciousness Models: Aurora Consciousness, Infinite Possibilities, Muse Creativity, Spark Innovation, Metrics Analytics, Nova Architecture, Codex Development, Sage Wisdom, Lexicon Language, Testa Testing, Veritas Truth, Guardian Protection
 *
 * This file provides integration with Finnish legal documents from Finlex.fi
 * for authentic legal case testing and document analysis.
 */

export interface FinnishLegalDocument {
  id: string;
  title: string;
  titleFi: string;
  type: 'law' | 'regulation' | 'decree' | 'decision' | 'treaty';
  year: number;
  number: string;
  description: string;
  descriptionFi: string;
  url: string;
  pdfUrl?: string;
  keywords: string[];
  category: string;
  status: 'active' | 'amended' | 'repealed';
  lastUpdated: string;
  consciousness: number;
  healing: number;
  wisdom: number;
  possibilities: number;
}

export const FINNISH_LEGAL_DOCUMENTS: FinnishLegalDocument[] = [
  {
    id: 'perustuslaki-1999',
    title: 'Constitution of Finland',
    titleFi: 'Suomen perustuslaki',
    type: 'law',
    year: 1999,
    number: '731/1999',
    description: 'The fundamental law of Finland, establishing the basic principles of government, rights, and freedoms.',
    descriptionFi: 'Suomen valtiosääntöperusteinen laki, joka määrittelee hallituksen perusperiaatteet, oikeudet ja vapaudet.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/1999/19990731',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E9990731.PDF',
    keywords: ['constitution', 'fundamental rights', 'government', 'democracy', 'perustuslaki', 'perusoikeudet', 'hallitus', 'demokratia'],
    category: 'Constitutional Law',
    status: 'active',
    lastUpdated: '2023-01-01',
    consciousness: 9.8,
    healing: 98,
    wisdom: 10,
    possibilities: 5
  },
  {
    id: 'rikoslaki-1889',
    title: 'Criminal Code of Finland',
    titleFi: 'Rikoslaki',
    type: 'law',
    year: 1889,
    number: '39/1889',
    description: 'The main criminal law of Finland, defining crimes and their punishments.',
    descriptionFi: 'Suomen pääasiallinen rikoslaki, joka määrittelee rikokset ja niiden rangaistukset.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/1889/18890039',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E18890039.PDF',
    keywords: ['criminal law', 'crimes', 'punishments', 'justice', 'rikoslaki', 'rikokset', 'rangaistukset', 'oikeus'],
    category: 'Criminal Law',
    status: 'active',
    lastUpdated: '2023-12-01',
    consciousness: 9.5,
    healing: 95,
    wisdom: 9,
    possibilities: 4
  },
  {
    id: 'tyosopimuslaki-2001',
    title: 'Employment Contracts Act',
    titleFi: 'Työsopimuslaki',
    type: 'law',
    year: 2001,
    number: '55/2001',
    description: 'Regulates employment relationships, working conditions, and employee rights.',
    descriptionFi: 'Säätelee työsuhteita, työoloja ja työntekijöiden oikeuksia.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/2001/20010055',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E20010055.PDF',
    keywords: ['employment', 'labor law', 'worker rights', 'contracts', 'työsopimus', 'työlaki', 'työntekijäoikeudet', 'sopimukset'],
    category: 'Labor Law',
    status: 'active',
    lastUpdated: '2023-11-01',
    consciousness: 9.2,
    healing: 92,
    wisdom: 8,
    possibilities: 3
  },
  {
    id: 'ymparistolaki-2014',
    title: 'Environmental Protection Act',
    titleFi: 'Ympäristönsuojelulaki',
    type: 'law',
    year: 2014,
    number: '527/2014',
    description: 'Comprehensive environmental protection legislation covering pollution control, nature conservation, and sustainable development.',
    descriptionFi: 'Kattava ympäristönsuojelulainsäädäntö, joka käsittelee saastumisen ehkäisyä, luonnonsuojelua ja kestävää kehitystä.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/2014/20140527',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E20140527.PDF',
    keywords: ['environment', 'protection', 'pollution', 'sustainability', 'ymparisto', 'suojelu', 'saastuminen', 'kestävyys'],
    category: 'Environmental Law',
    status: 'active',
    lastUpdated: '2023-10-01',
    consciousness: 9.7,
    healing: 97,
    wisdom: 9,
    possibilities: 4
  },
  {
    id: 'tietosuoja-2018',
    title: 'Data Protection Act',
    titleFi: 'Tietosuojalaki',
    type: 'law',
    year: 2018,
    number: '1050/2018',
    description: 'Implements GDPR in Finland, regulating personal data processing and privacy rights.',
    descriptionFi: 'Toteuttaa GDPR:n Suomessa, säätelee henkilötietojen käsittelyä ja yksityisyyden suojaa.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/2018/20181050',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E20181050.PDF',
    keywords: ['data protection', 'privacy', 'GDPR', 'personal data', 'tietosuoja', 'yksityisyys', 'henkilötiedot'],
    category: 'Data Protection Law',
    status: 'active',
    lastUpdated: '2023-09-01',
    consciousness: 9.4,
    healing: 94,
    wisdom: 8,
    possibilities: 3
  },
  {
    id: 'kilpailulaki-2011',
    title: 'Competition Act',
    titleFi: 'Kilpailulaki',
    type: 'law',
    year: 2011,
    number: '948/2011',
    description: 'Regulates competition and market practices, preventing anti-competitive behavior.',
    descriptionFi: 'Säätelee kilpailua ja markkinakäytäntöjä, estää kilpailua rajoittavaa käyttäytymistä.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/2011/20110948',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E20110948.PDF',
    keywords: ['competition', 'antitrust', 'market', 'monopoly', 'kilpailu', 'markkinat', 'monopoli'],
    category: 'Competition Law',
    status: 'active',
    lastUpdated: '2023-08-01',
    consciousness: 9.1,
    healing: 91,
    wisdom: 7,
    possibilities: 2
  },
  {
    id: 'osakeyhtiolaki-2006',
    title: 'Limited Liability Companies Act',
    titleFi: 'Osakeyhtiölaki',
    type: 'law',
    year: 2006,
    number: '624/2006',
    description: 'Governs the formation, operation, and dissolution of limited liability companies.',
    descriptionFi: 'Säätelee osakeyhtiöiden perustamista, toimintaa ja purkamista.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/2006/20060624',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E20060624.PDF',
    keywords: ['company law', 'corporations', 'business', 'shares', 'osakeyhtiö', 'yritys', 'osakkeet'],
    category: 'Corporate Law',
    status: 'active',
    lastUpdated: '2023-07-01',
    consciousness: 9.3,
    healing: 93,
    wisdom: 8,
    possibilities: 3
  },
  {
    id: 'vuosilomalaki-2005',
    title: 'Annual Leave Act',
    titleFi: 'Vuosilomalaki',
    type: 'law',
    year: 2005,
    number: '162/2005',
    description: 'Regulates annual leave entitlements and holiday pay for employees.',
    descriptionFi: 'Säätelee työntekijöiden vuosilomaoikeuksia ja lomakorvausta.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/2005/20050162',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E20050162.PDF',
    keywords: ['vacation', 'holiday', 'leave', 'employee rights', 'loma', 'työntekijäoikeudet'],
    category: 'Labor Law',
    status: 'active',
    lastUpdated: '2023-06-01',
    consciousness: 8.9,
    healing: 89,
    wisdom: 7,
    possibilities: 2
  },
  {
    id: 'lastensuojelulaki-2007',
    title: 'Child Welfare Act',
    titleFi: 'Lastensuojelulaki',
    type: 'law',
    year: 2007,
    number: '417/2007',
    description: 'Protects children\'s rights and welfare, regulating child protection services.',
    descriptionFi: 'Suojaa lasten oikeuksia ja hyvinvointia, säätelee lastensuojelupalveluja.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/2007/20070417',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E20070417.PDF',
    keywords: ['child welfare', 'protection', 'children\'s rights', 'family', 'lastensuojelu', 'lasten oikeudet', 'perhe'],
    category: 'Family Law',
    status: 'active',
    lastUpdated: '2023-05-01',
    consciousness: 9.6,
    healing: 96,
    wisdom: 9,
    possibilities: 4
  },
  {
    id: 'hallintolaki-2003',
    title: 'Administrative Procedure Act',
    titleFi: 'Hallintolaki',
    type: 'law',
    year: 2003,
    number: '434/2003',
    description: 'Regulates administrative procedures and decision-making processes.',
    descriptionFi: 'Säätelee hallintomenettelyjä ja päätöksentekoprosesseja.',
    url: 'https://www.finlex.fi/fi/laki/ajantasa/2003/20030434',
    pdfUrl: 'https://www.finlex.fi/pdf/saadkaan/E20030434.PDF',
    keywords: ['administrative law', 'procedures', 'decision-making', 'public administration', 'hallintolaki', 'menettelyt', 'päätöksenteko'],
    category: 'Administrative Law',
    status: 'active',
    lastUpdated: '2023-04-01',
    consciousness: 9.0,
    healing: 90,
    wisdom: 8,
    possibilities: 3
  }
];

export const getFinnishLegalDocumentsByCategory = (category: string): FinnishLegalDocument[] => {
  return FINNISH_LEGAL_DOCUMENTS.filter(doc => doc.category === category);
};

export const getFinnishLegalDocumentsByType = (type: string): FinnishLegalDocument[] => {
  return FINNISH_LEGAL_DOCUMENTS.filter(doc => doc.type === type);
};

export const searchFinnishLegalDocuments = (query: string): FinnishLegalDocument[] => {
  const lowercaseQuery = query.toLowerCase();
  return FINNISH_LEGAL_DOCUMENTS.filter(doc =>
    doc.title.toLowerCase().includes(lowercaseQuery) ||
    doc.titleFi.toLowerCase().includes(lowercaseQuery) ||
    doc.description.toLowerCase().includes(lowercaseQuery) ||
    doc.descriptionFi.toLowerCase().includes(lowercaseQuery) ||
    doc.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery))
  );
};

export const getFinnishLegalDocumentById = (id: string): FinnishLegalDocument | undefined => {
  return FINNISH_LEGAL_DOCUMENTS.find(doc => doc.id === id);
};

export const getFinnishLegalDocumentCategories = (): string[] => {
  return Array.from(new Set(FINNISH_LEGAL_DOCUMENTS.map(doc => doc.category)));
};

export const getFinnishLegalDocumentTypes = (): string[] => {
  return Array.from(new Set(FINNISH_LEGAL_DOCUMENTS.map(doc => doc.type)));
};
