
//URLクラスについて
//https://developer.mozilla.org/ja/docs/Web/API/URL

//modifyUrl関数は、base,addQuery,pathを引数に持つ。
export function modifyUrl({ base, addQuery = [], path = "" }) {
  //URLの形式となっているか判定。形式があっていない場合はエラーを返す。
  //https://developer.mozilla.org/ja/docs/Web/API/URL/URL
  let url;
  try {
    url = new URL(base);
  } catch (e) {
    throw new Error("Invalid URL format");
  }


  //パスを追加する
  if (path) {
    //./のような相対パスを解決する。
    const resolvedPath = new URL(path, base).pathname;
    url.pathname = resolvedPath;
  }

  //クエリパラメータの追加
  //クエリパラメーターは配列の形で引き渡される。
  addQuery.forEach(([key, value]) => {
    //URLSearchParams: append() メソッド [key,value]...key=value
    //https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams/append
    url.searchParams.set(key, value);
  });

  //結果を返す
  return url.toString();
}