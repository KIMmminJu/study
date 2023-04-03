// 사용자가 todo를 적고, 그 데이터를 받아서 목록으로 등록.

const todoInputElem = document.querySelector('.new-todo');
const listElem = document.querySelector(".todo-list");

todoInputElem.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.isComposing) {
        const value = todoInputElem.value;
        event.value = "";
        todos.push(value);

        render();
    }
  });

const todos = [];

const render = function() {
    let listHTML = "";
    todos.forEach((item) => {
        listHTML += `<li>${item}</li>`;
    });
    listElem.innerHTML = listHTML;
    todoInputElem.value = ""; 
}