import { withResource } from "./index.js";

describe("withResource", () => {
  it("should do process and call close finally", () => {
    const resource = {
      //テスト内で、オブジェクトを定義
      //calledプロパティは空の配列を持つ
      called: [],
      //doA()プロパティは、called配列へdoAをプッシュする
      doA() {
        this.called.push("doA");
      },
      //doB()プロパティは、called配列へdoBをプッシュする
      doB() {
        this.called.push("doB");
      },
      //close()プロパティは、called配列へcloseをプッシュする
      close() {
        this.called.push("close");
      },
    };

    //withリソース関数は第一引数に定数resource,第2引数に引数(res)を持つ関数を引き渡す。
    withResource(resource, (res) => {
      res.doA();
      res.doB();
    });

    expect(resource.called).toEqual(["doA", "doB", "close"]);
  });

  it("should call close when an error occurs", () => {
    const resource = {
      called: [],
      doA() {
        this.called.push("doA");
        throw new Error("something wrong");
      },
      close() {
        this.called.push("close");
      },
    };
    expect(() => withResource(resource, (res) => res.doA())).toThrow(Error);
    expect(resource.called).toEqual(["doA", "close"]);
  });
});
