import { printn, squared, time } from "./index.js";

test("Arrow", () => {
  expect(printn("test", 3)).toStrictEqual(["test", "test", "test"]);
  expect(squared(4)).toBe(16);
  expect(time().now).toBe(Date.now());
});
