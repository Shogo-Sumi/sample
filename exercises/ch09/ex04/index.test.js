import { Warrior,MagicWarrior,Warrior2,MagicWarrior2 } from "./index.js"; // ts でも可

const warrior1 = new Warrior();
const warrior2 = new Warrior(20);
const warrior3 = new Warrior2();
const warrior4 = new Warrior2(20);
const magicwarrior1 = new MagicWarrior();
const magicwarrior2 = new MagicWarrior(50,30);
const magicwarrior3 = new MagicWarrior2();
const magicwarrior4 = new MagicWarrior2(50,30);



test("", () => {
  expect(warrior1.attack()).toBe(20);
  expect(warrior2.attack()).toBe(40);
  expect(warrior3.attack()).toBe(20);
  expect(warrior4.attack()).toBe(40);
  expect(magicwarrior1.attack()).toBe(30);
  expect(magicwarrior2.attack()).toBe(130);
  expect(magicwarrior3.attack()).toBe(30);
  expect(magicwarrior4.attack()).toBe(130);
});
