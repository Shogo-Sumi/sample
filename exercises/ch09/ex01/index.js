//クラスCを作成
//静的メソッドについて
//インスタンス化を行わずに使用できるメソッド

class C {
    //1のケース。インスタンス化を行わないため、staticを付与
    static method(){
        return 1;
    }

    //2のケース。インスタンス化を行っているため、動的メソッド
    method(){
        return 2;
    }

    //ケース5。(new C().C.method())
    //C()のインスタンスを作成。

    constructor(){
        this.C = class{
            static method(){
                return 5;
            }
            method(){
                return 6;
            }
        }
    }
};

//3のケース。別クラスC.Cを定義。インスタンス化を行わないためメソッドにstaticを付与

C.C = class{
    static method(){
        return 3;
    }
    //4のケース。動的メソッドの結果を返す。
    method(){
        return 4;
    }
};


  console.log((C.method()));
  console.log(new C().method());
  console.log(C.C.method());
  console.log((new C.C().method()));
  console.log((new C().C.method()));
  console.log(new new C().C().method());

export {C};