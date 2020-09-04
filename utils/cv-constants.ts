export type Occupation = {
  startYear: number;
  endYear: number | string;
  company: string;
  position: string;
};

export type Education = {
  startYear: number;
  endYear: number;
  education: string;
  institute: string;
};

export type Certificate = {
  year: number;
  courseName: string;
  provider: string;
};

export type PersonalQualification = string;

export type Competence = string;

export const occupations: Occupation[] = [
  {
    startYear: 2017,
    endYear: 2019,
    company: 'IT Minds',
    position: 'Software Developer (Part time)',
  },
  {
    startYear: 2019,
    endYear: 2020,
    company: 'IT Minds',
    position: 'Software Developer',
  },
  {
    startYear: 2020,
    endYear: 'now',
    company: 'Trifork',
    position: 'Software Pilot',
  },
];

export const educations: Education[] = [
  {
    startYear: 2002,
    endYear: 2012,
    education: '0th – 9th grade',
    institute: 'Sct. Hans Skole',
  },
  {
    startYear: 2012,
    endYear: 2013,
    education: '10th grade',
    institute: 'Vesterdal Efterskole (GPA: 10.3)',
  },
  {
    startYear: 2013,
    endYear: 2016,
    education: 'Higher Technical Exam. Programme',
    institute: 'Odense Technical College (GPA: 11.4)',
  },
  {
    startYear: 2017,
    endYear: 2019,
    education: 'BSc in Software Development (unfinished)',
    institute: 'IT University of Copenhagen',
  },
];

export const certificates: Certificate[] = [
  {
    year: 2014,
    courseName: 'Introduction to Computer Science',
    provider: 'HarvardX',
  },
  {
    year: 2015,
    courseName: 'Introduction to Linux',
    provider: 'LinuxFoundationX',
  },
  {
    year: 2015,
    courseName: 'Algorithms: Design and Analysis, Part 1',
    provider: 'Stanford University',
  },
  {
    year: 2016,
    courseName: 'Software Construction in Java',
    provider: 'MITx',
  },
  {
    year: 2017,
    courseName: 'Algorithms: Design and Analysis, Part 2',
    provider: 'Stanford University',
  },
  {
    year: 2017,
    courseName: 'Advanced Software Construction in Java',
    provider: 'MITx',
  },
  {
    year: 2017,
    courseName: 'Machine Learning',
    provider: 'Stanford University',
  },
  {
    year: 2019,
    courseName: 'Deep Learning Specialization',
    provider: 'Stanford University',
  },
];

export const personalQualifications: PersonalQualification[] = [
  'Social, highly motivated and ambition.',
  'Know the value of a happy and healthy work environment and try to provide it for my peers.',
  'Great experience succesfully working agile with scrum.',
  'Great desire to learn. Spend a lot of free time learning and optimizing how I do so.',
  'Huge proponent of knowledge sharing.',
  'Love challenge and responsibility.',
];

export const competencies: Competence[] = [
  'HTML, responsive CSS, Sass, Less.',
  'TypeScript, JavaScript, Node.js.',
  'React, React Native, Next.js, Gatsby, Create React App, Angular.',
  'CSS-in-JS: Emotion, Styled Components, styled-jsx.',
  'State Management: Redux, MobX, React Context API.',
  'Agile & Scrum.',
  'Frontend performance and web scale.',
  'Search Engine Optimization.',
  'Static and serverless hosting: Netlify, Vercel.',
  'API Integration: REST, GraphQL.',
  'API client code generation: OpenAPI Generator.',
  '3D, creative coding, procedually generated graphics: Processing, p5.js, Three.js, WebGL.',
  'UI design: Figma.',
  'jQuery.',
  'Backend: Java, C#, ASP.NET, SQL, Umbraco.',
  'Testing: Jasmine, Jest, Cypress.',
  'Animation: React Transition Group.',
];
