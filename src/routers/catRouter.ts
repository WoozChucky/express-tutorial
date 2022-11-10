import express from 'express';
import { catsController } from '../controllers/catController';

export const catsRouter = express.Router();


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

