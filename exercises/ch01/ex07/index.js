//テスト用index.js
//exportしたいクラスメソッドを記載
//例　export class A {
//     constructor(){
//      this.current = new B();
//      }
//     }

//let a=0,b=0;//座標位置を格納するための変数を宣言。aはx座標をbはy座標を格納する。

export class Point {//クラス宣言
 constructor(x, y,a,b) {//コンストラクター宣言
         this.x = x;
         this.y = y;
	 this.a = 0;
	 this.b = 0;
 }
        add() {//
                return (this.a += this.x, this.b += this.y);//変数a,bへインスタンスから入力された座標を格納。
        }
}
