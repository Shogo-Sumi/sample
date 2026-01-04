const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const template = document.querySelector("#todo-template");

// { content: "...", completed: true or false } の配列
const todos = [];

function renderTodos(todos) {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector("li");
    const toggle = clone.querySelector("input");
    const label = clone.querySelector("label");
    const destroy = clone.querySelector("button");

    li.classList.toggle("completed", todo.completed);
    toggle.addEventListener("change", () => {
      todo.completed = toggle.checked;
      renderTodos(todos);
    });
    label.textContent = todo.content;
    toggle.checked = todo.completed;
    destroy.addEventListener("click", () => {
      todos.splice(index, 1);
      deleteTodo(todo.content);
      renderTodos(todos);
    });

    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  input.value = "";

  todos.push({ content: todo, completed: false });
  window.location.hash = "#/";//addが押されたらALLビューへ戻す。
  //javascriptでURLのハッシュ部分を取得する。https://osgsm.io/note/js-location-hash/
  renderTodos(todos);
});

window.addEventListener("hashchange", () => {
  // ここを実装してね
  const hash = window.location.hash || "#/";//URLのハッシュ部分が変更したと筋処理

  let filteredTodos = todos;//todosの値を代入

  if (hash === "#/active") {//hashの値がactiveの場合
    filteredTodos = todos.filter(todo => !todo.completed);//todo.completedがfalseの者だけ残す
  } else if (hash === "#/completed") {//hashの値がcompletedの場合
    filteredTodos = todos.filter(todo => todo.completed);//todo.completedがtrueの者だけ残す
  }
  // hash === "#/" またはその他の場合は全て表示（filteredTodos = todos のまま）

  renderTodos(filteredTodos);//再描画を実施
});

function deleteTodo(content) {
  todos = todos.filter((t) => t.content !== content);
}
