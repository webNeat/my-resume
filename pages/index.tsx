import {FC} from 'react'
import cn from 'classnames'

export default function Home() {
  return (
    <>
      <div className="page mx-auto bg-white flex text-md leading-normal">
        <div className=" w-1/3 text-sm text-center bg-gray-100 p-4">
          <img
            src="/houda.png"
            alt="Houda Benhammou"
            className="inline-block rounded-full w-32 mb-3 shadow-md border-4 border-white"
          />
          <PersonalInfo icon="fas fa-birthday-cake"> 12/10/1994 </PersonalInfo>
          <PersonalInfo icon="fas fa-map-marker-alt">
            Av Al Maghreb Al Arabi, résidence Perle de la médina, Appart E29
            <br /> Ocean, Rabat
          </PersonalInfo>
          <PersonalInfo icon="fas fa-phone-alt">0653742611</PersonalInfo>
          <PersonalInfo icon="fas fa-at">mynameshouda@gmail.com</PersonalInfo>

          <SideTitle>Langues</SideTitle>
          <Tool name="Arabe" level={5} />
          <Tool name="Français" level={4} />
          <Tool name="Anglais" level={4} />

          <SideTitle>Centre d'interets</SideTitle>
          <p>Photographie</p>
          <br />
          <p>Design graphique</p>
          <br />
          <p>Dessin à la main</p>
          <br />
          <p>Sport</p>
        </div>

        <div className="w-2/3 flex-grow border-l p-3">
          <h1 className="text-2xl text-center">Houda BENHAMMOU</h1>

          <Title>Formation</Title>
          <School
            date="2019"
            location="Rabat"
            name="ARTCOM SUP école de design"
            diploma="Préparation d'un diplome en design graphique"
          />
          <School
            date="2016 - 2018"
            location="Arfoud"
            name="Institut Spécialisé de Technologie Appliquée"
            diploma="Technicien Spécialisé en Gestion des Entreprises"
          />
          <School
            date="2014 - 2016"
            location="Arfoud"
            name="Institut Spécialisé de Technologie Appliquée"
            diploma="Technicien Comptable des Entreprises"
          />
          <School
            date="2013 - 2014"
            location="Meknès"
            name="Université Moulay Ismail"
            diploma="Faculté des sciences juridiques, économiques et sociales"
          />
          <School
            last
            date="2013"
            location="Arfoud"
            name="Lycée Moulay Rachid"
            diploma="Baccalauréat en sciences mathématiques, branche A"
          />

          <Title>Expériences Professionelles</Title>
          <Job
            date="Février 2018"
            location="Arfoud"
            company="Cabinet de comptabilité"
            description="Organisation et traitement des opérations comptables au sein du cabinet."
          />
          <Job
            last
            date="Avril 2016"
            location="Taroudant"
            company="Coopération Agricole COPAG"
            description={
              <span>
                - Etude de la structure interne de la coopération.
                <br />- Découverte et analyse des méthodes appliquées dans la gestion de leur
                comptabilité.
              </span>
            }
          />

          <Title>Connaisances techniques</Title>
          <Skill
            description="Design graphique des logos, affiches et autres supports présentatifs."
            tools={['Photoshop', 'Illustrator']}
          />
          <Skill
            last
            description="Design et création des idées de présentation et mise en valeur."
            tools={['Photoshop', 'Power Point', 'Photographie']}
          />
        </div>
      </div>
    </>
  )
}

const PersonalInfo: FC<{icon: string; className?: string}> = ({icon, className, children}) => (
  <p className={cn('text-left mt-2 pl-3', className)}>
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
  <div className={cn('pb-3', {'mb-2 border-b': !last})}>
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
  logo?: string
  position?: string
  description: React.ReactNode
  tools?: string[]
  last?: boolean
}> = ({date, location, company, logo, position, description, tools, last}) => (
  <div className={cn('pb-4', {'mb-4 border-b': !last})}>
    <div className="flex">
      <span className="block w-1/4 font-semibold">
        <i className="fas fa-calendar-alt"></i> {date}
      </span>
      <span className="block w-1/2 font-semibold">
        {logo && <img src={logo} alt={company} className="inline h-8 mx-2" />}
        {company}
      </span>
      <p className="block w-1/4 text-right">
        <span className="inline-block py-1 px-2 bg-gray-300 rounded-md text-sm">
          <i className="fas fa-map-marker-alt"></i> {location}
        </span>
      </p>
    </div>
    {position && <p className="font-semibold">{position}</p>}
    <p>{description}</p>
    {tools && (
      <p className="flex justify-end">
        {tools.map((t) => (
          <span key={t} className="inline-block mx-2 py-1 px-2 bg-gray-200 rounded-md text-sm">
            {t}
          </span>
        ))}
      </p>
    )}
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
