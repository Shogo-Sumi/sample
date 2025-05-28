import { equals } from "./index2.js";

describe("math", () => {
        //関連するテストをmathとしてまとめたメソッド
  describe("equals", () => {//equal関数のテストを実行するメソッド
    it("returns same value when positive value given", () => {//2つの値が同じかテストを行う。
      expect(equals(42,42)).toBe(true);//テスト結果の確認。
      expect(equals(null,null)).toBe(true);
      expect(equals({x: 42}, 42)).toBe(false);
      expect(equals(null, {x: 42})).toBe(false);
      expect(equals({x: 1}, {y: 1})).toBe(false);
      expect(equals({x: 1}, {x: 1, y: 1})).toBe(false);
      expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}})).toBe(true);
      expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}})).toBe(false);
    });
  });
});
