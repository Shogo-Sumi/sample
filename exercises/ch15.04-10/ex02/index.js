const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const template = document.querySelector("#todo-template");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  input.value = "";

  const clone = template.content.cloneNode(true);
  const li = clone.querySelector("li");
  const toggle = clone.querySelector("input");
  const label = clone.querySelector("label");
  const destroy = clone.querySelector("button");

  toggle.addEventListener("change", () => {
    // Tailwind クラスで完了状態を表現（opacity と line-through）
    li.classList.toggle("opacity-50", toggle.checked);
    label.classList.toggle("line-through text-gray-500", toggle.checked);
  });
  label.textContent = todo;
  destroy.addEventListener("click", () => {
    li.remove();
  });

  list.prepend(li);
});