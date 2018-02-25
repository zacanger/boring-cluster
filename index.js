const cluster = require('cluster')
const { cpus } = require('os')

const boringCluster = (mod, opts = {
  workers: cpus().length,
  name: ''
}) => {
  const { workers, name } = opts

  if (cluster.isMaster) {
    Array.from(workers).fill(null).forEach(() => {
      cluster.fork()
    })

    cluster.on('exit', (worker) => {
      console.log(`${name ? `${name} ` : ''} ${worker.process.pid} died; forking.`)
      cluster.fork()
    })
  } else {
    require(mod)
  }
}

module.exports = boringCluster
