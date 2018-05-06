# boring-cluster

A really boring cluster module

--------

## Installation

`npm i boring-cluster`

## Usage

This is all you need to do:

```javascript
const cluster = require('boring-cluster')
// `thing` could be a server, or any other process you want to cluster
cluster('./thing')
```

An optional second argument can be passed with the shape

```javascript
{ workers: number, name: string }
```

Example:
```javascript
cluster('some-thing', { workers: 2, name: 'My Awesome App' })
```

Full example with an Express server:

```javascript
// index.js
const cluster = require('boring-cluster')
cluster(
  'server',
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

This is tested on Node as far back as 6.4.0, and may work on even more ancient
versions.

## Change

* 3.0.0 - 6th May 2018:
  * Resolve module internally
  * To upgrade, change `cluster(resolve(__dirname, 'foo'))` to `cluster('foo')`

## License

[MIT](./LICENSE.md)
