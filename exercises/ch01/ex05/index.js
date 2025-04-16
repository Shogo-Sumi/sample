//テスト用index.js
//exportしたいクラスメソッドを記載
//例　export class A {
//     constructor(){
//      this.current = new B();
//      }
//     }

export function abs(x) {
	if (x >= 0){
		return x;
	}
	else {
		return -x;
	}
}


