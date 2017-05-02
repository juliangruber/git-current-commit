const cp = require('child_process')

const cmd = 'git log --format="%H" -n1'

module.exports = (dir, cb) => {
  if (typeof dir === 'function') {
    cb = dir
    dir = '.'
  }
  cp.exec(cmd, { cwd: dir }, (err, stdout, stderr) => {
    if (err) return cb(err)
    cb(null, stdout.trim())
  })
}

module.exports.sync = dir =>
  cp.execSync(cmd, { cwd: dir, encoding: 'utf8' }).trim()

module.exports.promise = dir => new Promise((resolve, reject) => {
  const cb = (err, sha) => err ? reject(err) : resolve(sha)
  module.exports(dir, cb)
})
