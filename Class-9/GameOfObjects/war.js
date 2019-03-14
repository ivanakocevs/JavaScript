function War() {
    this.army = [];
    this.boss = new Dragon("Drogon");

    this.isRaging = function() {
        // this method should execute everything that happens during one day of battle
        return true;
    }

    // this method should generate an army of 10 people alternating randomly between 
    // 3 classes, Warrior, Wizard and Archer
    this.generateArmy = function() {
        for (var index = 0; index < 10; index++) {
            var type = getRandomNumber(1, 3);
            if(type === 1) {
                var person = new Warrior(index);
            }
            else if(type === 2) {
                var person = new Wizard(index);
            }else {
                var person = new Archer(index);
            }
            
        
        this.army.push(person);
        }
        
    }
    this.generateArmy();
}
War();