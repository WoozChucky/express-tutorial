import {Owner} from "./owner";
import {Dog} from "./dog";
import {Cat} from "./cat";

const startingDog = new Dog('Kelly', 2, 20, 'Female', 'brown', '');
startingDog.id = "10";

const startingCat = new Cat('Oscar', 3, 10, 'Male', 'black', '');
startingCat.id = "20";

const startingOwner = new Owner("Terry");
startingOwner.id = "30";

const owners: Owner[] = [startingOwner];
const dogs: Dog[] = [startingDog];
const cats: Cat[] = [startingCat];

export const Database = {
    owners,
    dogs,
    cats
};
