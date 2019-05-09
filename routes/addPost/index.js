const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const verifyToken = require('../../middlewares/veriyToken')
const { postSchema } = require('../../schemas')
const { connect } = require('../../helpers/db-helper')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/addPost', verifyToken, (req, res) => {

  connect()

  const Post = mongoose.model('Post', postSchema)

  if (req.body.post) {
    const post = new Post({
      post: req.body.post
    })
    post.save().then(post => {
      res.json({ post })
    })

  } else {
    res.json({
      error: 'add post to body'
    })
  }

})


module.exports = app