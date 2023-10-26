const { Router } = require("express")

const NotesControllers = require('../controllers/MovieNotesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const movieNotesRoutes = Router()
movieNotesRoutes.use(ensureAuthenticated)

const movieNotesController = new NotesControllers()
movieNotesRoutes.get('/', movieNotesController.index)
movieNotesRoutes.post('/', movieNotesController.create)
movieNotesRoutes.get('/:id', movieNotesController.show)
movieNotesRoutes.delete('/:id', movieNotesController.delete)
movieNotesRoutes.put('/:id', movieNotesController.update)


module.exports = movieNotesRoutes