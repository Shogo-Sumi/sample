//test実施
import { quickSort, partition } from "./index.js";

//index.jsからテスト関数をインポート

const array = [64, 34, 25, 12, 22, 11, 90];
const array2 = [34, 90, 22, 12, 11, 64, 25];
const array3 = [50, 100, -1, -100, -50, 1, 0];

//テスト実施
describe("test", () => {
  //関連するテストをmathとしてまとめたメソッド
  describe("test1", () => {
    it("test1", () => {
      expect(quickSort(array)).toStrictEqual([11, 12, 22, 25, 34, 64, 90]);
    });
  });
  describe("test2", () => {
    it("test2", () => {
      expect(quickSort(array2)).toStrictEqual([11, 12, 22, 25, 34, 64, 90]);
    });
  });
  describe("test3", () => {
    it("test3", () => {
      expect(quickSort(array3)).toStrictEqual([-100, -50, -1, 0, 1, 50, 100]);
    });
  });
});
