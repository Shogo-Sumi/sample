const template = document.createElement("template");

template.innerHTML = `
<style>
  :host {
    display: block;
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  #new-todo-form {
    display: flex;
    margin-bottom: 20px;
  }

  #new-todo {
    flex: 1;
    padding: 10px;
    font-size: 1.2em;
  }

  button {
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
  }

  #todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
    font-size: 1.2em;
  }

  li input[type="checkbox"] {
    margin-right: 10px;
    transform: scale(1.5);
  }

  li span {
    flex: 1;
  }

  li button {
    padding: 5px 10px;
    font-size: 0.9em;
    margin-left: 10px;
    background: #ff4444;
    color: white;
    border: none;
    cursor: pointer;
  }

  .completed span {
    text-decoration: line-through;
    opacity: 0.6;
  }
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" autofocus />
  <button type="submit">Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    //Shadow Domの作成
    //javascriptからのアクセス可能な状態でShadow Domを定義
    this.attachShadow({ mode: "open" });
    //innerHTMLのクローンを作成し、コピーをShadowDomへ追加
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // DOM 要素取得
    this.form = this.shadowRoot.querySelector("#new-todo-form");
    this.input = this.shadowRoot.querySelector("#new-todo");
    this.list = this.shadowRoot.querySelector("#todo-list");

    // 状態管理
    this.todos = []; // { id, text, completed }

    // イベントリスナー登録
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  // 新規追加
  handleSubmit(e) {//addボタンが押された時の再描画を禁止。前回の課題と同じ考え方。
    e.preventDefault();
    const text = this.input.value.trim();//入力欄にインプットされた文字列を取得(スペースは削除)
    if (text === "") return;//空の場合何もしない

    const newTodo = {
      id: Date.now(),//オブジェクトのidは実行時刻
      text: text,//入力内容
      completed: false,//未完了の状態から開始
    };

    this.todos.push(newTodo);//todoを配列todosへプッシュ
    this.input.value = "";//入力欄をクリア
    this.render();//リストを再描画
    this.input.focus();//入力欄にフォーカスを戻す
  }

  // 完了トグル
  toggleComplete(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo//三項演算子を用いた反転。idが一致するtodoがみつかった場合、完了状態を反転。
    );
    this.render();//再描画
  }

  // 削除
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);//idが異なるものを残す=idが一致するものは削除する。
    this.render();//再描画
  }

  // 再描画
  render() {
    this.list.innerHTML = "";//古い表示をすべて削除

    this.todos.forEach(todo => {
      const li = document.createElement("li");
      //再描画時に取り消し線が必要なら描画
      if (todo.completed) li.classList.add("completed");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => this.toggleComplete(todo.id));

      const span = document.createElement("span");
      span.textContent = todo.text;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "×";
      deleteBtn.addEventListener("click", () => this.deleteTodo(todo.id));

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);

      this.list.appendChild(li);
    });
  }

  // コンポーネントがDOMに追加されたとき
  connectedCallback() {
    this.render();
  }
}

customElements.define("todo-app", TodoApp);