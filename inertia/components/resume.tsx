import { FC } from 'react'
import cn from 'classnames'

export const Resume = (data: any) => {
  return (
    <>
      <div className="page mx-auto bg-white flex text-base leading-normal">
        <div className="w-1/4 text-sm text-center bg-gray-100 p-6">
          <img
            src={data.photo}
            alt={data.name}
            className="inline-block rounded-full w-32 mb-3 shadow-md border-4 border-white"
          />
          {data.personalInfos.map((x: any) => (
            <PersonalInfo key={x.content} {...x} />
          ))}

          <SideTitle>{data.labels.ranks}</SideTitle>
          {data.ranks.map((x: any) => (
            <Rank key={x.name} {...x} />
          ))}

          <SideTitle>{data.labels.tools}</SideTitle>
          {data.tools.map((x: any) => (
            <Tool key={x.name} {...x} />
          ))}

          <SideTitle>{data.labels.languages}</SideTitle>
          {data.languages.map((x: any) => (
            <Tool key={x.name} {...x} />
          ))}
        </div>

        <div className="w-3/4 flex-grow border-l p-10">
          <h1 className="text-2xl text-center mb-4">{data.name}</h1>
          <h1 className="mt-2 text-lg text-center">{data.quote}</h1>

          <Title>{data.labels.education}</Title>
          {data.schools.map((x: any) => (
            <School key={x.name} {...x} />
          ))}

          <Title>{data.labels.experiences}</Title>
          {data.jobs.map((x: any) => (
            <Job key={x.date} {...x} />
          ))}
        </div>
      </div>
      <div className="page mx-auto bg-white text-base leading-normal p-8">
        <Title>{data.labels.skills}</Title>
        {data.skills.map((x: any) => (
          <Skill key={x.description} {...x} />
        ))}

        <Title>{data.labels.projects}</Title>
        {data.projects.map((x: any) => (
          <Project key={x.name} {...x} />
        ))}

        <p className="text-center text-xs text-gray-700">
          {data.note.text}
          <a target="_blank" href={data.note.link} className="underline hover:text-blue-700">
            {data.note.link}
          </a>
        </p>
      </div>
    </>
  )
}

const PersonalInfo: FC<{ icon: string; link?: string; content: string }> = ({
  icon,
  content,
  link,
}) => (
  <p className="flex mt-4 pl-2">
    <span className="block">
      <span className="text-gray-600">
        <i className={icon}></i>
      </span>
    </span>
    {link ? (
      <a target="_blank" href={link} className="block ml-2 flex-grow underline hover:text-blue-700">
        {content}
      </a>
    ) : (
      <span className="block flex-grow ml-2">{content}</span>
    )}
  </p>
)

const Title = ({ children }: { children: string }) => (
  <h2 className="bg-gray-800 text-lg text-white font-bold text-center mt-3 mb-3 py-3 shadow-md rounded-lg">
    {children}
  </h2>
)

const SideTitle = ({ children }: { children: string }) => (
  <h3 className="text-base text-gray-800 font-bold pb-2 mt-8 mb-3 border-b">{children}</h3>
)

const Rank: FC<{ name: string; url: string; rank: string }> = ({ name, url, rank }) => (
  <p className="flex justify-between text-sm mt-2">
    <a target="_blank" href={url} className="block hover:text-blue-700">
      <span className="inline-block underline">{name}</span>
    </a>
    <span className="block font-semibold">{rank}</span>
  </p>
)

const Tool: FC<{ name: string; level: number; child?: boolean }> = ({ name, level, child }) => (
  <p className="text-left text-sm mt-2">
    <span className={cn('inline-block w-1/2', { 'pl-3': child })}>{name}</span>
    <span className="inline-block border rounded overflow-hidden bg-white h-2 w-1/2 pr-1">
      <span
        className={cn(`block h-full rounded`, {
          'w-full bg-blue-600': level === 5,
          'w-4/5 bg-green-600': level === 4,
          'w-3/5 bg-yellow-600': level === 3,
          'w-2/5 bg-orange-600': level === 2,
          'w-1/5 bg-red-600': level === 1,
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
}> = ({ date, location, name, diploma, last }) => (
  <div className={cn('pb-4', { 'mb-4 border-b': !last })}>
    <p className="flex justify-between">
      <span className="block font-semibold">
        <span className="text-gray-700">
          <i className="fas fa-calendar-alt"></i>
        </span>{' '}
        {date}
      </span>
      <span className="block py-1 px-2 bg-gray-300 rounded-md text-sm">
        <span className="text-gray-700">
          <i className="fas fa-map-marker-alt"></i>
        </span>{' '}
        {location}
      </span>
    </p>
    <p style={{ fontSize: '0.95rem ' }}>
      <span className="text-gray-700">
        <i className="fas fa-school"></i>
      </span>{' '}
      {name}
    </p>
    <p>
      <span className="text-gray-700">
        <i className="fas fa-graduation-cap"></i>
      </span>{' '}
      {diploma}
    </p>
  </div>
)

const Job: FC<{
  date: string
  location: string
  company: string
  link: string
  logo: string
  position?: string
  description: string | string[]
  tools: string[]
  last?: boolean
}> = ({ date, location, company, link, logo, position, description, tools, last }) => (
  <div className={cn('pb-4', { 'mb-4 border-b': !last })}>
    <div className="flex items-center">
      <span className="block w-1/3 font-semibold text-sm">{date}</span>
      <span className="block w-1/3 font-semibold">
        <img src={logo} alt={company} className="inline h-8 mx-2" />
        <a target="_blank" href={link} className="hover:text-blue-700">
          {company}
        </a>
      </span>
      <p className="block w-1/3 text-right">
        <span className="inline-block py-1 px-2 bg-gray-300 rounded-md text-sm">
          <span className="text-gray-700">
            <i className="fas fa-map-marker-alt"></i>
          </span>{' '}
          {location}
        </span>
      </p>
    </div>
    {position && <p className="font-semibold">{position}</p>}
    {typeof description === 'string' ? (
      <p className="text-justify my-2">{description}</p>
    ) : (
      <>
        {(description as string[]).map((line) => (
          <p className="text-justify my-2">{line}</p>
        ))}
      </>
    )}
    <p>
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
}> = ({ description, tools, last }) => (
  <div className={cn('px-4 pb-3', { 'mb-3 border-b border-gray-300': !last })}>
    <p>{description}</p>
    {tools && (
      <p className="mt-2">
        {tools.map((t) => (
          <span key={t} className="inline-block mx-2 py-1 px-2 bg-gray-200 rounded-md text-sm">
            {t}
          </span>
        ))}
      </p>
    )}
  </div>
)

const Project: FC<{
  date: string
  name: string
  link: string
  description: string
  tools?: string[]
  last?: boolean
}> = ({ date, name, link, description, tools, last }) => (
  <div className={cn('px-4 pb-3', { 'mb-4 border-b border-gray-400': !last })}>
    <p className="flex justify-between items-center">
      <span className="block mr-3">
        <span className="font-semibold">{date}: </span>
        <span className="text-lg">{name}</span>
      </span>
      <a target="_blank" href={link} className="block text-sm underline hover:text-blue-700">
        {link}
      </a>
    </p>
    <p className="text-justify">{description}</p>
    {tools && (
      <p className="mt-2">
        {tools.map((t) => (
          <span key={t} className="inline-block mx-2 py-1 px-2 bg-gray-200 rounded-md text-sm">
            {t}
          </span>
        ))}
      </p>
    )}
  </div>
)
