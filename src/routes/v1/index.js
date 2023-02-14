const express  = require("express")
const cityController = require("../../controllers/city-controller")
const airportController = require("../../controllers/airport-controller")

const router = express.Router();

// City CRUD
router.post('/city', cityController.create)
router.post('/cities', cityController.createMultipleCity)
router.delete('/city/:id', cityController.destroy)
router.get('/city/:id', cityController.get)
router.get('/city', cityController.getAll)
router.patch('/city/:id', cityController.update)

// Airport CRUD
router.post('/airport', airportController.create)
router.delete('/airport/:id', airportController.remove)
router.patch('/airport/:id', airportController.update)
router.get('/airport/:id', airportController.get)

module.exports = router