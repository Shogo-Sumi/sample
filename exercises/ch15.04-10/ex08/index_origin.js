(function updateClock() {//SVG時計の画像を更新して現在時刻を表示する。

  const now = new Date();//現在時刻。

  // 秒、分、時を取得（針の滑らかな動きのために小数部を含む）
  const sec  = now.getSeconds();//秒。
  const min  = now.getMinutes() + sec / 60;//小数部を持つ分。
  const hour = (now.getHours() % 12) + min / 60;//小数部を持つ時。

  // 角度を計算（時計の中心を基準に）
  const minAngle  = min  * 6;//1分あたり6度。
  const hourAngle = hour * 30;//1時間あたり30度。

  // SVGの針要素を取得
  const minHand  = document.querySelector("#clock .minutehand");
  const hourHand = document.querySelector("#clock .hourhand");

  // 針を中心に回転させる（rotate(角度, 中心X, 中心Y)）
  minHand.setAttribute("transform", `rotate(${minAngle}, 50, 50)`);
  hourHand.setAttribute("transform", `rotate(${hourAngle}, 50, 50)`);

  // 10秒後に再度更新（約10秒ごとに針を動かす）
  setTimeout(updateClock, 10000);
})();  // 即時実行関数で最初に1回呼び出す