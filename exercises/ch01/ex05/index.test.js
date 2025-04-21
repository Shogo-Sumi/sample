//import { abs, sum, factorial } from "./index.js";
import { abs,sum,factorial } from "./index.js";

//./index.jsからabs,sum,factorialモジュールをインポート

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

//test abs
describe("math", () => {
	//関連するテストをmathとしてまとめたメソッド
  describe("abs", () => {//abs関数のテストを実行するメソッド
    it("returns same value when positive value given", () => {//testコードの説明。正の値が入力された場合、同じ値を返す
      expect(abs(42)).toBe(42);//テスト結果の確認。abs関数へ42が入力された場合、42が返るか
    });

    it("returns negated value when negative value given", () => {//testコードの説明。負の値が入力された場合、反転した値を返す
      expect(abs(-42)).toBe(42);//テスト結果の確認。abs関数へ-42が入力された場合、42が返るか
    });

    it("returns zero value when zero given", () => {//testコードの説明。０が入力された場合、0が返るか。
      expect(abs(0)).toBe(0);//テスト結果の確認。abs関数へ０が入力された場合、０が返るか。
    });
  });
});


// 以下に sum, factorial のテストを記載せよ

//test sum
describe("math", () => {
        //関連するテストをmathとしてまとめたメソッド
  describe("sum", () => {//sum関数のテストを実行するメソッド
    it("send positive value", () => {//正の値が入力された場合、正の合計値を返す
      let x = [ 1,2,3,4,5]
      expect(sum(x)).toBe(15);
      console.log(sum(x));
    });
    it("send negated value", () => {//負の値が入力された場合、負の合計値を返す
      let y = [ -1,-2,-3,-4,-5]
      expect(sum(y)).toBe(-15);
      console.log(sum(y));
    });
    it("send positive and negative values", () => {//正の値と、負の値の合計値を入力。
      let z = [ -1,2,-3,4,-5]
      expect(sum(z)).toBe(-3);//テスト結果の確認。入力された正の値と負の値の合計値を返すか。
　　　console.log(sum(z));
    });
  });
});

//test factorial
describe("math", () => {
        //関連するテストをmathとしてまとめたメソッド
  describe("factorial", () => {//factorial関数のテストを実行するメソッド
    it("send positive value", () => {//正の値が入力された場合、正の階乗を返す
      expect(factorial(5)).toBe(120);//負の値が入力された場合、負の合計値を返す
      console.log(factorial(4));
    });
    it("send negated value", () => {
      console.log(factorial(-5));
      console.log("Please input positive value");
    });
    it("send 0 value", () => {//正の値と、負の値の合計値を入力。
      expect(factorial(0)).toBe(1);//テスト結果の確認。入力された正の値と負の値の合計値を返すか。
　　　console.log(factorial(0));
    });
  });
});

