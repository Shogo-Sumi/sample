//ガウシアンフィルタについて
//https://www.mitani-visual.jp/mivlog/imageprocessing/gf3r89.php

document.getElementById("image").addEventListener("change", (event) => {
  //アップロードするファイルが存在しない場合何もしない
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");


    //幅と高さを定義
    const width = img.width;//画像の幅
    const height = img.height;//画像の高さ

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const inputData = imageData.data;

    // グレースケールへの変換 (RGB を足して平均を取っている)
    //
    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    // imageData の中身はそのままに別の配列に結果を格納するとよい
    // ```js
    // const outputData = new Uint8ClampedArray(imageData.data.length);
    //
    // // TODO: ここで imageData.data を参照して outputData に結果を格納
    //
    // const outputImageData = new ImageData(outputData, img.width, img.height);
    // filteredCtx.putImageData(outputImageData, 0, 0);
    // ```


      const outputData = new Uint8ClampedArray(inputData.length);

    //5*5のガウス金治
    //それぞれX/256の重みづけを行う
    const kernel = [
      1, 4, 6, 4, 1,
      4, 16, 24, 16, 4,
      6, 24, 36, 24, 6,
      4, 16, 24, 16, 4,
      1, 4, 6, 4, 1
    ];
    const kernelWeight = 256; //カーネルの合計値は255
    const kSize = 5;//カーネルのサイズは5
    const kHalf = Math.floor(kSize / 2);//与えられた数値以下の最大の整数を取得。初期値は元画像の左上2px

    //各ピクセルに対して畳み込み
    for (let y = 0; y < height; y++) {//y軸の走査。x軸(横)への走査後に1px下にずらす
      for (let x = 0; x < width; x++) {//x軸の走査。横方向にカーネルを移動する。
        let r = 0, g = 0, b = 0;//ピクセルの新規の赤、緑、青の値を格納する

        //カーネル分の周辺ピクセルを走査
        //ky,kx はカーネル内の相対位置
        for (let ky = 0; ky < kSize; ky++) {//カーネル内の縦方向を上から下へ走査
          for (let kx = 0; kx < kSize; kx++) {//カーネルの横方向を左から右へ走査
            //現在のピクセルx,yを中心として、カーネルの位置ky,kxに対応する実際の座標を計算
            const py = y + ky - kHalf;
            const px = x + kx - kHalf;

            //画像範囲外の座標の場合範囲内の一番近いピクセルを使用する
            const sx = px < 0 ? 0 : px >= width ? width - 1 : px;
            const sy = py < 0 ? 0 : py >= height ? height - 1 : py;

            //ピクセルデータはR,G,B,A Aは透明度
            const idx = (sy * width + sx) * 4;//画像データを1次元配列での位置へ変換
            const weight = kernel[ky * kSize + kx];//カーネルに対応する重みを取得。kernelは1次元配列。

            //rgbに重みを掛け合わせる。計25回繰り返す。
            r += inputData[idx] * weight;
            g += inputData[idx + 1] * weight;
            b += inputData[idx + 2] * weight;
          }
        }

        //重みを掛け合わせた値を出力
        const outIdx = (y * width + x) * 4;//出力画像の現在のピクセル位置を1次元配列でのインデックスへ変換
        outputData[outIdx] = Math.round(r / kernelWeight);//rの値を計算
        outputData[outIdx + 1] = Math.round(g / kernelWeight);//gの値を計算
        outputData[outIdx + 2] = Math.round(b / kernelWeight);//bの値を計算
        outputData[outIdx + 3] = inputData[outIdx + 3];
      }
    }

    // 出力画像データをキャンバスに描画
    const outputImageData = new ImageData(outputData, width, height);
    filteredCtx.putImageData(outputImageData, 0, 0);

    /*
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg;
      data[i + 1] = avg;
      data[i + 2] = avg;
    }

    filteredCtx.putImageData(imageData, 0, 0);
    */
  });

  reader.readAsDataURL(file);
});
