/* eslint-disable @typescript-eslint/naming-convention */
/**
 * node deployment.js <'deploy' | 'destroy'>
 * requirements:
 * - hostname `vps` associated with the server IP (in /etc/hosts)
 * - hostname `vps` in known_hosts
 * - ssh private key that can access to the server
 */
import { app, deploy, destroy, run, server } from 'hosty'

function help() {
  console.log(`Error: wrong arguments or env vars
Syntax:
  node deployment.js deploy
  node deployment.js destroy
env vars:
  VPS_IP: the server IP address
  VPS_USER: the remote user
  ANSIBLE_BECOME_PASS: the sudo password of the remote user
  REPOSITORY: the repo as '<user>/<repo-name>'
  BRANCH_NAME: the name of the corresponding branch (the pushed or deleted branch)
`)
  process.exit(1)
}

async function main([action]) {
  const user = process.env.VPS_USER
  const branch = process.env.BRANCH_NAME
  const address = process.env.VPS_IP
  const repo_name = process.env.REPOSITORY

  console.log(`Details`, { address, user, repo_name, branch, action })

  if (action !== 'deploy' && action !== 'destroy') return help()
  if (!user || !branch || !address || !repo_name) return help()

  const repo = `git@github.com:${repo_name}.git`
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
  const fn = action === 'deploy' ? deploy : destroy
  fn(
    server({ name: 'vps', connection: { type: 'ssh', address, user } }),
    app.git({ name: domain, domain, repo, branch, env })
  )
  handle_process(await run({ ask_sudo_pass: false, ansible_options: ['-v'] }))
}
main(process.argv.slice(2))

function handle_process(ps) {
  ps.on('error', (err) => {
    console.error(err)
    process.exit(1)
  })
  ps.on('close', (exitCode) => {
    if (exitCode !== 0) process.exit(exitCode)
  })
}
