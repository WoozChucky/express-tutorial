import { Dog } from "../models/dog";
import { Request, Response } from 'express';

const dogs: Dog[] = [];

dogs.push(new Dog('Kelly', 2, 20, 'Female', 'brown', ''));

function findAll(req: Request, res: Response) {
    res.send(dogs);
}

function findOne(req: Request, res: Response) {

    const { id } = req.params;

    const result = dogs.find(dog => dog.id === id);

    res.send(result);
}

function create(req: Request, res: Response) {

    const { name, age, weight, sex, color, ownerId } = req.body;

    const newDog = new Dog(name, age, weight, sex, color, ownerId);

    dogs.push(newDog);

    res.send(newDog);
}

function update(req: Request, res: Response) {

    const { id } = req.params;

    const existingDog = dogs.find(dog => dog.id === id);

    if (existingDog === null || existingDog === undefined) {
        res.send('Dog not found');
        return;
    }

    const { name, age, weight, sex, color, ownerId } = req.body;

    const index = dogs.indexOf(existingDog);


    if (dogs[index].name !== name) {
        dogs[index].name = name;
    }

    if (dogs[index].age !== age) {
        dogs[index].age = age;
    }

    if (dogs[index].weight !== weight) {
        dogs[index].weight = weight;
    }

    if (dogs[index].sex !== sex) {
        dogs[index].sex = sex;
    }

    if (dogs[index].color !== color) {
        dogs[index].color = color;
    }

    if (dogs[index].ownerId !== ownerId) {
        dogs[index].ownerId = ownerId;
    }

    res.send(dogs[index]);

}

function remove(req: Request, res: Response) {

    const { id } = req.params;

    const existingDog = dogs.find(dog => dog.id === id);

    if (existingDog === null || existingDog === undefined) {
        res.send('Dog not found');
        return;
    }

    const index = dogs.indexOf(existingDog);

    dogs.splice(index, 1);

    res.send(`Dog ${existingDog.name} removed.`);
}

export const dogsController = {
    findAll,
    findOne,
    create,
    update,
    remove
}
