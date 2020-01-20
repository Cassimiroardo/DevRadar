const { Router } = require('express')
const devController = require('./Controllers/DevController') 
const searchController = require('./Controllers/SearchController')

const routes = Router()

routes.get('/devs', devController.index)
routes.post('/devs', devController.store)
routes.delete('/devs/:_id', devController.destroy)

routes.get('/search', searchController.index)

module.exports = routes