//テスト用index.js
//exportしたいクラスメソッドを記載
//例　export class A {
//     constructor(){
//      this.current = new B();
//      }
//     }

export function fib(x) {
	const result = [ 0 , 1];//配列resultを宣言。初期値1,2.
	let i = 2;
	for (i = 2; i <= x; i++){//n番目のフィボナッチ数を求めるまでループ処理.
		const a = result[ i - 1];//要素i-1の値を定数aへ格納
		const b = result[ i - 2];//要素i-2の値を定数bへ格納

		result.push( a + b);//定数resultへa+bの相対をプッシュ
	}
	return result[x];//結果を返す。
}

/*
例：x=5
i=2:a=1:b=0:result=[0,1,1]
i=3:a=1:b=1:result=[0,1,1,2]
i=4:a=2:b=1:result=[0,1,1,2,3]
i=5:a=3:b=2:result=[0,1,1,2,3,5]
*/

//プリティアといったツールを入れてコードを整形した方が良い。
