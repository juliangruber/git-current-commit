
# git-current-commit

[![Greenkeeper badge](https://badges.greenkeeper.io/juliangruber/git-current-commit.svg)](https://greenkeeper.io/)

Get the current local git commit.

## Usage

```js
const getCommit = require('git-current-commit')

getCommit(function (err, commit) {
  if (err) throw err
  console.log(commit) // => '21ed11701a068b88b3890578a1c8a420972927a4'
})

getCommit.sync() // => '21ed11701a068b88b3890578a1c8a420972927a4'
```

## Installation

```bash
$ npm install git-current-commit
```

## API

### getCommit([dir], cb)

### getCommit.sync([dir])

## License

MIT
