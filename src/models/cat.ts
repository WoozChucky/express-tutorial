import { v4 } from 'uuid';

export class Cat {
    id: string;
    name: string;
    age: number;
    weight: number;
    sex: string;
    color: string;
    ownerId: string;

    constructor(name: string, age: number, weight: number, sex: string, color: string, ownerId: string) {
        this.id = v4();
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.sex = sex;
        this.color = color;
        this.ownerId = ownerId;
    }
}

