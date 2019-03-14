function Human(name, age, gender, ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.type = "worker";

    this.work = function() {
        console.log(this.name + " is working");
    }
}

var person = new Human("Vladimir", 33, "male");
var person2 = new Human("Zoki", 22, "male");


function war() {
    while (warior.hitpoints > 0 && warior2.hitpoints > 0){
        warior.hitpoints -= (warior2.damage() + warior.armor);
        warior2.hitpoints -= (warior.damage() + warior2.armor);
    }
    if(warior.hitpoints <= 0) {
        console.log("Orc is dead");
    } 
    else {
        console.log("Human is dead");
    }
    

}

function Combatant(name, hitpoints, minDamage, maxDamage, armor ) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.armor = armor;

    this.damage = function() {
        var damage = Math.floor(Math.random() * (maxDamage-minDamage+1) + minDamage);
        return damage;
     

    }
}

    var warior = new Combatant("Orc", 720, 23, 35, 6);
    var warior2 = new Combatant("Human", 550, 18, 27, 9);


war(warior, warior2);
