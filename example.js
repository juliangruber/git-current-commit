const getCommit = require('.')

getCommit(function (err, commit) {
  if (err) throw err
  console.log(`commit: ${commit}`)
  console.log(`commit: ${getCommit.sync()} (sync)`)
})

getCommit.promise().then(commit => console.log(`commit: ${commit} (promise)`))
