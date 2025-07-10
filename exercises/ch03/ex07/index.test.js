import { equalArrays } from "./index.js";

test("ch03-ex07", () => {
  const x = [0]; // ここを変更
  const y = [-0]; // ここを変更
  //const x="abc",const y=[a,b,c];
	//他の例では、別のオブジェクトを定義する。

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});
