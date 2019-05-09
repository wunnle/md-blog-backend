const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { connect } = require('../../helpers/db-helper')
const { postSchema } = require('../../schemas')


const app = express()

app.use(cors())
app.options('*', cors());

app.get('/getPost/*', async (req, res) => {

  connect()

  const Post = mongoose.model('Post', postSchema)
  const post = await Post.find({_id: req.query.id})

  if(post.length > 0) {
    res.json({
      message: `Here is the post`,
      info: post
    })
  } else {
    res.json({
      error: 'Post not found'
    })
  }

})

module.exports = app