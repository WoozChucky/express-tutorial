import express from 'express';
import { ownersController } from '../controllers/ownerController';

export const ownersRouter = express.Router();


// find all
ownersRouter.get('/', ownersController.findAll);

// find one
ownersRouter.get('/:id', ownersController.findOne);

// create
ownersRouter.post('/', ownersController.create);

// update
ownersRouter.put('/:id', ownersController.update);

// delete
ownersRouter.delete('/:id', ownersController.remove);

ownersRouter.post('/:id/pet/:petId/associate', ownersController.associate);

ownersRouter.post('/:id/pet/:petId/disassociate', ownersController.disassociate);
