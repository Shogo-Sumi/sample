import { MyArray, MyArrayLike } from "./index.js";

test("MyArray.map()", () => {
  const array = new MyArray([1, 2, 3, 4, 5]);//MyArrayはArrayを継承している。
  const result = array.map((x) => x * x);//各要素を二乗

  expect(result instanceof MyArrayLike).toBe(true);//継承の確認
  expect(result.length).toBe(5);//resultの長さを確認
  expect(Array.from(result)).toStrictEqual([1, 4, 9, 16, 25]);
});

test("MyArray.slice()", () => {
  const array = new MyArray(["A", "B", "C", "D"]);
  const result = array.slice(1, 3);

  expect(result instanceof MyArrayLike).toBe(true);
  expect(result.length).toBe(2);
  expect(Array.from(result)).toStrictEqual(["B", "C"]);
});
