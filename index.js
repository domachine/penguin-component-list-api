'use strict'

const url = require('url')
const { createProxyServer } = require('http-proxy')

const target = url.parse(process.env.npm_package_config_url)
const proxy = createProxyServer({
  target: process.env.npm_package_config_url
})

module.exports = (req, res) => {
  req.url = ''
  req.headers.host = target.host
  res.setHeader('Access-Control-Allow-Origin', '*')
  proxy.web(req, res)
}
