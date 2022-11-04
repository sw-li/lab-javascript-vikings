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




//war test just for fun
const testWar = new War();

const soldriers = [
  "Alona",
  "Aziza",
  "Cam",
  "Carolina",
  "Craig",
  "David",
  "Felipe",
  "Henrique",
  "Jolanta",
  "Julie",
  "Max",
  "Nadine",
  "Nicole",
  "Olga",
  "Omar A",
  "Omar K",
  "Phil",
  "Secil",
  "Shengwei",
  "Sirah",
  "Thor",
  "Tiago",
  "Valentine",
  "Zefanja"
];


function randomSaxon() {
  return new Saxon(Math.floor(Math.random() * 100 + 100), Math.floor(Math.random() * 30 + 10));
}


function randomViking() {
  return new Viking(
    soldriers.splice(Math.floor(Math.random() * soldriers.length),1),
    Math.floor(Math.random() * 150 + 100),
    Math.floor(Math.random() * 40 + 10)
  );
}


function randomMove() {
  let randomKey = Math.random();
  if (randomKey > 0.5) {
    return testWar.vikingAttack();
  } else {
    return testWar.saxonAttack();
  }
}


function startStatus(nbVikings, nbSaxons){
  //zoneTextHTML.innerHTML += "The war started!"
  while(nbVikings > 0){
    testWar.addViking(randomViking());
    nbVikings--
  }
  while(nbSaxons>0){
    testWar.addSaxon(randomSaxon())
    nbSaxons--
  }
  
  }

function startWar(nbVikings, nbSaxons){
  //zoneTextHTML.innerHTML =""
  startStatus(nbVikings, nbSaxons)
  while(testWar.showStatus().indexOf("still") != -1){
    let move = randomMove()
    console.log(move)
    //injectMessageToWeb(move)
  }
  //injectMessageToWeb(testWar.showStatus())
  console.log(testWar.showStatus())
}

//Here we should have less than 24 vikings. 
startWar(20,30)
