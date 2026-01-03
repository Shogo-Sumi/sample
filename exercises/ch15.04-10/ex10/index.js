// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;
// 1セルのサイズ
const RESOLUTION = 10;

const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

canvas.width = ROWS * RESOLUTION;
canvas.height = COLS * RESOLUTION;

// https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame が返す ID
let animationId = null;

// NOTE: download from https://soundeffect-lab.info/sound/button/mp3/decision1.mp3
const sound = new Audio("./decision1.mp3");

// ライフゲームのセル (true or false) をランダムに初期化する
let grid = new Array(ROWS)
  .fill(null)
  .map(() =>
    new Array(COLS).fill(null).map(() => !!Math.floor(Math.random() * 2))
  );

// grid を canvas に描画する
function renderGrid(grid) {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = grid[row][col];
      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
}

// Life Game のルールに従ってセルを更新する
function updateGrid(grid) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {//盤面のセルを1つ1つ精査する
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する (実装してね)
      //ライフゲームのルール：https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0
      //誕生：死んでいるセルに隣接する生きたセルがちょうど3つならば誕生
      //生存：生きているセルに隣接する生きたセルが2つか3つならば生存
      //過疎：生きているセルに隣接する生きたセルが1つ以下ならば、過疎により死滅
      //過密：生きているセルに隣接する生きたセルが4つ以上ならば過密により死滅
      let neighbors = 0;//隣接するセルの値。隣接しているセルが生きている個数をカウントする
      // |(-1,1) |(0,1)   |(1,1)|
      // |(-1,0) |(0,0)   |(1,0)|
      // |(-1,-1)|(0,-1)  |(1,-1) |

      for (let i = -1; i <= 1; i++) {//縦の精査
        for (let j = -1; j <= 1; j++) {//横の精査
          if (i === 0 && j === 0) continue;//自分自身のセルの場合(0,0)の時は除外
          const r = row + i;//対象のセル+隣接するセル
          const c = col + j;//対象のセル+隣接するセル
          if (r >= 0 && r < ROWS && c >= 0 && c < COLS && grid[r][c]) {//隣接するが盤面にある場合の処理。gird[r][c]がtrueの場合処理する
            neighbors++;
          }
        }
      }
      //現在のセルが生存(true)の場合、次の世代は生存か死滅
      if (grid[row][col]) {//現在のセルが生存(true)の場合、周りに2つまたは3つの生存したセルがあれば生存
        nextGrid[row][col] = neighbors === 2 || neighbors === 3;
      } else {//現在のセルが死滅(false)の場合、周りに3つの生存しているセルがあれば誕生
        nextGrid[row][col] = neighbors === 3;
      }
    }
  }
  return nextGrid;
}

// canvas がクリックされたときの処理 (セルの値を反転する)
canvas.addEventListener("click", function (evt) {
  const rect = canvas.getBoundingClientRect();
  const pos = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };

  const row = Math.floor(pos.y / RESOLUTION);
  const col = Math.floor(pos.x / RESOLUTION);
  grid[row][col] = !grid[row][col];
  sound.cloneNode().play();
  renderGrid(grid);
});

// requestAnimationFrame によって一定間隔で更新・描画を行う
// TODO: リフレッシュレートの高い画面では速く実行されてしまうため、以下を参考に更新頻度が常に一定となるようにしなさい
// https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame

//requestAnimationFrame によって一定間隔で更新・描画を行う
//描画のタイミングを調整
let previousTime = 0;
const FPS = 10; //更新頻度（例: 10回/秒）
const interval = 1000 / FPS;//100msecごとに1回更新する。


function update(timestamp) {//現在時刻を引数とする
  if (previousTime === 0) {
    previousTime = timestamp;//previousTimeが初期値0のままならば、取得したタイムスタンプを代入
  }
  const delta = timestamp - previousTime;//現在の時刻と前回の時刻の差分を代入
  if (delta > interval) {//差分がインターバル以上の場合
    grid = updateGrid(grid);
    renderGrid(grid);
    previousTime = timestamp - (delta % interval);//現在の時刻から超過分の時刻を引き取得
  }
  animationId = requestAnimationFrame(update);
}

startButton.addEventListener("click", () => {
  // 既にアニメーションが動いている場合は何もしない
  if (animationId) {
    return;
  }
  previousTime = 0;//前回の時刻を初期化
  update(performance.now()); //初回呼び出し
});

pauseButton.addEventListener("click", () => {
  // アニメーションが停止している場合は何もしない
  if (!animationId) {
    return;
  }
  cancelAnimationFrame(animationId);
  animationId = null;
  previousTime = 0;//前回の時刻を初期化
});

renderGrid(grid);
