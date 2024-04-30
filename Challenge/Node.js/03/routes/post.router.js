const express = require('express')
const postsRouter = express.Router()

const postController = require('../controllers/post.controller')

postsRouter.get('/', postController.getPost)

module.exports = postsRouter