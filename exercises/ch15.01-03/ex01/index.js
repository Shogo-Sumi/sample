//現状そのままの場合、テキストの入力欄に文字列を入力し、addボタンを押すと、テキストの入力欄の文字列が消える。
//これを題意に即して、下記の実装をする
//1.addボタンを押された場合、□文字列×の形で入力フォームの下に並べること
//2.□はラジオボタンで、選択することで取り消し線が出ること。
//3.×ボタンを押すと入力された文字列が消えること


//document.querySelector:https://developer.mozilla.org/ja/docs/Web/API/Document/querySelector
//documentはブラウザが読み込んだHTMLドキュメント全体をさすオブジェクト。https://qiita.com/tgw-3a/items/79bf063b004e05072028
//指定されたセレクターまたはセレクター群に一致する、文書内の最初の Element を返します。一致するものが見つからない場合は null を返します。

const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");


//addEventListenerについて
//https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
//ターゲットに特定のイベントが配信されるたびに呼び出される。

//Web上のボタンが押下されるたびに呼び出される
form.addEventListener("submit", (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)

  e.preventDefault(); //忘れていたので追加。こちらの追加がない状態だと、addボタンをクリックした後にすぐに画面のロード？が入った。



  // 両端からホワイトスペースを取り除いた文字列を取得する
  if (input.value.trim() === "") {//ホワイトスペースを取り除いた文字列が空文字だった場合、そのまま返す
    return;
  }
  const todo = input.value.trim();//todoにinput.valueからホワイトスペースを取り除いた文字列を格納。
  // new-todo の中身は空にする
  input.value = "";//テキスト欄は空にする。

  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");//document.createElement() メソッドは tagName で指定された HTML 要素を生成し、または tagName が認識できない場合は HTMLUnknownElement を生成します。
  //つまり新しいliのhtml要素を作成する。liはリストを表す。

  const label = document.createElement("label");//新しいラベルを作成する。https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/label
  //<li><label>入力されたテキスト欄の文字列</label></li>

  label.textContent = todo;//ノードおよびその子孫のテキストの内容を表します。https://developer.mozilla.org/ja/docs/Web/API/Node/textContent
  //input.valueからホワイトスペースを取り除いた文字列を格納
  label.style.textDecorationLine = "none";//下線や上線を設定。https://developer.mozilla.org/ja/docs/Web/CSS/Reference/Properties/text-decoration-line
  //今回はnoneのため線はひかない

  const toggle = document.createElement("input");//toggleはオン、オフなどの切り替えを行うswitch
  toggle.type = "checkbox"; //トグルのタイプはチェックボックス
  //□文字列×の□部分
  // TODO: toggle が変化 (change) した際に label.style.textDecorationLine を変更しなさい 
  toggle.addEventListener("change", () => {//トグルの状態を監視し、変化があった場合に取り消し線を引くhttps://developer.mozilla.org/ja/docs/Web/API/DOMTokenList/toggle
    //クリック時に取り消し線を引くように変更:https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";//トグルがチェックされている状態の場合は、取り消し線を引く。その他は何もしない。
  });


  const destroy = document.createElement("button");
  destroy.textContent = "×";//見た目が×ボタンになっていなかったため追加
  destroy.style.color = "red"; //色が黒だったため赤に変更
  // TODO: destroy がクリック (click) された場合に elem を削除しなさい
  destroy.addEventListener("click",() =>{
    elem.remove();//todo-list に追加された要素を削除する。
  })



  // TODO: elem 内に toggle, label, destroy を追加しなさい
  //Element.prepend() メソッドは、一連の Node または文字列をこの Element の最初の子の前に挿入します。文字列は、同等の Text ノードとして挿入されます。
  //https://developer.mozilla.org/ja/docs/Web/API/Element/prepend

  const div = document.createElement("div");//<div>で囲った部分をブロックレベル要素としてグループ化することができるタグ。https://html-coding.co.jp/annex/dictionary/html/div/
  //https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Elements/div
  //<div>で囲った部分へtoggle,label,destoryを追加
  //□label×の形になるはず
  div.appendChild(toggle);//appendChiledは特定の親ノードの子ノードリストの末尾にノードを追加します。https://qiita.com/takuo_maeda/items/f531e7b5fe44c57242c3
  div.appendChild(label);
  div.appendChild(destroy);

  elem.appendChild(div);//divに追加された内容をリストに追加

  //要素は最初に追加されていく仕様
  list.prepend(elem);//Element.prepend() メソッドは、一連の Node または文字列をこの Element の最初の子の前に挿入します。
});
