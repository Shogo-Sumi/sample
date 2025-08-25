import { TypedMap,TypedMap2 } from "./index.js";

const a = [["a", 1], ["b", 2]];
const b = [[1, "a"], [2, "b"]];
const p = new TypedMap('string', 'number', a);
const q = new TypedMap('number', 'string', b);
//const r = new TypedMap('number', 'string', a);
const s = new TypedMap2('string', 'number', a);
const t = new TypedMap2('number', 'string', b);
//const u = new TypedMap2('number', 'string', a);

//answer
const string1 = "{keyType: 'string',valueType: 'number',map: Map(2) { 'a' => 1, 'b' => 2 }"

describe("instanceof", () => {
  it("作成した関数がinstanceofの結果と一致すること", () => {
    expect(console.log(p)).toStrictEqual(console.log(s));
    expect(console.log(q)).toStrictEqual(console.log(t));
    //expect(console.log(r)).toStrictEqual(console.log(u));
  });
});
