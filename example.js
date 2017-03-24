const getCommit = require('.')

getCommit(function (err, commit) {
  if (err) throw err
  console.log(`commit: ${commit}`)
  console.log(`commit: ${getCommit.sync()} (sync)`)
})
