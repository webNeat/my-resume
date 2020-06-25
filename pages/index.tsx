import {FC} from 'react'
import cn from 'classnames'

export default function Home() {
  return (
    <>
      <div className="page mx-auto bg-white flex text-md leading-normal">
        <div className="w-1/4 text-sm text-center bg-gray-100 p-4">
          <img
            src="/profile.jpeg"
            alt="Amine Ben hammou"
            className="inline-block rounded-full w-32 mb-3 shadow-md border-4 border-white"
          />
          <PersonalInfo icon="fas fa-user-tie"> 30 ans, célibataire </PersonalInfo>
          <PersonalInfo icon="fas fa-map-marker-alt">
            64 rue de Migneaux
            <br />
            <span className="inline-block w-4"></span> 78300 Poissy
          </PersonalInfo>
          <PersonalInfo icon="fas fa-phone-alt">(+33) 7 55 18 34 70</PersonalInfo>
          <PersonalInfo icon="fas fa-at">webneat@gmail.com</PersonalInfo>
          <PersonalInfo icon="fab fa-github">github.com/webneat</PersonalInfo>

          <SideTitle>Classements</SideTitle>
          <Rank name="CodinGame" rank="Top 2%" />
          <Rank name="Stackoverflow" rank="2239" />
          <Rank name="CodeJam" rank="Round 1" />

          <SideTitle>Langages & Outils</SideTitle>
          <Tool name="Typescript" level={5} />
          <Tool child name="React" level={5} />
          <Tool child name="Redux" level={5} />
          <Tool child name="MobX" level={5} />
          <Tool name="NodeJS" level={5} />
          <Tool child name="Express" level={5} />
          <Tool child name="Adonis" level={5} />
          <Tool child name="Nest" level={3} />
          <Tool name="PHP" level={5} />
          <Tool child name="Laravel" level={5} />
          <Tool child name="Symfony" level={4} />
          <Tool name="SQL" level={5} />
          <Tool name="NoSQL" level={4} />
          <Tool name="Git" level={5} />
          <Tool name="Docker" level={4} />
          <Tool name="Nginx" level={4} />

          <SideTitle>Langues</SideTitle>
          <Tool name="Arabe" level={5} />
          <Tool name="Français" level={4} />
          <Tool name="Anglais" level={4} />
        </div>

        <div className="w-3/4 flex-grow border-l p-3">
          <h1 className="text-2xl text-center">Amine Ben hammou</h1>
          <h1 className="mt-2 text-lg text-center">
            J'aime résoudre des problèmes difficiles en implémentant des algorithmes efficaces avec
            du code bien organisé.
          </h1>

          <Title>Education</Title>
          <School
            date="2013 - 2015"
            location="Clermont-Ferrand, France"
            name="Institut Supérieure d’Informatique, de Modélisation et de leurs Applications"
            diploma="Ingénieur en Génie Logiciel et Systèmes Informatiques"
          />
          <School
            last
            date="2011 - 2013"
            location="Rabat, Maroc"
            name="Ecole Nationale Supérieure d’Informatique et Analyse des Systèmes"
            diploma="Ingénieur en Génie Logiciel"
          />

          <Title>Expériences Professionelles</Title>
          <Job
            date="July 2017"
            location="Remote"
            company="MailPoet"
            logo="/logos/mailpoet.png"
            description={
              <ul>
                <li className="mb-2">
                  - Travail dans une équipe internationale remote avec des méthodologies agiles.
                </li>
                <li className="mb-2">
                  - Dévelopement et maintenace du plugin open source MailPoet et des autres projets
                  de l'entreprise, avec collaboration et code review sur Github.
                </li>
                <li className="mb-2">
                  - Support du plugin et résolution des problèmes techniques des utilisateurs.
                </li>
                <li className="mb-2">
                  - Migration du code vers les nouvelles technologies (Typescript, React Hooks,
                  Redux, Doctrine, ...).
                </li>
                <li className="mb-2">
                  - Résolution des problèmes de performance avec optimisation du code et des
                  requêtes de base de données.
                </li>
                <li className="mb-2">
                  - Implémentation de nouvelles interface web avec Typescript, React et Sass.
                </li>
              </ul>
            }
            tools={['Typescript', 'React', 'Redux', 'NodeJS', 'WordPress', 'Kanban', 'OKR']}
          />
          <Job
            date="Oct 2015 - Jun 2017"
            location="Sophia Antipolis, France"
            company="Amadeus"
            logo="/logos/amadeus.png"
            position="Software Engineer"
            description="Maintenance de plusieurs applications en utilisant C++, Java, Python et Javascript, en agile Scrum / Kanban."
            tools={['C++', 'JavaEE', 'Javascript', 'Python', 'Git', 'Scrum', 'Kanban']}
          />
          <Job
            last
            date="Apr - Sep 2015"
            location="Meyrin, Suisse"
            company="CERN"
            logo="https://framework.web.cern.ch/framework/1.0/img/logo/badge_80.png"
            description="Création d'une application web modulaire pour analyser les données de LHCb avec AngularJS et Django."
            tools={['AngularJS', 'Django', 'Gulp', 'Bower', 'Jade', 'Less']}
          />

          {/* <Title>Compétences</Title>
          <Skill
            description="Conception, dévelopement, test et deploiment des applications web."
            tools={['NodeJS', 'React', 'Redux', 'TailwindCSS', 'Postgres', 'MongoDB']}
          />
          <Skill
            last
            description="Encadrement et formation en nouvelles technologies de dévelopement web."
            tools={['Code Review', 'Documentation', 'Pair Programming']}
          /> */}
          {/* <Skill
          description="Résolution des challenges d'implémentation et optimisation des algorithmes."
          tools={['Algorithmique', 'Math', 'Structures de données', `Techniques d'optimisation`]}
        /> */}
        </div>
      </div>
      <div className="page mx-auto bg-white text-md leading-normal p-4">
        <Title>Projets</Title>
        <div></div>
      </div>
    </>
  )
}

const PersonalInfo: FC<{icon: string}> = ({icon, children}) => (
  <p className="text-left mt-2 pl-3">
    <i className={icon}></i> {children}
  </p>
)

const Title: FC = ({children}) => (
  <h1 className="bg-gray-800 text-lg text-white font-bold px-3 py-2 my-3 -mr-12 shadow-md rounded-lg">
    {children}
  </h1>
)

const SideTitle: FC = ({children}) => (
  <h1 className="text-md text-gray-800 font-bold pb-2 mt-3 mb-3 border-b">{children}</h1>
)

const Rank: FC<{name: string; rank: string}> = ({name, rank}) => (
  <p className="text-left text-sm mt-2">
    <span className="inline-block w-3/5">{name}</span>
    <span className="font-semibold">{rank}</span>
  </p>
)

const Tool: FC<{name: string; level: number; child?: boolean}> = ({name, level, child}) => (
  <p className="text-left text-sm mt-2">
    <span className={cn('inline-block w-1/2', {'pl-3': child})}>{name}</span>
    <span className="inline-block border rounded overflow-hidden bg-white h-2 w-1/2 pr-1">
      <span
        className={cn(`block h-full rounded`, {
          'w-full bg-blue-600': level == 5,
          'w-4/5 bg-green-600': level == 4,
          'w-3/5 bg-yellow-600': level == 3,
          'w-2/5 bg-orange-600': level == 2,
          'w-1/5 bg-red-600': level == 1,
        })}
      ></span>
    </span>
  </p>
)

const School: FC<{
  date: string
  location: string
  name: string
  diploma: string
  last?: boolean
}> = ({date, location, name, diploma, last}) => (
  <div className={cn('pb-4', {'mb-4 border-b': !last})}>
    <p className="flex justify-between">
      <span className="block font-semibold">
        <i className="fas fa-calendar-alt"></i> {date}
      </span>
      <span className="block py-1 px-2 bg-gray-300 rounded-md text-sm">
        <i className="fas fa-map-marker-alt"></i> {location}
      </span>
    </p>
    <p>
      <i className="fas fa-school"></i> {name}
    </p>
    <p>
      <i className="fas fa-graduation-cap"></i> {diploma}
    </p>
  </div>
)

const Job: FC<{
  date: string
  location: string
  company: string
  logo: string
  position?: string
  description: React.ReactNode
  tools: string[]
  last?: boolean
}> = ({date, location, company, logo, position, description, tools, last}) => (
  <div className={cn('pb-4', {'mb-4 border-b': !last})}>
    <div className="flex">
      <span className="block w-1/3 font-semibold">
        <i className="fas fa-calendar-alt"></i> {date}
      </span>
      <span className="block w-1/3 font-semibold">
        <img src={logo} alt={company} className="inline h-8 mx-2" />
        {company}
      </span>
      <p className="block w-1/3 text-right">
        <span className="inline-block py-1 px-2 bg-gray-300 rounded-md text-sm">
          <i className="fas fa-map-marker-alt"></i> {location}
        </span>
      </p>
    </div>
    {position && <p className="font-semibold">{position}</p>}
    <p>{description}</p>
    <p className="flex justify-end">
      {tools.map((t) => (
        <span key={t} className="inline-block mx-2 py-1 px-2 bg-gray-200 rounded-md text-sm">
          {t}
        </span>
      ))}
    </p>
  </div>
)

const Skill: FC<{
  description: string
  tools?: string[]
  last?: boolean
}> = ({description, tools, last}) => (
  <div className={cn('pb-3', {'mb-3 border-b': !last})}>
    <p>{description}</p>
    {tools && (
      <p className="flex justify-end">
        {tools.map((t) => (
          <span key={t} className="block mx-2 py-1 px-2 bg-gray-200 rounded-md text-sm">
            {t}
          </span>
        ))}
      </p>
    )}
  </div>
)
