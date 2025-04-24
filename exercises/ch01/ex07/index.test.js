import { Point } from "./index.js";

//./index.jsからaddモジュールをインポート

// TypeScript の場合は以下:

//test sum
describe("math", () => {
        //関連するテストをmathとしてまとめたメソッド
  describe("Point", () => {//Pointクラスのテストを記述
    it("Test making instance", () => {//インスタンス作成のテスト実施
	    let p = new Point(2,2);
    });
  });
  describe("Point", () => {//Pointクラスのテストを記述
    it("Test add method once", () => {//addメソッドのテスト実施
            let p = new Point(2,2);
	    p.add();
	    expect(p.a).toBe(2);
	    expect(p.b).toBe(2);
    });
  });
  describe("Point", () => {//Pointクラスのテストを記述
    it("Test add method twice", () => {//addメソッドのテスト実施
            let p = new Point(5,5);
            p.add();
	    p.add();
            expect(p.a).toBe(10);
            expect(p.b).toBe(10);
    });
  });
  describe("Point", () => {//Pointクラスのテストを記述
    it("Test add method negative value", () => {//addメソッドのテスト実施
            let p = new Point(-5,-5);
            p.add();
            p.add();
            expect(p.a).toBe(-10);
            expect(p.b).toBe(-10);
    });
  });
});

