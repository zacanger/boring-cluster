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
require('boring-cluster')(
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

## Changes

* 5.0.0 - 5th January 2019:
  * Bump min `engines` support to Node 10 (LTS)
* 4.0.0 - 22nd September 2018:
  * Drop Node 6 support
* 3.0.0 - 6th May 2018:
  * Resolve module internally
  * To upgrade, change `cluster(resolve(__dirname, 'foo'))` to `cluster('foo')`

[LICENSE](./LICENSE.md)
