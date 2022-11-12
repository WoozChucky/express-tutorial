import { v4 } from 'uuid';

export type PetType = 'dog' | 'cat';

export interface Pet {
    id: string;
    type: PetType;
}

export class Owner {
    id: string;
    name: string;
    pets: Pet[];


    constructor(name: string, pets: Pet[] = []) {
        this.id = v4();
        this.name = name;
        this.pets = pets;
    }
}
