const express = require('express');
const catsRouter = express.Router();
const catsController = require('../controllers/catController');

// find all
catsRouter.get('/', catsController.findAll);

// find one
catsRouter.get('/:id', catsController.findOne);

// create
catsRouter.post('/', catsController.create);

// update
catsRouter.put('/:id', catsController.update);

// delete
catsRouter.delete('/:id', catsController.remove);

module.exports = catsRouter;