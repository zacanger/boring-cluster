var cluster = require('cluster')
var cpus = require('os').cpus

var len = cpus().length

function boringCluster (mod) {
  if (cluster.isMaster) {
    for (var i = 0; i < len; i++) {
      cluster.fork()
    }

    cluster.on('exit', function (worker) {
      console.log(worker.process.pid + ' died; forking.')
      cluster.fork()
    })
  } else {
    require(mod)
  }
}

module.exports = boringCluster
