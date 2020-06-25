export const name = 'Amine Ben hammou'
export const photo = '/profile.jpeg'
export const quote =
  "J'aime résoudre des problèmes difficiles en implémentant des algorithmes efficaces avec du code bien organisé."

export const personalInfos = [
  {
    icon: 'fas fa-user-tie',
    content: '30 ans, célibataire',
  },
  {icon: 'fas fa-map-marker-alt', content: '64 rue de Migneaux 78300 Poissy'},
  {icon: 'fas fa-phone-alt', content: '(+33) 7 55 18 34 70', link: 'tel:+33755183470'},
  {icon: 'fas fa-at', content: 'webneat@gmail.com', link: 'mailto:webneat@gmail.com'},
  {icon: 'fab fa-github', content: 'github.com/webneat', link: 'https://github.com/webneat'},
]

export const ranks = [
  {
    name: 'CodinGame',
    rank: 'Top 2%',
    url: 'https://www.codingame.com/profile/fa32f4016cfd0b630075763634c1398b149351',
  },
  {name: 'Stackoverflow', rank: '2239', url: 'https://stackoverflow.com/users/1487270/webneat'},
  {name: 'CodeJam', rank: 'Round 1', url: 'https://codingcompetitions.withgoogle.com/codejam'},
]

export const tools = [
  {name: 'Typescript', level: 5},
  {child: true, name: 'React', level: 5},
  {child: true, name: 'Next', level: 4},
  {child: true, name: 'Redux', level: 5},
  {child: true, name: 'MobX', level: 5},
  {name: 'TailwindCSS', level: 5},
  {name: 'NodeJS', level: 5},
  {child: true, name: 'Express', level: 5},
  {child: true, name: 'Adonis', level: 5},
  {child: true, name: 'Nest', level: 4},
  {name: 'PHP', level: 5},
  {child: true, name: 'Laravel', level: 5},
  {child: true, name: 'Symfony', level: 4},
  {name: 'SQL', level: 5},
  {name: 'NoSQL', level: 4},
  {name: 'Git', level: 5},
  {name: 'Docker', level: 4},
]

export const languages = [
  {name: 'Arabe', level: 5},
  {name: 'Français', level: 4},
  {name: 'Anglais', level: 4},
]

export const schools = [
  {
    date: '2013 - 2015',
    location: 'Clermont-Ferrand, France',
    name: 'Institut Supérieure d’Informatique, de Modélisation et de leurs Applications',
    diploma: 'Ingénieur en Génie Logiciel et Systèmes Informatiques',
  },
  {
    last: true,
    date: '2011 - 2013',
    location: 'Rabat, Maroc',
    name: 'Ecole Nationale Supérieure d’Informatique et Analyse des Systèmes',
    diploma: 'Ingénieur en Génie Logiciel',
  },
]

export const jobs = [
  {
    date: 'July 2017',
    location: 'Remote, France',
    company: 'MailPoet',
    logo: '/logos/mailpoet.png',
    description: [
      'Travail dans une équipe internationale remote avec des méthodologies agiles.',
      "Développement et maintenance du plugin open source MailPoet et des autres projets de l'entreprise, avec collaboration et code review sur Github.",
      'Support du plugin et résolution des problèmes techniques des utilisateurs.',
      'Migration du code vers les nouvelles technologies (Typescript, React Hooks, Redux, Doctrine, ...).',
      'Résolution des problèmes de performance avec optimisation du code et des requêtes de base de données.',
      'Implémentation de nouvelles interface web avec Typescript, React et Sass.',
    ],
    tools: ['Typescript', 'React', 'Redux', 'NodeJS', 'WordPress', 'Kanban', 'OKR'],
  },
  {
    date: 'Oct 2015 - Jun 2017',
    location: 'Sophia Antipolis, France',
    company: 'Amadeus',
    logo: '/logos/amadeus.png',
    position: 'Software Engineer',
    description:
      'Maintenance de plusieurs applications en utilisant C++, Java, Python et Javascript, en agile Scrum / Kanban.',
    tools: ['C++', 'JavaEE', 'Javascript', 'Python', 'Git', 'Scrum', 'Kanban'],
  },
  {
    last: true,
    date: 'Apr - Sep 2015',
    location: 'Meyrin, Suisse',
    company: 'CERN',
    logo: 'https://framework.web.cern.ch/framework/1.0/img/logo/badge_80.png',
    description:
      "Création d'une application web modulaire pour analyser les données de LHCb avec AngularJS et Django.",
    tools: ['AngularJS', 'Django', 'Gulp', 'Bower', 'Jade', 'Less'],
  },
]

export const skills = [
  {
    description: 'Conception, dévelopement, test et deploiment des applications web.',
    tools: [
      'NodeJS',
      'React',
      'Redux',
      'TailwindCSS',
      'Postgres',
      'MongoDB',
      'Docker',
      'Azure DevOps',
    ],
  },
  {
    description: "Résolution des challenges d'implémentation et optimisation des algorithmes.",
    tools: ['Algorithmique', 'Math', 'Structures de données', `Techniques d'optimisation`],
  },
  {
    last: true,
    description: 'Encadrement et formation en nouvelles technologies de dévelopement web.',
    tools: ['Code Review', 'Documentation', 'Pair Programming'],
  },
]

export const projects = [
  {
    date: 'Sep 2019',
    name: 'Mahkamaty - Backend lead developer',
    link: 'https://mahkamaty.com/fr-ma/about-us',
    description:
      "Mahkamaty vise la démocratisation de l'accès à l'information juridique, en facilitant le processus de demandes de consultations et en fournissant une expertise pour apporter des réponses rapides.",
    tools: ['NodeJS', 'Adonis', 'MySQL', 'Postgres', 'Azure DevOps'],
  },
  {
    date: 'Sep 2019',
    name: 'React Tidy',
    link: 'https://github.com/webNeat/react-tidy',
    description: 'Une collection de React Hooks qui sont flexibles, testés, et bien documentés.',
    tools: ['Typescript', 'React'],
  },
  // {
  //   date: 'Feb 2019',
  //   name: 'React Dye',
  //   link: 'https://github.com/webNeat/react-dye',
  //   description:
  //     'Une library pour faciliter la décoration des composants React tout en ayant un code lisible et maintenable.',
  //   tools: ['Typescript', 'Jest', 'React Hooks', 'React Suspense'],
  // },
  {
    date: 'Oct 2017',
    name: 'Wajez API',
    link: 'https://github.com/wajez/api',
    description:
      "Un framework pour créer des API REST facilement. Basé sur ExpressJS et Mongoose, il génère toutes les routes d'authentification JWT et des opérations SCRUD à partir des models, et permet de personaliser le comportement de chaque route avec un code déclaratif.",
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
    description:
      "Un outil pour faire des tests fonctionels d'un API REST de manière simple et déclarative. En se basant sur les models, il génère des données aléatoires et assure que les routes de CRUD fonctionnent correctement.",
    tools: ['NodeJS', 'Mongoose', 'Mocha', 'Chai'],
  },
  {
    date: 'Jul 2016',
    name: 'Tarsana',
    link: 'https://github.com/tarsana',
    description:
      'Un ecosystème qui permet aux dévelopeurs de construire et partager des applications console.',
  },
  {
    date: 'Oct 2015',
    name: 'Lumen Generators',
    link: 'https://github.com/webNeat/lumen-generators',
    description:
      'Un outil de génération du code avancé pour les framework Laravel et Lumen. Installé plus de 124K fois et utilisé par plus de 300 projets sur Github.',
    tools: ['PHP', 'Laravel', 'Lumen', 'Twig'],
    last: true,
  },
]

export const note = {
  text: 'Ce CV est écrit avec NextJS et TailwindCSS, trouvez le code source sur ',
  link: 'https://github.com/webNeat/my-resume',
}
