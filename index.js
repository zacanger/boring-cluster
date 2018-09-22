const cluster = require('cluster')
const { cpus } = require('os')
const { resolve } = require('path')

const boringCluster = (m, {
  name = '',
  workers = cpus().length
} = {}) => {
  const mod = resolve(m)

  if (cluster.isMaster) {
    Array.from({ length: workers }).forEach(() => {
      cluster.fork()
    })

    cluster.on('exit', (worker) => {
      console.log(`${name || ''} ${worker.process.pid} died; forking.`.trim())
      cluster.fork()
    })
  } else {
    require(mod)
  }
}

module.exports = boringCluster
