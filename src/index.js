'use strict'

const path = require('path')
const fs = require('fs')

module.exports = (server, {assets, path: spaPath, options}) => {
  if (!spaPath) {
    spaPath = '/'
  }

  server.route({
    method: 'GET',
    path: spaPath + '{param*}',
    options,
    handler: async (request, h) => {
      let p = path.join(assets, request.path.replace(spaPath, ''))
      if (fs.existsSync(p)) {
        return h.file(p, {confine: false})
      } else {
        return h.file(path.join(assets, 'index.html'), {confine: false})
      }
    }
  })

  server.route({
    method: 'GET',
    path: spaPath,
    options,
    handler: async (request, h) => {
      return h.file(path.join(assets, 'index.html'), {confine: false})
    }
  })
}
