'use strict';

const Cat = function (name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.speak = function (){
        console.log(`${this.name} says meow`);
    }
}

const chief = new Cat('chief', 'gray and white', 9);
chief.speak();

class Cats {
    constructor(name,color,age) {
        this.name = name;
        this.color = color;
        this. age = age;
    }

    speak = function() {
        console.log(`${this.name} says meow`);
    }
}

const bendy = new Cats('bendy','black',3);
bendy.speak();

class Animal{
    constructor({name,age}){
        this.name = name;
        this.age = age;
    }

    speak = function() {
        console.log(`${this.name} is speaking`);
    }
}

class Dog extends Animal{
    /*constructor(name,color,age){
        super(name,age);
        this.color = color;
    }*/
    constructor(props){
        super(props);
        this.breed = props.breed;
    }
}
const cookie = new Dog({name:'cookie', breed:'mutt', age:9});
cookie.speak();