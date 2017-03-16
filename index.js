'use strict'

const request = require('request')
const { sendError } = require('micro')

module.exports = (req, res) => {
  request(process.env.npm_package_config_url)
    .on('error', err => sendError(req, res, err))
    .on('response', r => {
      res.statusCode = r.statusCode
      res.setHeader('Content-Type', 'application/json')
      res.setHeader('Access-Control-Allow-Origin', '*')
      r.pipe(res)
    })
}
