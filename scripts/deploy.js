/* eslint-disable unicorn/no-await-expression-member */
import { $ } from 'zx'
import { app, deploy, run, server } from 'hosty'

const [, , user] = process.argv
if (!user) {
  console.log(`Error: missing argument\nSyntax: npm deploy <user>`)
  process.exit(1)
}

const repo = (await $`git config --get remote.origin.url`).stdout.trim()
const branch = (await $`git rev-parse --abbrev-ref HEAD`).stdout.trim()

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
