const cluster = require('cluster')
const { cpus } = require('os')
const { resolve } = require('path')

const boringCluster = (m, opts = {}) => {
  const mod = resolve(m)
  const { workers = cpus().length, name = '' } = opts

  if (cluster.isMaster) {
    Array(workers).fill(null).forEach(() => {
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
