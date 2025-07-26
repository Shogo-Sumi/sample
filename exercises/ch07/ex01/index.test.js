//test実施
import { add, multi } from "./index.js";

//index.jsからテスト関数をインポート

    const matrix0 = null;

    const matrix1 = [
        [1, 2],
        [3, 4]
    ];

    const matrix2 = [
        [5, 6],
        [7, 8]
    ];

    const matrix3 = [
        [5, 6],
        [7, 8],
	[9,10]
    ];


//テスト実施
describe("test", () => {
  //関連するテストをmathとしてまとめたメソッド
  describe("add", () => {
    it("add test", () => {
      expect(add(matrix0,matrix1)).toStrictEqual("行列が定義されていません");
    });
  });
  describe("add", () => {
    it("add test", () => {
      expect(add(matrix1, matrix2)).toStrictEqual([ [ 6, 8 ], [ 10, 12 ] ]
);
    });
  });
  describe("add", () => {
    it("add test", () => {
      expect(add(matrix1, matrix3)).toStrictEqual("行と列の数が一致しません。");
    });
  });
  describe("multi", () => {
    it("multi test", () => {
      expect(multi(matrix0, matrix1)).toStrictEqual("行列が定義されていません");
    });
  });
  describe("multi", () => {
    it("multi test", () => {
      expect(multi(matrix1, matrix2)).toStrictEqual([ [ 19, 22 ], [ 43, 50 ] ]);
    });
  });
  describe("multi", () => {
    it("multi test", () => {
      expect(multi(matrix1, matrix3)).toStrictEqual("行と列の数が一致しません。");
    });
  });
});
