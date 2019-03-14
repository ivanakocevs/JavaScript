function Dragon(name) {
    // a dragon should have properties that relate only to him
    // and he is also a combatant
    this.name = name;
}

Dragon.prototype = new Combatant();