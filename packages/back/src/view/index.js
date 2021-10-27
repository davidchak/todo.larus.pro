const fs = require('fs')
const path = require('path')
const express = require('express')
const route = express.Router()

route.use('/', express.static(__dirname + '/public'))

module.exports = route
