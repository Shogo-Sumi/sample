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


export function sum(array) {
	let sum = 0;
	for(let x of array) {
		sum += x;
	}
	return sum;
}

export function factorial(n) { // 階乗を計算する関数。
	let product = 1; // 1からスタート。
	while(n > 1) { // ()中の式がtrueの間は{}中の文を繰り返す。
		product *= n; // product = product * n; の短縮表記。
		n--; // n = n - 1 の短縮表記。
	} // ループの最後。
return product; // 計算結果を返す。
}
