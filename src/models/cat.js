const uuid = require('uuid');

class Cat {
    constructor(name, age, weight, sex, color) {
        this.id = uuid.v4();
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.sex = sex;
        this.color = color;
    }
}

module.exports = Cat;