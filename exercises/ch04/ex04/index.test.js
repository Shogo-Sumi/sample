//test実施
import { bitCount } from "./index.js";

//index.jsからテスト関数をインポート

//テスト実施
describe("math", () => {
  //関連するテストをmathとしてまとめたメソッド
  describe("bitCount", () => {
    it("bitCount test", () => {
      expect(bitCount(0b111)).toBe(3);
    });
  });
  describe("bitCount", () => {
    it("bitCount test", () => {
      expect(bitCount(0b1111111111111111111111111111111)).toBe(31);
    });
  });
});
