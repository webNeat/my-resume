/* eslint-disable unicorn/no-await-expression-member */
import { $ } from 'zx'
import { app, deploy, run, server } from 'hosty'

const [, , user, branch] = process.argv
if (!user || !branch) {
  console.log(`Error: missing argument\nSyntax: npm run destroy <user> <branch>`)
  process.exit(1)
}

const repo = `git@github.com:${process.env.GITHUB_REPOSITORY}.git`

// let domain = 'webneat.me'
// if (branch !== 'main') domain = branch + '.' + domain

// console.log(`Destroying`, { repo, branch, domain })

// destroy(
//   server({ name: 'vps', connection: { type: 'ssh', address: 'vps', user } }),
//   app.git({
//     name: domain,
//     domain,
//     repo,
//     branch,
//   })
// )

// const ps = await run({ ask_sudo_pass: false, ansible_options: ['-vvv'] })
// ps.on('error', (err) => {
//   console.error(err)
//   process.exit(1)
// })
// ps.on('close', (exitCode) => {
//   if (exitCode !== 0) process.exit(exitCode)
// })
