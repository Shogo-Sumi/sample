//test実施
import { makeFixedSizeArray,DynamicSizeArray } from "./index.js";

//index.jsからテスト関数をインポート

const arr1 = new DynamicSizeArray();
console.log(arr1.length());
console.log(arr2.length());
arr1.push(1);
arr1.push(2);
arr1.push(3);
arr1.push(4);
arr1.push(5);
console.log(arr1.length());



//テスト実施
describe("test", () => {
  //関連するテストをmathとしてまとめたメソッド
  describe("test1", () => {
    it("test1", () => {
      expect(arr1.length()).toStrictEqual(5);
    });
  });
});
