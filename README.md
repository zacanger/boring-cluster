# boring-cluster

A really boring cluster module

--------

## Installation

`npm i boring-cluster`

## Usage

```javascript
const cluster = require('boring-cluster')
const { resolve } = require('path')
const server = resolve(__dirname, 'server')

cluster(server)
```

That's it.

## License

[MIT](./LICENSE.md)
