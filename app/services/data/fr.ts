export * from './common.js'

export const labels = {
  ranks: 'Classements',
  tools: 'Langages & Outils',
  languages: 'Langues',
  education: 'Formation',
  experiences: 'Expériences Professionelles',
  skills: 'Compétences Techniques',
  projects: 'Projets',
}

export const name = 'Amine Ben hammou'
export const photo = '/profile.jpeg'
export const quote =
  'Ingénieur spécialisé en développement web, optimisation de performance et partage de connaissance'

export const personalInfos = [
  {
    icon: 'fas fa-user-tie',
    content: '34 ans, célibataire',
  },
  { icon: 'fas fa-map-marker-alt', content: '64 rue de Migneaux 78300 Poissy' },
  { icon: 'fas fa-phone-alt', content: '(+33) 7 55 18 34 70', link: 'tel:+33755183470' },
  { icon: 'fas fa-at', content: 'webneat@gmail.com', link: 'mailto:webneat@gmail.com' },
  { icon: 'fab fa-github', content: 'github.com/webneat', link: 'https://github.com/webneat' },
  {
    icon: 'fas fa-laptop',
    content: 'codementor.io/@webneat',
    link: 'https://www.codementor.io/@webneat',
  },
]

export const languages = [
  { name: 'Arabe', level: 5 },
  { name: 'Français', level: 5 },
  { name: 'Anglais', level: 5 },
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
    date: 'Nov 2021 - Dec 2024',
    location: 'Remote, France',
    company: 'Monoprix Online',
    link: 'https://monoprix.fr/',
    logo: '/logos/monoprix.png',
    description: [
      `Conception, développement et maintenance de plusieurs microservices sur un environnement Google Cloud. Mes tâches incluent: analyser et résoudre les problèmes de performance sur des flux d'import/export ou des requêtes de base de données, implémenter un système de cache avec Redis, créer et documenter une library interne en Typescript, faire des revues de code et partages de connaissances via des articles et des présentations.`,
    ],
    tools: ['Typescript', 'NodeJS', 'Postgres', 'Redis', 'MongoDB', 'PubSub', 'Gitlab'],
  },
  {
    date: 'Nov 2020 - Oct 2021',
    location: 'Remote, France',
    company: 'Datadog',
    link: 'https://www.datadoghq.com/',
    logo: '/logos/datadog.png',
    description: `Développement et maintenance du browser SDK dans l'équipe RUM (Real User Monitoring). Ce SDK open source enregistre les sessions des utilisateurs et les rapporte à Datadog. Les clients peuvent ensuite explorer et analyser la façon dont les utilisateurs utilisent leurs sites, pour investiguer et résoudre les erreurs et les problèmes de performances.`,
    tools: ['Typescript', 'NodeJS', 'DOM', 'ESLint', 'Gitlab', 'Kanban', 'OKR'],
  },
  {
    date: 'Juillet 2017 - Nov 2020',
    location: 'Remote, France',
    company: 'MailPoet',
    link: 'https://www.mailpoet.com',
    logo: '/logos/mailpoet.png',
    description:
      "Développement et maintenance du plugin open source MailPoet et des autres projets de l'entreprise dans une équipe internationale en full-remote en agile, avec collaboration et code review sur Github. Migration du code vers les nouvelles technologies et résolution des problèmes de performance en optimisant les algorithms et les requêtes des bases de données.",
    tools: ['Typescript', 'React', 'Redux', 'NodeJS', 'WordPress', 'Kanban', 'OKR'],
  },
  {
    date: 'Octobre 2015 - Juin 2017',
    location: 'Sophia Antipolis, France',
    company: 'Amadeus',
    link: 'https://amadeus.com',
    logo: '/logos/amadeus.png',
    description: '',
    tools: ['C++', 'JavaEE', 'Javascript', 'Python', 'Git', 'Scrum', 'Kanban'],
  },
  {
    last: true,
    date: 'Avril - Septembre 2015',
    location: 'Meyrin, Suisse',
    company: 'CERN',
    link: 'https://home.cern/',
    logo: 'https://framework.web.cern.ch/framework/1.0/img/logo/badge_80.png',
    description: '',
    tools: ['AngularJS', 'Django', 'Gulp', 'Bower', 'Jade', 'Less'],
  },
]

export const skills = [
  {
    description: 'Conception, dévelopement, test et deploiment des applications web.',
    tools: ['Typescript', 'NodeJS', 'React', 'Postgres', 'MongoDB', 'Redis', 'Docker', 'Ansible'],
  },
  {
    description:
      "Résolution des challenges d'implémentation et optimisation des algorithmes et des requêtes de bases de données.",
    tools: ['Algorithmique', 'Math', 'Structures de données', `Techniques d'optimisation`, 'SQL'],
  },
  {
    last: true,
    description: 'Encadrement et formation en nouvelles technologies de dévelopement web.',
    tools: ['Code Review', 'Documentation', 'Pair Programming'],
  },
]

export const projects = [
  {
    date: 'Septembre 2017',
    name: 'Mahkamaty - Backend lead developer',
    link: 'https://mahkamaty.com/fr-ma/about-us',
    description:
      "Mahkamaty vise la démocratisation de l'accès à l'information juridique, en facilitant le processus de demandes de consultations et en fournissant une expertise pour apporter des réponses rapides.",
    tools: ['NodeJS', 'Adonis', 'MySQL', 'Postgres', 'Azure DevOps'],
  },
  {
    date: 'Dec 2024',
    name: 'aifn',
    link: 'https://github.com/webNeat/aifn',
    description: `Une bibliothèque pour créer des fonctions Typescript en utilisant des modèles d'intelligence artificielle.`,
    tools: ['Typescript', 'Zod', 'OpenAI', 'Anthropic', 'Ollama', 'Gemini'],
  },
  {
    date: 'Sep 2024',
    name: 'hosty',
    link: 'https://github.com/webNeat/hosty',
    description: `Un outil d'automatisation de deploiment et gestions des applications dans un serveur linux avec du code Typescript basé sur Ansible et Docker`,
    tools: ['Typescript', 'Ansible', 'Docker', 'Github Actions', 'Caddy'],
  },
  {
    date: 'Jun 2023',
    name: 'ts-perf',
    link: 'https://github.com/webNeat/ts-perf',
    description:
      'Une bibliothèque et une commande pour mesurer la performance de compilation du code Typescript.',
    tools: ['Typescript'],
  },
  {
    date: 'Dec 2021',
    name: 'ctrl-keys',
    link: 'https://github.com/webNeat/ctrl-keys',
    description:
      'Une bibliothèque TypeScript légère et très rapide pour gérer les raccourcis clavier dans les applications web.',
    tools: ['Typescript', 'DOM'],
  },
  {
    date: 'Septembre 2019',
    name: 'react-tidy',
    link: 'https://github.com/webNeat/react-tidy',
    description: 'Une collection de React Hooks qui sont flexibles, testés, et bien documentés.',
    tools: ['Typescript', 'React'],
  },
  {
    date: '2025',
    name: 'Plusieurs autres projets open source sur Github',
    link: 'https://github.com/webNeat',
    description: '',
    last: true,
  },
  // {
  //   date: 'Juillet 2016',
  //   name: 'Tarsana',
  //   link: 'https://github.com/tarsana',
  //   description:
  //     'Un ecosystème qui permet aux dévelopeurs de construire et partager des applications console.',
  //   tools: ['Typescript', 'React', 'Github Actions'],
  //   last: true,
  // },
  // {
  //   date: 'Octobre 2015',
  //   name: 'Lumen Generators',
  //   link: 'https://github.com/webNeat/lumen-generators',
  //   description:
  //     'Un outil de génération du code avancé pour les framework Laravel et Lumen. 190K installs, 350+ stars sur Github.',
  //   tools: ['PHP', 'Laravel', 'Lumen', 'Twig'],
  //   last: true,
  // },
]

export const note = {
  text: 'Voir le code source de ce CV ',
  link: 'https://github.com/webNeat/my-resume',
}
