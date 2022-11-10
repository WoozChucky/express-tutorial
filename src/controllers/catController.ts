import { Cat } from "../models/cat";
import { Request, Response } from 'express';

const cats: Cat[] = [];

cats.push(new Cat('Oscar', 3, 10, 'Male', 'black'));

function findAll(req: Request, res: Response) {
    res.send(cats);
}

function findOne(req: Request, res: Response) {

    const { id } = req.params;

    const result = cats.find(cat => cat.id === id);

    res.send(result);
}

function create(req: Request, res: Response) {

    const { name, age, weight, sex, color } = req.body;

    const newCat = new Cat(name, age, weight, sex, color);

    cats.push(newCat);

    res.send(newCat);
}

function update(req: Request, res: Response) {

    const { id } = req.params;

    const existingCat = cats.find(cat => cat.id === id);

    if (existingCat === null || existingCat === undefined) {
        res.send('Cat not found');
        return;
    }

    const { name, age, weight, sex, color } = req.body;

    const index = cats.indexOf(existingCat);


    if (cats[index].name !== name) {
        cats[index].name = name;
    }

    if (cats[index].age !== age) {
        cats[index].age = age;
    }

    if (cats[index].weight !== weight) {
        cats[index].weight = weight;
    }

    if (cats[index].sex !== sex) {
        cats[index].sex = sex;
    }

    if (cats[index].color !== color) {
        cats[index].color = color;
    }

    res.send(cats[index]);

}

function remove(req: Request, res: Response) {

    const { id } = req.params;

    const existingCat = cats.find(cat => cat.id === id);

    if (existingCat === null || existingCat === undefined) {
        res.send('Cat not found');
        return;
    }

    const index = cats.indexOf(existingCat);

    cats.splice(index, 1);

    res.send(`Cat ${existingCat.name} removed.`);
}

export const catsController = {
    findAll,
    findOne,
    create,
    update,
    remove
}