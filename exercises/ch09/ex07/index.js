class Animal {
  //クラスAnimalにはeat()のみを定義。すべての動物は食事をするため。
  eat() {
    return console.log("eat");
  }
}

//動物が行うふるまいをクラス化
class Bite{
  bite() {
    return console.log("bite")
  }
}

class Scratch{
  scratch() {
    return console.log("scratch");
  }
}

class Fly{
  fly() {
    return console.log("fly");
  }
}

class Swim{
  swim() {
    return console.log("swim");
  }
}

class MakeSound{
  makesound() {
    return console.log("makesound");
  }
}

//動物をクラス化

class Dog {
  /* Biteはクラス化して外部に定義する。
  bite() {
    return console.log("bite")
  }
  */
  constructor(){
    this.eating = new Animal();
    this.makingsound = new MakeSound();
    this.biting = new Bite();
  }

  eat() {
    this.eating.eat();
  }

  makesound() {
    this.makingsound.makesound();
  }

  bite() {
    this.biting.bite();
  }
}

class Husky{
  constructor(){
    this.eating = new Animal();
    this.makingsound = new MakeSound();
    this.biting = new Bite();
  }

  eat() {
    this.eating.eat();
  }

  makesound() {
    this.makingsound.makesound();
  }

  bite() {
    this.biting.bite();
  }
}

class Cat{
  constructor(){
    this.eating = new Animal();
    this.makingsound = new MakeSound();
    this.scratching = new Scratch();
  }

  eat() {
    this.eating.eat();
  }

  makesound() {
    this.makingsound.makesound();
  }

  scratch() {
    this.scratching.scratch();
  }
}

class Bird{
  constructor(){
    this.eating = new Animal();
    this.makingsound = new MakeSound();
    this.flying = new Fly();
  }

  eat() {
    this.eating.eat();
  }

  makesound() {
    this.makingsound.makesound();
  }

  fly() {
    this.flying.fly();
  }
}

class Fish{
  constructor(){
    this.eat = new Animal();
    this.swim = new Swim();
  }

  eat() {
    this.eating.eat();
  }

  swim() {
    this.swiming.swim();
  }
}

const dog = new Dog();
const husky = new Husky();
const cat = new Cat();
const bird = new Bird();
const fish = new Fish();

dog.eat();
dog.makesound();
dog.bite();

husky.eat();
husky.makesound();
husky.bite();

cat.eat();
cat.makesound();
cat.scratch();

bird.eat();
bird.makesound();
bird.fly();

bird.eat();
bird.makesound();
bird.fly();


