import { IgnoreAccentPattern } from "./index.js";

describe("IgnoreAccentPattern", () => {
  describe("search", () => {
    test("found test", () => {
      expect("Coffee Café".search(new IgnoreAccentPattern("Cafe"))).toBe(7);
      expect("Coffee Café".search(new IgnoreAccentPattern("Café"))).toBe(7);
      expect("Coffee Café".search(new IgnoreAccentPattern(/Cafe/))).toBe(7);//正規表現
      expect("Coffee Café".search(new IgnoreAccentPattern(/Café/))).toBe(7);//正規表現
    });
    test("not found test", () => {
      expect("Coffee Café".search(new IgnoreAccentPattern("café"))).toBe(-1);
    });
  });
  describe("match", () => {
    test("found test", () => {
      expect(
        "Coffee Café".match(new IgnoreAccentPattern("Cafe")),
      ).toStrictEqual("Coffee Cafe".match("Cafe"));
      expect(
        "Coffee Café".match(new IgnoreAccentPattern(/Cafe/g)),//正規表現 gは正規表現のフラグ、一致する文字列が複数ある場合にすべてを対象とする。
      ).toStrictEqual(["Cafe"]);
      expect(
        "Coffee Café".match(new IgnoreAccentPattern(/Café/g)),//正規表現
      ).toStrictEqual(["Cafe"]);
      expect(
        "Coffee Café".match(new IgnoreAccentPattern(/[a-e]/g)),//正規表現
      ).toStrictEqual(["e", "e", "a", "e"]);
      expect("Coffee Café".match(new IgnoreAccentPattern(/é/g))).toStrictEqual([//正規表現
        "e",
        "e",
        "e",
      ]);
    });
    test("not found test", () => {
      expect("Coffee Café".match(new IgnoreAccentPattern("café"))).toBeNull();
    });
  });
});
