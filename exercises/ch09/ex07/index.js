<<<<<<< HEAD
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


=======
export class LinkedList {
  #head = null;
  #tail = null;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  push(value) {
    const newNode = { value, next: null };
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
  }

  pushAll(...items) {
    items.forEach((item) => this.push(item));
  }

  toString() {
    let current = this.#head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return "[" + values.join(", ") + "]";
  }
}

/**
 * 要素のpush回数を記録するLinkedList
 */
export class InstrumentedLinkedList extends LinkedList {
  #pushCount = 0;

  /**
   * 要素のpush操作が行われた回数
   */
  get pushCount() {
    return this.#pushCount;
  }

  push(item) {
    super.push(item);
    this.#pushCount++;
  }

  pushAll(...items) {
    super.pushAll(...items);
    this.#pushCount += items.length;
  }
}
>>>>>>> 045db01dbc4038815c76fa1f1d26c6f08a5e58ca
