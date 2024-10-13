import yaml from 'yaml'
import { ci, deploy, app, destroy } from 'hosty'

const repo = ci.repo()
const branch = ci.branch()
const domain = (branch !== 'main' ? branch + '.' : '') + 'webneat.me'
const vars = ci.vars()
const env = yaml.parse(vars.prod_env)
const application = app.git({ name: domain, domain, repo, branch, env })

if (ci.event() === 'delete') destroy(ci.server(), application)
else deploy(ci.server(), application)

ci.run()
