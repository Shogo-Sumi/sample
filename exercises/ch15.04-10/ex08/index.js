//秒針の描画、1秒で動く角度の定義を実装する必要がある

(function updateClock() {//SVG時計の画像を更新して現在時刻を表示する。

  const now = new Date();//現在時刻。

  // 秒、分、時を取得（針の滑らかな動きのために小数部を含む）
  const sec  = now.getSeconds();//秒。
  const min  = now.getMinutes() + sec / 60;//小数部を持つ分。
  const hour = (now.getHours() % 12) + min / 60;//小数部を持つ時。

  // 角度を計算（時計の中心を基準に）
  const minAngle  = min  * 6;//1分あたり6度。
  const hourAngle = hour * 30;//1時間あたり30度。

  //秒針の角度は1秒ごとに6度動く
  const secAngle = sec * 6;//1秒当たり6度

  // SVGの針要素を取得
  //const minHand  = document.querySelector("#clock .minutehand");
  //const hourHand = document.querySelector("#clock .hourhand");

  const clock      = document.querySelector("#clock");
  const handsGroup = clock.querySelector(".hands");
  const hourHand   = handsGroup.querySelector(".hourhand");
  const minHand    = handsGroup.querySelector(".minutehand");

  let secHand = handsGroup.querySelector(".secondhand");

  //secHandは秒針。存在しない場合実行
  //htmlに存在しない秒針を描画する。
  if(!secHand){
    //htmlとは異なる名前空間
    secHand = document.createElementNS("http://www.w3.org/2000/svg", "line");
    secHand.classList.add("secondhand");
    // 秒針のスタイル：細くて長く、赤色で目立つように
    //線の視点、中心を設定
    secHand.setAttribute("x1", "50");
    secHand.setAttribute("y1", "50");
    //線の終点ｙ＝１２までの線分
    secHand.setAttribute("x2", "50");
    secHand.setAttribute("y2", "12");
    //線の色
    secHand.setAttribute("stroke", "blue");
    //線の太さ
    secHand.setAttribute("stroke-width", "1");
    handsGroup.appendChild(secHand);
  }

  // 針を中心に回転させる（rotate(角度, 中心X, 中心Y)）
  minHand.setAttribute("transform", `rotate(${minAngle}, 50, 50)`);
  hourHand.setAttribute("transform", `rotate(${hourAngle}, 50, 50)`);
  secHand.setAttribute("transform", `rotate(${secAngle}, 50, 50)`);

  // 10秒後に再度更新（約10秒ごとに針を動かす）
  //setTimeout(updateClock, 10000);
  requestAnimationFrame(updateClock);
})();  // 即時実行関数で最初に1回呼び出す

requestAnimationFrame(updateClock);