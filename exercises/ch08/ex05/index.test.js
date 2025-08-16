import { sequenceToObject } from "./index.js";

let array1 = ["a",1,"b",2,"c",3,"d",4];
let array2 = ["a",1,"b",2,"c",3,"d"];
let array3 = [1,"a"];

//console.log(array1);
//console.log(array1.length % 2 !== 0);

test("exponentiation", () => {
  expect(sequenceToObject()).toStrictEqual("Number of pieces is nothing");
  expect(sequenceToObject("a")).toStrictEqual("Number of pieces is must be even number");
  expect(sequenceToObject(1,"a")).toStrictEqual("Odd number parameter must be string");
  expect(sequenceToObject("a",1,"b",2,"c",3)).toStrictEqual({"a": 1, "b": 2, "c": 3});
  expect(sequenceToObject(...array1)).toStrictEqual({"a": 1, "b": 2, "c": 3, "d": 4});
  expect(sequenceToObject(...array2)).toStrictEqual("Number of pieces is must be even number");
  expect(sequenceToObject(...array3)).toStrictEqual("Odd number parameter must be string");
});
