// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(objViking) {
    this.vikingArmy.push(objViking);
  }
  addSaxon(objSaxon) {
    this.saxonArmy.push(objSaxon);
  }

  /* 
  //withou encapsulation 
  vikingAttack() {
    if (this.vikingArmy.length != 0 && this.saxonArmy.length != 0) {
      let saxonIndex = randomSoldierIndex(this.saxonArmy);
      let vikingIndex = randomSoldierIndex(this.vikingArmy);
      let saxon = this.saxonArmy[saxonIndex];
      let viking = this.vikingArmy[vikingIndex];

      let damageMessage = saxon.receiveDamage(viking.strength);
      if (damageMessage.indexOf("died") != -1) {
        this.saxonArmy.splice(saxonIndex, 1);
      }
      return damageMessage;
    }
  }

  saxonAttack() {
    if (this.vikingArmy.length != 0 && this.saxonArmy.length != 0) {
      let saxonIndex = randomSoldierIndex(this.saxonArmy);
      let vikingIndex = randomSoldierIndex(this.vikingArmy);
      let saxon = this.saxonArmy[saxonIndex];
      let viking = this.vikingArmy[vikingIndex];

      let damageMessage = viking.receiveDamage(saxon.strength);
      if (damageMessage.indexOf("died") != -1) {
        this.vikingArmy.splice(vikingIndex, 1);
      }
      return damageMessage;
    }
  } */

  //with encapsulation
  attack(giver, receiver) {
    if (giver.length != 0 && receiver.length != 0) {
      let giverIndex = randomSoldierIndex(giver);
      let receiverIndex = randomSoldierIndex(receiver);
      let giverSoldier = giver[giverIndex];
      let receiverSoldier = receiver[receiverIndex];
      let damageMessage = receiverSoldier.receiveDamage(giverSoldier.strength);
      if (damageMessage.indexOf("died") != -1) {
        receiver.splice(receiverIndex, 1);
      }
      return damageMessage;
    }
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
  }

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }

  showStatus(){
    if(this.saxonArmy.length == 0){
        return "Vikings have won the war of the century!"
    }else if(this.vikingArmy.length ==0){
        return "Saxons have fought for their lives and survived another day..."
    }else{
        return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

//supose the army is not empty, this condition will be checked in the attack method. 
function randomSoldierIndex(army){
    return Math.floor(Math.random() * army.length)
}