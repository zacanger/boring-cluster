# boring-cluster

A really boring cluster module

--------

## Installation

`npm i boring-cluster`

## Usage

This is all you need to do:

```javascript
const cluster = require('boring-cluster')
const { resolve } = require('path')
// `thing` could be a server, or any other process you want to cluster
const thing = resolve(__dirname, 'thing')

cluster(thing)
```

Full example with an Express server:

```javascript
// index.js
const cluster = require('boring-cluster')
const { resolve } = require('path')
cluster(resolve(__dirname, 'server'))

// server.js
const cluster = require('cluster') // node builtin cluster
const express = require('express')
const port = 2000
const app = express

// all your application-specific stuff goes here
app.use(express.static(__dirname))
app.listen(port, () => {
  console.log(`Cluster worker ${cluster.worker.id} listening on ${port}`)
})
```

## License

[MIT](./LICENSE.md)
