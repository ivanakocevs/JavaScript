function Mammal(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;

    
    
    this.run = function() {
        console.log(this.name + " is running");
    }

    this.eat = function() {
        console.log(this.name + " is eating");
    }
     
}

function Monkey() {
    this.love = function() {
        console.log(this.name + " loves banana");
    }
}

Monkey.prototype = new Mammal();

var monkey = new Monkey ("Tom", 5, "brown");

function Human() {
    this.walk = function() {
        console.log(this.name + " is walking");
    }
}