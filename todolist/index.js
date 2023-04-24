const todoInputElem = document.querySelector(".new-todo");
const listElem = document.querySelector(".todo-list");
const filtersElem = document.querySelector(".filters");
const clearCompletedBtn = document.querySelector(".clear-completed");
const todosCountElem = document.querySelector(".todo-count");

// 이전에 저장된 목록 가져오기 . localStorage를 사용하여 새로 고침을 해도 목록이 그대로 남아있게
// localStorage - 브라우저를 새로고침해도 남아있음, 여러 탭이 공유할 수 있음
// cookie - ajax(xhr request) header에 포함되서 전달됨
// .getItem() 키(문자열)을 전달해서 해당하는 값이 있으면 값을 반환한다(문자열 데이터) 없다면 null 반환
const savedTodos = localStorage.getItem("todos");
const savedfilter = localStorage.getItem("filter");
let todos = [];
let filter = "all";

if (savedTodos) {
  // localStorage에 저장된 savedTodos가 존재하면
  // 문자열데이터를 객체형태로 파싱하기위해서 JSON.parse() 로 파싱
  todos = JSON.parse(savedTodos);
}

if (savedfilter) {
  filter = savedfilter;
}

todoInputElem.addEventListener("keydown", function (event) {
  if (
    event.key === "Enter" &&
    !event.isComposing &&
    todoInputElem.value !== ""
  ) {
    // 새로운 할 일 객체 생성
    const newTodo = {
      id: Date.now(), // 고유한 id 값으로 현재 시간 사용
      title: todoInputElem.value,
      completed: false,
    };

    // 할 일 목록에 추가
    todos.push(newTodo);

    // localStorage에 저장
    localStorage.setItem("todos", JSON.stringify(todos));

    // 화면 다시 그리기
    render();
  }
});

// clear-completed 이벤트
clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter((item) => !item.completed);

  // localStorage에 저장
  localStorage.setItem("todos", JSON.stringify(todos));

  // 화면 다시 그리기
  render();
});

// filter 이벤트 리스너 추가
// 데이터 갱신
filtersElem.addEventListener("click", function (event) {
  const targetElem = event.target;
  // 대상 찾기
  const href = targetElem.getAttribute("href");
  if (href === "#/") {
    filter = "all";
  } else if (href === "#/active") {
    filter = "active";
  } else if (href === "#/completed") {
    filter = "completed";
  }
  // 필터 영역 다시 그리기
  renderFilter();
  // 목록 영역 다시 그리기
  render();
});

// 이벤트가 발생하면(ex: click) --> 데이터를 변경하고(delete, toggle) --> 다시 그리기(render)
listElem.addEventListener(
  // click 이벤트
  "click",

  // click 이벤트가 발생되면 실행될 함수
  function (event) {
    // 이벤트를 발생시킨 대상 엘리먼트 (ex: 클릭 이벤트가 발생된 엘리먼트 - li, div, input, button, label)
    const targetElem = event.target;

    // li 엘리먼트 찾기 : closest() 메서드를 사용해서 li를 찾는다.
    const liElem = targetElem.closest("li[data-id]");

    // 변경될 데이터(todo)를 찾기위한 id 정보
    const id = liElem.dataset.id;

    // 삭제 버튼 클릭 시
    if (targetElem.classList.contains("destroy")) {
      // 데이터 변경 : id를 사용하여 배열 todos 에서 삭제할 todo를 제거
      todos = todos.filter((todo) => todo.id !== parseInt(id));

      // 로컬 스토리에 데이터 갱신 : 옵션x
      localStorage.setItem("todos", JSON.stringify(todos));

      // 화면 다시 그리기
      render();
    }

    // 체크박스가 토글 시
    else if (targetElem.classList.contains("toggle")) {
      // 데이터 가져오기 : id를 사용하여 todo 데이터 가져오기
      const todoItem = todos.find((todo) => todo.id === parseInt(id));

      // 데이터 변경 : 가져온 todo 데이터에서 완료여부를 변경(반대 값으로) true -> false, false -> true
      todoItem.completed = !todoItem.completed;

      // 로컬 스토리에 데이터 갱신 : 옵션
      localStorage.setItem("todos", JSON.stringify(todos));

      // 화면 다시 그리기
      render();
    }
  }
);

// 화면을 그리는 함수
function render() {
  let listHTML = "";
  let filteredTodos = [];

  // 필터 조건에 맞게 목록을 가공하고
  if (filter === "all") {
    filteredTodos = todos;
  } else if (filter === "active") {
    filteredTodos = todos.filter((item) => !item.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((item) => item.completed);
  }
  // 그 목록으로 화면을 그린다.
  filteredTodos.forEach((item, index) => {
    const completedClass = item.completed ? "completed" : "";
    listHTML += `
      <li data-id="${item.id}" class="${completedClass}">
        <div class="view">
          <input class="toggle" type="checkbox" ${
            item.completed ? "checked" : ""
          }>
          <label>${item.title}</label>
          <button class="destroy"></button>
        </div>
      </li>
    `;
  });

  const items = filteredTodos.length;
  listElem.innerHTML = listHTML;
  todosCountElem.innerHTML = `
    <strong>${items}</strong>
    items left
  `;
  todoInputElem.value = "";
}

const renderFilter = function () {
  const filterHTML = `
  <li>
    <a href="#/" class="${filter === "all" ? "selected" : ""}">All</a>
  </li>
  <li>
    <a href="#/active" class="${
      filter === "active" ? "selected" : ""
    }">Active</a>
  </li>
  <li>
    <a href="#/completed" class="${
      filter === "completed" ? "selected" : ""
    }">Completed</a>
  </li>
  `;

  filtersElem.innerHTML = filterHTML;
};

// 새로고침할때 이전에 저장된 목록 가져오기(window...)
// 새로고침이 일어나면 로컬스토리에 저장된 데이터를 기반으로 다시 그려야하니까...
// 랜더 함수를 호출한다.
// load이벤트에 안해도될것 같아요..
window.addEventListener("load", function () {
  render();
});
