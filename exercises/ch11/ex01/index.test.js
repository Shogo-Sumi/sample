import { TypeMap } from "./index.js";

class Foo {}

const typeMap = new TypeMap();
typeMap.set(String, "string");
typeMap.set(Number, 123);
typeMap.set(Boolean, true);
typeMap.set(Foo, new Foo());
//typeMap.set(Date, "not a date"); // -> Error

console.log(typeMap.get(String));


describe("Test TypeMap", () => {
  it("set関数が正しく動作すること", () => {
    expect(typeMap.get(String)).toStrictEqual("string");
    expect(typeMap.get(Number)).toStrictEqual(123);
    expect(typeMap.get(Boolean)).toStrictEqual(true);
    //expect(typeMap.get(Foo)).toStrictEqual({});
    //expect(typeMap.set(Date, "not a date")).toStrictEqual(`Value must be an instance of ${key.name}, got ${typeof value}: ${value}`);
  });
});