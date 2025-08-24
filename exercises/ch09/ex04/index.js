//class

//戦士用のクラス

class Warrior{
  atk = 10;
  constructor(atk){
    if(atk === undefined){
      atk = 10;
    }
    this.atk = atk;
  }

  attack() {
    return this.atk * 2;
  }
}

//魔法戦士使用のクラス

class MagicWarrior extends Warrior{
  mgc = 10;
  constructor(atk,mgc){
    if(mgc === undefined){
      mgc = 10;
    }
    super(atk);
    this.mgc = mgc;
  }

  attack() {
    return this.atk * 2 + this.mgc;
  }


}

export {Warrior,MagicWarrior};

const warrior = new Warrior(20);
console.log(warrior.attack());

const magicwarrior = new MagicWarrior(50,30);
console.log(magicwarrior.attack());


//prototype

var Warrior2 = function(atk){
  if(atk === undefined){
    atk = 10;
  }
  this.atk = atk;

  /*
  this.attack = function(){
    return this.atk * 2;
  }
    */
}

//MagicWarrior2にて、attack()を実行したときに、MagicWarrior2のattac()ではなく、Warrior2のattac()を参照する
//現象が発生したため、プロトタイプにメソッドを移動。
Warrior2.prototype.attack = function() {
  return this.atk * 2;
}

var MagicWarrior2 = function(atk,mgc){
  Warrior2.call(this,atk);
  if(mgc === undefined){
    mgc = 10;
  }
  this.mgc = mgc
}

MagicWarrior2.prototype = Object.create(Warrior2.prototype);//Warrior2からの継承
MagicWarrior2.prototype.constructor = MagicWarrior2;
MagicWarrior2.prototype.attack = function (){//attack()のオーバーライド
  return (this.atk * 2 + this.mgc);
}

export {Warrior2,MagicWarrior2};

const warrior2 = new Warrior2(20);
console.log(warrior2.attack());

const magicwarrior2 = new MagicWarrior2(20,50);
console.log(magicwarrior2.attack());
console.log(magicwarrior2.atk,magicwarrior2.mgc);
