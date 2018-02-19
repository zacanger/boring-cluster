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

An optional second argument can be passed with the shape

```javascript
{ workers: number, name: string }
```

Example:
```javascript
cluster(resolve(__dirname, 'some-thing'), { workers: 2, name: 'My Awesome App' })
```

Full example with an Express server:

```javascript
// index.js
const cluster = require('boring-cluster')
const { resolve } = require('path')
cluster(
  resolve(__dirname, 'server'),
  { name: 'sweet server', workers: 2 }
)

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

This is tested on Node as far back as 4.1.2, and may work on even more ancient
versions.

## License

[MIT](./LICENSE.md)
