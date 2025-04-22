import { fib } from "./index.js";

//./index.jsからfibモジュールをインポート

// TypeScript の場合は以下:

//test fib
describe("math", () => {
	//関連するテストをmathとしてまとめたメソッド
  describe("fib", () => {//fib関数のテストを実行するメソッド
    it("returns 5 value when value 5", () => {//testコードの説明。5が入力された場合、5を返す
      expect(fib(5)).toBe(5);//テスト結果の確認。
      console.log(fib(5));
    });

    it("returns 2111485077978050 value when value 75", () => {//testコードの説明。75が入力された場合、2111485077978050を返す
      expect(fib(75)).toBe(2111485077978050);//テスト結果の確認。
      console.log(fib(75));
    });
  });
});

