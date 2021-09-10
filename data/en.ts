export * from './common'

export const labels = {
  ranks: 'Reputation / Ranks',
  tools: 'Programming Tools',
  languages: 'Languages',
  education: 'Education',
  experiences: 'Work Experience',
  skills: 'Technical Skills',
  projects: 'Projects',
}

export const name = 'Amine Ben hammou'
export const photo = '/profile.jpeg'
export const quote =
  'I like to solve challenging problems using efficient algorithms and high quality code.'

export const personalInfos = [
  {icon: 'fas fa-map-marker-alt', content: '64 rue de Migneaux 78300 Poissy France'},
  {icon: 'fas fa-phone-alt', content: '(+33) 7 55 18 34 70', link: 'tel:+33755183470'},
  {icon: 'fas fa-at', content: 'webneat@gmail.com', link: 'mailto:webneat@gmail.com'},
  {icon: 'fab fa-github', content: 'github.com/webneat', link: 'https://github.com/webneat'},
]

export const languages = [
  {name: 'Arabic', level: 5},
  {name: 'English', level: 4},
  {name: 'French', level: 4},
]

export const schools = [
  {
    date: '2013 - 2015',
    location: 'Clermont-Ferrand, France',
    name: 'Institut Supérieure d’Informatique, de Modélisation et de leurs Applications',
    diploma: "Master's Degree in Software Engineering and Information Systems",
  },
  {
    last: true,
    date: '2011 - 2013',
    location: 'Rabat, Maroc',
    name: 'Ecole Nationale Supérieure d’Informatique et Analyse des Systèmes',
    diploma: "Master's Degree in Comupter Science",
  },
]

export const jobs = [
  {
    date: 'Nov 2020',
    location: 'Remote, France',
    company: 'Datadog',
    link: 'https://www.datadoghq.com/',
    logo: '/logos/datadog.png',
    description: [
      `I worked with the RUM (Real User Monitoring) team to develop and maintain the browser SDK. This open source Javascript SDK tracks the users sessions (navigation, clicks, resources, errors, ...) and reports them to Datadog. The customers can then use their dashboards to explore and analyze how users are using their websites, and investigate and solve errors and performance issues.`,
    ],
    tools: ['Typescript', 'NodeJS', 'DOM', 'ESLint', 'Gitlab'],
  },
  {
    date: 'July 2017 - Nov 2020',
    location: 'Remote, France',
    company: 'MailPoet',
    link: 'https://www.mailpoet.com',
    logo: '/logos/mailpoet.png',
    description: `I worked remotely within an international team on the development and maintenance of the 
      MailPoet WordPress plugin, the shop site and other projects.`,
    tools: ['Typescript', 'React', 'Redux', 'NodeJS', 'PHP', 'MySQL'],
  },
  {
    date: 'Oct 2015 - Jun 2017',
    location: 'Sophia Antipolis, France',
    company: 'Amadeus',
    link: 'https://amadeus.com',
    logo: '/logos/amadeus.png',
    description:
      'I maintained many applications written in a variety of languages: C++, Java, Python and Javascript',
    tools: ['C++', 'JavaEE', 'Javascript', 'Python', 'Git', 'Scrum', 'Kanban'],
  },
  {
    last: true,
    date: 'Apr - Sep 2015',
    location: 'Meyrin, Switzerland',
    company: 'CERN',
    link: 'https://home.cern/',
    logo: 'https://framework.web.cern.ch/framework/1.0/img/logo/badge_80.png',
    description:
      'I developed a frontend modular web application to help analyze data of the LHCb experiments.',
    tools: ['AngularJS', 'Django', 'Gulp', 'Bower', 'Jade/Pug', 'Less'],
  },
]

export const skills = [
  {
    description: 'Development, test and deployment of web applications.',
    tools: ['NodeJS', 'React', 'Redux', 'TailwindCSS', 'Postgres', 'MongoDB', 'Docker', 'Ansible'],
  },
  {
    description: 'Solving challenging technical problems and designing efficient algorithms.',
    tools: ['Algorithmic', 'Math', 'Data Structures', `Optimization methods`],
  },
  {
    description:
      'Writing technical documentation and teaching computer science and web development.',
    tools: ['Code Review', 'Documentation', 'Pair Programming'],
    last: true,
  },
]

export const projects = [
  {
    date: 'Oct 2015',
    name: 'Lumen Generators',
    link: 'https://github.com/webNeat/lumen-generators',
    description:
      'A collection of generators for Lumen and Laravel 5. Downloaded 124K+ times and used by 300+ open source project on Github.',
    tools: ['PHP', 'Laravel', 'Lumen', 'Twig'],
  },
  {
    date: 'Jul 2016',
    name: 'Tarsana',
    link: 'https://github.com/tarsana',
    description:
      'An ecosystem in which developers can create and share cross-platform command lines applications using their favorite programming language.',
    tools: ['PHP', 'Twig', 'OOP', 'Functional Programming'],
  },
  {
    date: 'Sep 2019',
    name: 'Mahkamaty - Backend lead developer',
    link: 'https://mahkamaty.com/fr-ma/about-us',
    description:
      'Mahkamaty is Stackoverflow for legal issues and questions; answers come from legal experts in the specific law field.',
    tools: ['NodeJS', 'Adonis', 'MySQL', 'Postgres', 'Azure DevOps'],
  },
  {
    date: 'Sep 2019',
    name: 'React Tidy',
    link: 'https://github.com/webNeat/react-tidy',
    description: 'A collection of handy, flexible, tested and documented React custom hooks.',
    tools: ['Typescript', 'React'],
  },
  {
    date: 'Oct 2017',
    name: 'Wajez API',
    link: 'https://github.com/wajez/api',
    description:
      'A library built on top of express and mongoose to make developing REST APIs using simple declarative code while being able to override any behavior.',
    tools: [
      'NodeJS',
      'Express',
      'Mongoose',
      'Sanctuary',
      'JWT',
      'Mocha',
      'Programmation Fonctionelle',
    ],
  },
  {
    date: 'Oct 2017',
    name: 'Wajez API Test',
    link: 'https://github.com/wajez/api-test',
    description: 'A library that makes testing REST APIs easy and declarative.',
    tools: ['NodeJS', 'Mongoose', 'Mocha', 'Chai'],
    last: true,
  },
]

export const note = {
  text: 'Check out the source code of this resume ',
  link: 'https://github.com/webNeat/my-resume',
}
