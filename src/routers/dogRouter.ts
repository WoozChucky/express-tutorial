import express from 'express';
import { dogsController } from '../controllers/dogController';

export const dogsRouter = express.Router();


// find all
dogsRouter.get('/', dogsController.findAll);

// find one
dogsRouter.get('/:id', dogsController.findOne);

// create
dogsRouter.post('/', dogsController.create);

// update
dogsRouter.put('/:id', dogsController.update);

// delete
dogsRouter.delete('/:id', dogsController.remove);