import { ci, deploy, app, destroy } from 'hosty'

const repo = ci.repo()
const branch = ci.branch()
const domain = (branch !== 'main' ? branch + '.' : '') + 'webneat.me'
const env = {
  TZ: 'UTC',
  PORT: '80',
  HOST: '0.0.0.0',
  LOG_LEVEL: 'info',
  APP_KEY: 'NZWllL-iR0n8OaQQyQzH6YWwojZNWOYH',
  NODE_ENV: 'production',
  SESSION_DRIVER: 'cookie',
}
const application = app.git({ name: domain, domain, repo, branch, env })

if (ci.event() === 'delete') destroy(ci.server(), application)
else deploy(ci.server(), application)

ci.run()
