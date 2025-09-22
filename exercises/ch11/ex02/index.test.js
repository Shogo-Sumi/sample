import { cache,slowFn} from "./index.js";

const cachedSlowFn = cache(slowFn);

//テスト
const obj1 = { id: 1 };
const obj2 = { id: 2 };

describe("Test cache", () => {
  it("set関数が正しく動作すること", () => {
    expect(cachedSlowFn(obj1)).toStrictEqual(10001);
    expect(cachedSlowFn(obj1)).toStrictEqual(10001);
    expect(cachedSlowFn(obj2)).toStrictEqual(10002);
    expect(cachedSlowFn(obj2)).toStrictEqual(10002);
  });
});
