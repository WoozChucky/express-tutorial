import { v4 } from 'uuid';

export class Dog {
    id: string;
    name: string;
    age: number;
    weight: number;
    sex: string;
    color: string;

    constructor(name: string, age: number, weight: number, sex: string, color: string) {
        this.id = v4();
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.sex = sex;
        this.color = color;
    }
}
