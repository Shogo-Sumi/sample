//実装する機能は下記の通り
//div 要素をクリックすると input 要素が focus される
//div 要素は通常白色で input 要素に focus されると灰色 (silver)になる (input 要素から focus が外れると白色に戻る)
//input 要素に入力された text は div 要素にも表示される
//参考：https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener

const frontDiv = document.getElementById('editor-front');//editor-frontに対しての処理
const backInput = document.getElementById('editor-back');//editor-backに対しての処理

//div要素をクリックしたときの処理を追加。
frontDiv.addEventListener('click', () => {
  backInput.focus();
});

//div要素はinput要素にfocusされると灰色になる
backInput.addEventListener('focus', () => {
  frontDiv.style.backgroundColor = 'silver';
});

//外れると白に戻る
backInput.addEventListener('blur', () => {
  frontDiv.style.backgroundColor = ''; // デフォルト（白）に戻す
});

//input 要素に入力された text は div 要素にも表示される
backInput.addEventListener('input', (e) => {
  frontDiv.textContent = e.target.value;
});

// ページ読み込み時にも現在の入力値を反映しておく（初期状態の同期）
frontDiv.textContent = backInput.value;