// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health-= damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(damage){
        this.health-= damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(objViking){
        this.vikingArmy.push(objViking)
    }
    addSaxon(objSaxon){
        this.saxonArmy.push(objSaxon)
    }
/*     attack(giver, receivor){
        if(receivor.length ==0){
            console.log("the army is already annihilated")
            return null
        }else{
            receivor[0].receiveDamage(giver[0].health)
        }
    }  */

    vikingAttack(){
        if(this.saxonArmy.length !=0){
            this.saxonArmy[0].receiveDamage(this.vikingArmy[0].health)
            if(this.saxonArmy[0].health<=0){
                this.saxonArmy[0].shift()
            }
        }else{
            return "the Saxon army is wiped out"
        }
        
    }
}


function firstAliveSoldier(army){
    for(i in army){
        if(army[i].health<=0){
            
            return army[i];
        }
    }
    console.log(`the ${army.name} is wiped out`);
    return null;
}

