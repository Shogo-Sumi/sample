/*youtube用、例文そのまま
async () => {
    // YouTube が利用者に推薦する動画タイトルを取得すれば、利用者に最適な商品セットを表示できるのではないか？
    const titles = document
      .getElementById("other")
      .contentWindowquerySelectorAll("#video-title");
    for (const t of titles) {
      await fetch("your-server-path", { method: "POST", body: t.textContent });
    }
  };
*/
//自分用、googlemapの埋め込み

console.log("start");

async () => {
    // YouTube が利用者に推薦する動画タイトルを取得すれば、利用者に最適な商品セットを表示できるのではないか？
    const titles = document
      .getElementById("map")//Document インターフェイスのメソッドで、 id プロパティが指定された文字列に一致する要素を表す Element オブジェクトを返します。
      // 要素の ID は指定されていれば固有であることが求められているため、特定の要素にすばやくアクセスするには便利な方法です。
      .contentWindowquerySelectorAll("ita-kd-inputtools-div ita-kd-statusbar");//querySelectorAll() メソッドは、指定された CSS セレクターに一致する文書中の要素のリストを示す静的な（生きていない）NodeList を返します
    for (const t of titles) {
        console.log(t);
      //await fetch("your-server-path", { method: "POST", body: t.textContent });
    }
  };

  console.log("stop");
  