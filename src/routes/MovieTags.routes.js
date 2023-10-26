const { Router } = require("express")

const TagsControllers = require('../controllers/MovieTagsController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const movieTagsRoutes = Router()

const movieTagsController = new TagsControllers()

movieTagsRoutes.get('/', ensureAuthenticated, movieTagsController.index)


module.exports = movieTagsRoutes