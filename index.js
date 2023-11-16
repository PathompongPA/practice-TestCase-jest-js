class User {
  constructor(name, hp = 50, mana = 100, ability = undefined) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.ability = ability;
  }

  addName(name) {
    console.log("CALL addName");
    this.name = name;
    return this.name;
  }

  // Mana process start
  getMana() {
    console.log("CALL getMana");
    return this.mana;
  }

  manaReduce(reduceValue) {
    console.log("CALL manaReduce");
    if (reduceValue > this.mana) {
      return "mana not enough to reduce";
    } else {
      this.mana = this.mana - reduceValue;
      return this.mana;
    }
  }

  manaIncrease(increaseValue) {
    console.log("CALL manaIncrease");
    const newMana = this.mana + increaseValue;
    if (newMana > 100) {
      this.mana = 100;
    } else {
      this.mana = newMana;
    }
    return this.mana;
  }

  // HP process start
  getHP() {
    console.log("CALL getHP");
    return this.hp;
  }

  HpReduce(reduceValue) {
    console.log("CALL HpReduce");
    if (reduceValue > this.hp) {
      this.hp = 0;
      return this.hp;
    } else {
      this.hp = this.hp - reduceValue;
      return this.hp;
    }
  }

  HpIncrease(increaseValue) {
    console.log("CALL HpIncrease");
    const newHp = this.hp + increaseValue;
    if (newHp > 50) {
      this.hp = 50;
    } else {
      this.hp = newHp;
    }
    return this.hp;
  }
}

module.exports = new User();
