import { Dog } from "../models/dog";
import { Request, Response } from 'express';
import {Database} from "../models/database";

function findAll(req: Request, res: Response) {
    res.send(Database.dogs);
}

function findOne(req: Request, res: Response) {

    const { id } = req.params;

    const result = Database.dogs.find(dog => dog.id === id);

    res.send(result);
}

function create(req: Request, res: Response) {

    const { name, age, weight, sex, color, ownerId } = req.body;

    const newDog = new Dog(name, age, weight, sex, color, ownerId);

    Database.dogs.push(newDog);

    res.send(newDog);
}

function update(req: Request, res: Response) {

    const { id } = req.params;

    const existingDog = Database.dogs.find(dog => dog.id === id);

    if (existingDog === null || existingDog === undefined) {
        res.send('Dog not found');
        return;
    }

    const { name, age, weight, sex, color, ownerId } = req.body;

    const index = Database.dogs.indexOf(existingDog);


    if (Database.dogs[index].name !== name) {
        Database.dogs[index].name = name;
    }

    if (Database.dogs[index].age !== age) {
        Database.dogs[index].age = age;
    }

    if (Database.dogs[index].weight !== weight) {
        Database.dogs[index].weight = weight;
    }

    if (Database.dogs[index].sex !== sex) {
        Database.dogs[index].sex = sex;
    }

    if (Database.dogs[index].color !== color) {
        Database.dogs[index].color = color;
    }

    if (Database.dogs[index].ownerId !== ownerId) {
        Database.dogs[index].ownerId = ownerId;
    }

    res.send(Database.dogs[index]);

}

function remove(req: Request, res: Response) {

    const { id } = req.params;

    const existingDog = Database.dogs.find(dog => dog.id === id);

    if (existingDog === null || existingDog === undefined) {
        res.send('Dog not found');
        return;
    }

    const index = Database.dogs.indexOf(existingDog);

    Database.dogs.splice(index, 1);

    res.send(`Dog ${existingDog.name} removed.`);
}

export const dogsController = {
    findAll,
    findOne,
    create,
    update,
    remove
}
