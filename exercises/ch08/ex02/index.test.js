import { recu, loop } from "./index.js";

test("exponentiation", () => {
  expect(recu(2, 0)).toStrictEqual(1);
  expect(recu(3, 1)).toStrictEqual(3);
  expect(recu(2, 8)).toStrictEqual(256);
  expect(loop(4, 0)).toStrictEqual(1);
  expect(loop(5, 1)).toStrictEqual(5);
  expect(loop(6, 6)).toStrictEqual(46656);
});
