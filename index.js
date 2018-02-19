var cluster = require('cluster')
var cpus = require('os').cpus

function boringCluster (mod, opt) {
  var opts = opt || {}
  var len = opts.workers || cpus().length
  var name = opts.name || ''

  if (cluster.isMaster) {
    for (var i = 0; i < len; i++) {
      cluster.fork()
    }

    cluster.on('exit', function (worker) {
      console.log(name + name ? ' ' : '' + worker.process.pid + ' died; forking.')
      cluster.fork()
    })
  } else {
    require(mod)
  }
}

module.exports = boringCluster
