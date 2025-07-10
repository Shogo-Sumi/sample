//test実施
import { add, sub, mul, div } from "./index.js";

//index.jsからテスト関数をインポート

const a1 = { real: 1, imag: 2 }; // 1 + 2i
const a2 = { real: 3, imag: 4 }; // 3 + 4i

const a3 = { real: -1, imag: -2 }; // 5 + (-2i)
const a4 = { real: 1, imag: 0 }; // 0 + i

//テスト実施
describe("math", () => {
  //関連するテストをmathとしてまとめたメソッド
  describe("add", () => {
    it("add test", () => {
      expect(add(a1, a2)).toStrictEqual({ real: 4, imag: 6 });
    });
  });
  describe("sub", () => {
    it("sub test", () => {
      expect(sub(a1, a2)).toStrictEqual({ real: -2, imag: -2 });
    });
  });
  describe("mul", () => {
    it("add test", () => {
      expect(mul(a1, a2)).toStrictEqual({ real: -5, imag: 10 });
    });
  });
  describe("div", () => {
    it("add test", () => {
      expect(div(a1, a2)).toStrictEqual({ real: 0.44, imag: 0.08 });
    });
  });
  describe("add2", () => {
    it("add test", () => {
      expect(add(a3, a4)).toStrictEqual({ real: 0, imag: -2 });
    });
  });
  describe("sub2", () => {
    it("add test", () => {
      expect(sub(a3, a4)).toStrictEqual({ real: -2, imag: -2 });
    });
  });
  describe("mul2", () => {
    it("mul test", () => {
      expect(mul(a3, a4)).toStrictEqual({ real: -1, imag: -2 });
    });
  });
  describe("div2", () => {
    it("div test", () => {
      expect(div(a3, a4)).toStrictEqual({ real: -1, imag: -2 });
    });
  });
});
