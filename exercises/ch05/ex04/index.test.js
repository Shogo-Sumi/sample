//test実施
import { while_test, dowhile_test, for_test } from "./index.js";

//index.jsからテスト関数をインポート

const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

//テスト実施
describe("math", () => {
  //関連するテストをmathとしてまとめたメソッド
  describe("while_test", () => {
    it("while_test test", () => {
      expect(while_test()).toStrictEqual(fib);
    });
  });
  describe("dowhile_test", () => {
    it("dowhile_test test", () => {
      expect(dowhile_test()).toStrictEqual(fib);
    });
  });
  describe("for_test", () => {
    it("for_test test", () => {
      expect(for_test()).toStrictEqual(fib);
    });
  });
});
