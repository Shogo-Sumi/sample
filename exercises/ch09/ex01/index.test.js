import { C } from "./index.js"; // ts でも可

test("class puzzle", () => {
  expect(C.method()).toBe(1);//class Cの静的メソッド
  expect(new C().method()).toBe(2);//インスタンスCのメソッド
  expect(C.C.method()).toBe(3);//プロパティC.Cの静的メソッド
  expect(new C.C().method()).toBe(4);//プロパティCの値クラスCから作成されたインスタンスのメソッド
  expect(new C().C.method()).toBe(5);//クラスCのインスタンスの持つプロパティCの値のクラスの持つ静的メソッド
  expect(new new C().C().method()).toBe(6);//クラスCのインスタンスが持つプロパティCの値値からインスタンス化されたプロパティが持つメソッド。
});

