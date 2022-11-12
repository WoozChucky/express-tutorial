import { Owner } from "../models/owner";
import { Request, Response } from 'express';

import { Database } from "../models/database";
import {Cat} from "../models/cat";
import {Dog} from "../models/dog";

function findAll(req: Request, res: Response) {
    res.send(Database.owners);
}

function findOne(req: Request, res: Response) {

    const { id } = req.params;

    const result = Database.owners.find(owner => owner.id === id);

    res.send(result);
}

function create(req: Request, res: Response) {

    const { name } = req.body;

    const newOwner = new Owner(name);

    Database.owners.push(newOwner);

    res.send(newOwner);
}

function update(req: Request, res: Response) {

    const { id } = req.params;

    const existingOwner = Database.owners.find(owner => owner.id === id);

    if (existingOwner === null || existingOwner === undefined) {
        res.send('Owner not found');
        return;
    }

    const { name } = req.body;

    const index = Database.owners.indexOf(existingOwner);


    if (Database.owners[index].name !== name) {
        Database.owners[index].name = name;
    }

    res.send(Database.owners[index]);

}

function remove(req: Request, res: Response) {

    const { id } = req.params;

    const existingOwner = Database.owners.find(owner => owner.id === id);

    if (!existingOwner) {
        res.send('Owner not found');
        return;
    }

    const index = Database.owners.indexOf(existingOwner);

    Database.owners.splice(index, 1);

    res.send(`Owner ${existingOwner.name} removed.`);
}

function associate (req: Request, res: Response) {
    const {id, petId} = req.params;

    const existingOwner = Database.owners.find(owner => owner.id === id);

    if (!existingOwner) {
        res.send('Owner not found');
        return;
    }
    const existingCat = Database.cats.find(cat => cat.id === petId);
    const existingDog = Database.dogs.find(dog => dog.id === petId);

    if (!existingCat && !existingDog) {
        res.send(`Pet with id ${petId} not found`);
        return;
    }

    if(existingCat) {
        associateCat(existingCat, existingOwner, res);
        return;
    }

    if(existingDog) {
        associateDog(existingDog, existingOwner, res);
        return;
    }

    res.send('Associate')
}

function associateCat (cat: Cat, owner: Owner, res: Response) {
    if(cat.ownerId === '' || cat.ownerId === null){
        owner.pets.push({id: cat.id, type: "cat"});
        cat.ownerId = owner.id;
        res.send(`Cat ${cat.name} associated`);
        return;
    }
    if(cat.ownerId !== '' && cat.ownerId !== null ) {
        if(cat.ownerId === owner.id) {
            res.send(`Cat with id ${cat.id} is already associated with you`);
            return;
        } else {
            res.send(`Cat with id ${cat.id} is already associated`);
            return;
        }
    }
}

function  associateDog (dog: Dog, owner: Owner, res: Response) {
    if(dog.ownerId === '' || dog.ownerId === null){
        owner.pets.push({id: dog.id, type: "dog"});
        dog.ownerId = owner.id;
        res.send(`Dog ${dog.name} associated`);
        return;
    }
    if(dog.ownerId !== '' && dog.ownerId !== null ) {
        if(dog.ownerId === owner.id) {
            res.send(`Dog with id ${dog.id} is already associated with you`);
            return;
        } else {
            res.send(`Dog with id ${dog.id} is already associated`);
            return;
        }
    }
}

function disassociate (req: Request, res: Response) {

}

export const ownersController = {
    findAll,
    findOne,
    create,
    update,
    remove,
    associate,
    disassociate
}
