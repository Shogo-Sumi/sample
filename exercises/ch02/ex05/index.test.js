import { promisify } from "util";//非同期処理の完了、失敗の結果を返す
import { exec } from "child_process";//文字列を引数にとり、指定された文字列に対して正規表現による検索を実行

describe("charfreq", () => {
  it("変更前と結果が同じであること", async () => {
    const stdout = await promisify(exec)(
      "node ch02/ex05/index.js < ch02/ex05/charfreq.js",
    );
    const expectedStdout = await promisify(exec)(
      "node ch02/ex05/charfreq.js < ch02/ex05/charfreq.js",
    );
    expect(stdout.toString()).toBe(expectedStdout.toString());
  });
});
