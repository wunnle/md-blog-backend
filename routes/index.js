const express = require('express')
const mongoose = require('mongoose')
const { connect } = require('../helpers/db-helper')

const app = express()

app.get('/', (req, res) => {

  res.send('heyo')

})

module.exports = app