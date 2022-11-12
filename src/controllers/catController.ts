import { Cat } from "../models/cat";
import { Request, Response } from 'express';
import {Database} from "../models/database";

function findAll(req: Request, res: Response) {
    res.send(Database.cats);
}

function findOne(req: Request, res: Response) {

    const { id } = req.params;

    const result = Database.cats.find(cat => cat.id === id);

    res.send(result);
}

function create(req: Request, res: Response) {

    const { name, age, weight, sex, color, ownerId } = req.body;

    const newCat = new Cat(name, age, weight, sex, color, ownerId);

    Database.cats.push(newCat);

    res.send(newCat);
}

function update(req: Request, res: Response) {

    const { id } = req.params;

    const existingCat = Database.cats.find(cat => cat.id === id);

    if (existingCat === null || existingCat === undefined) {
        res.send('Cat not found');
        return;
    }

    const { name, age, weight, sex, color, ownerId } = req.body;

    const index = Database.cats.indexOf(existingCat);


    if (Database.cats[index].name !== name) {
        Database.cats[index].name = name;
    }

    if (Database.cats[index].age !== age) {
        Database.cats[index].age = age;
    }

    if (Database.cats[index].weight !== weight) {
        Database.cats[index].weight = weight;
    }

    if (Database.cats[index].sex !== sex) {
        Database.cats[index].sex = sex;
    }

    if (Database.cats[index].color !== color) {
        Database.cats[index].color = color;
    }

    if (Database.cats[index].ownerId !== ownerId) {
        Database.cats[index].ownerId = ownerId;
    }

    res.send(Database.cats[index]);

}

function remove(req: Request, res: Response) {

    const { id } = req.params;

    const existingCat = Database.cats.find(cat => cat.id === id);

    if (existingCat === null || existingCat === undefined) {
        res.send('Cat not found');
        return;
    }

    const index = Database.cats.indexOf(existingCat);

    Database.cats.splice(index, 1);

    res.send(`Cat ${existingCat.name} removed.`);
}

export const catsController = {
    findAll,
    findOne,
    create,
    update,
    remove
}
