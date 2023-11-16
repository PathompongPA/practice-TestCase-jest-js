const user = require("./index");

describe("user test", () => {
  describe("1 : user test", () => {
    const _userName = "john";
    it(`1.1 : set user is ${_userName}`, () => {
      expect(user.addName(_userName)).toEqual(_userName);
    });
  });

  describe("2 : mana test", () => {
    const _manaDefault = 100;
    test(`2.1 : get Mana (default ${_manaDefault})`, () => {
      expect(user.getMana()).toEqual(_manaDefault);
    });

    test(`2.2 : reduce mana ${60} unit result is 40`, () => {
      expect(user.manaReduce(60)).toEqual(40);
    });

    test(`2.3 : reduce mana ${60} unit "mana not enough to reduce" `, () => {
      expect(user.manaReduce(60)).toEqual("mana not enough to reduce");
    });

    test(`2.4 : reduce mana ${20} unit result is  20`, () => {
      expect(user.manaReduce(20)).toEqual(20);
    });

    test(`2.5 : increase mana ${60} unit result is 80`, () => {
      expect(user.manaIncrease(60)).toEqual(80);
    });

    test(`2.6 : increase mana ${60} unit when mana is max return 100 mana `, () => {
      expect(user.manaIncrease(60)).toEqual(100);
    });

    test(`2.7 : reduce mana ${110} unit result is "mana not enough to reduce"`, () => {
      expect(user.manaReduce(110)).toEqual("mana not enough to reduce");
    });
  });

  describe("3 : HP test", () => {
    test(`get HP (default ${50})`, () => {
      expect(user.getHP()).toEqual(50);
    });

    test(`3.1 : reduce HP ${30} result is 20 HP`, () => {
      expect(user.HpReduce(30)).toEqual(20);
    });

    test(`3.2 : reduce HP ${30} result is 0 HP`, () => {
      expect(user.HpReduce(30)).toEqual(0);
    });

    test(`3.3 : increase HP ${30} result is 30 HP`, () => {
      expect(user.HpIncrease(30)).toEqual(30);
    });

    test(`3.4 : increase HP ${30} result is 50 HP`, () => {
      expect(user.HpIncrease(30)).toEqual(50);
    });
  });
});
