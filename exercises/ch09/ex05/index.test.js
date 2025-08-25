import { instanceOf } from "./index.js";

class test1 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class test2 extends test1{
    constructor(height,width,dimension) {
      super(height, width);
      this.dimension = dimension;
  }
}

class test3 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


const o = new test1;
const p = new test2;
const q = new test3;

describe("instanceof", () => {
  it("作成した関数がinstanceofの結果と一致すること", () => {
    expect(instanceOf(o,test1)).toBe(o instanceof test1);
    expect(instanceOf(p,test1)).toBe(p instanceof test1);
    expect(instanceOf(o,test3)).toBe(o instanceof test3);
  });
});
