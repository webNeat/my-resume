/* eslint-disable unicorn/no-await-expression-member */
import { app, deploy, run, server } from 'hosty'

const [, , user, branch] = process.argv
if (!user || !branch) {
  console.log(`Error: missing argument\nSyntax: npm run deploy <user> <branch>`)
  process.exit(1)
}

const repo = `git@github.com:${process.env.GITHUB_REPOSITORY}.git`

let domain = 'webneat.me'
if (branch !== 'main') domain = branch + '.' + domain

deploy(
  server({ name: 'vps', connection: { type: 'ssh', address: 'vps', user } }),
  app.git({
    name: domain,
    domain,
    repo,
    branch,
    env: {
      TZ: 'UTC',
      PORT: '80',
      HOST: '0.0.0.0',
      LOG_LEVEL: 'info',
      APP_KEY: 'NZWllL-iR0n8OaQQyQzH6YWwojZNWOYH',
      NODE_ENV: 'production',
      SESSION_DRIVER: 'cookie',
    },
  })
)

const ps = await run({ ask_sudo_pass: false, ansible_options: ['-vvv'] })
ps.on('error', (err) => {
  console.error(err)
  process.exit(1)
})
ps.on('close', (exitCode) => {
  if (exitCode !== 0) process.exit(exitCode)
})
