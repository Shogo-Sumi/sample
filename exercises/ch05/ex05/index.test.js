//test実施
import { f } from "./index.js";

const o = { x: 1, y: 2, z: 3 };
const p = { v: -2, w: -1, x: 0, y: 1, z: 2 };

//テスト実施
describe("math", () => {
  //関連するテストをmathとしてまとめたメソッド
  describe("f", () => {
    it("f", () => {
      expect(f(o)).toStrictEqual({ y: 2 });
    });
    it("f", () => {
      expect(f(p)).toStrictEqual({ v: -2, x: 0, z: 2 });
    });
  });
});
