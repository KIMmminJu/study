const TodoList = {
  data: {
    todos: [],
    filter: "all",
  },
  // 변수에 저장하고 재사용할 element 정보를 저장
  element: {
    todoInputElem: null,
    listElem: null,
    filtersElem: null,
    clearCompletedBtn: null,
    todosCountElem: null,
  },
  /**
   * 최초 동작에 해야 할 일
   */
  initData() {
    const savedTodos = localStorage.getItem("todos");
    const savedFilter = localStorage.getItem("filter");
    if (savedTodos) {
      this.data.todos = JSON.parse(savedTodos);
    }

    if (savedFilter) {
      this.data.filter = savedFilter;
    }
  },
  // element 정보 초기화
  initElem() {
    this.element.todoInputElem = document.querySelector(".new-todo");
    this.element.listElem = document.querySelector(".todo-list");
    this.element.filtersElem = document.querySelector(".filters");
    this.element.clearCompletedBtn = document.querySelector(".clear-completed");
    this.element.todosCountElem = document.querySelector(".todo-count");
  },

  /**
   * list element 참조 정보 저장
   */
  init() {
    // 초기화
    this.initData();
    // element 정보 초기화
    this.initElem();
    // 이벤트 바인딩
    this.bindEvent();
    // 초기 랜더링
    this.renderList();
    this.renderFilter();
  },
  /** 이벤트 묶기 */
  bindEvent() {
    // element에서 가져와서 이벤트를 걸어준다.
    this.element.todoInputElem.addEventListener(
      "keydown",
      this.addTodoHandler.bind(this)
    );

    this.element.listElem.addEventListener(
      "click",
      this.clickLiHandler.bind(this)
    );

    this.element.filtersElem.addEventListener(
      "click",
      this.filterTodoHandler.bind(this)
    );

    this.element.clearCompletedBtn.addEventListener(
      "click",
      this.completedTodoHandler.bind(this)
    );
  },
  // todo 아이템 추가
  addTodoHandler(event) {
    const todoInputElem = event.target;
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
      this.data.todos.push(newTodo);

      // localStorage에 저장
      this.savedTodosLocalStorage();

      this.renderList();
    }
  },
  /** li 이벤트 리스너 */
  clickLiHandler() {
    const targetElem = event.target;

    // li 엘리먼트 찾기 : closest() 메서드를 사용해서 li를 찾는다.
    const liElem = targetElem.closest("li[data-id]");

    // 변경될 데이터(todo)를 찾기위한 id 정보
    const id = parseInt(liElem.dataset.id);

    if (targetElem.classList.contains("destroy")) {
      this.destroyHandler(id);
    } else if (targetElem.classList.contains("toggle")) {
      this.completedHandler(id);
    }
  },
  /** todos 제거 */
  destroyHandler(id) {
    // 데이터 변경 : id를 사용하여 배열 todos 에서 삭제할 todo를 제거
    this.data.todos = this.data.todos.filter((todo) => todo.id !== id);
    // 로컬스토리지에 저장
    this.savedTodosLocalStorage();

    this.renderList();
  },
  /** completed 토글 */
  completedHandler(id) {
    // 데이터 가져오기 : id를 사용하여 todo 데이터 가져오기
    const todoItem = this.data.todos.find((todo) => todo.id === id);

    if (!todoItem) {
      return;
    }
    // 데이터 변경 : 가져온 todo 데이터에서 완료여부를 변경(반대 값으로) true -> false, false -> true
    todoItem.completed = !todoItem.completed;
    // 로컬스토리지에 저장
    this.savedTodosLocalStorage();

    this.renderList();
  },
  /** 각 버튼마다 필터링하기 */
  filterTodoHandler(event) {
    const targetElem = event.target;
    // 대상 찾기
    const href = targetElem.getAttribute("href");
    if (href === "#/") {
      this.data.filter = "all";
    } else if (href === "#/active") {
      this.data.filter = "active";
    } else if (href === "#/completed") {
      this.data.filter = "completed";
    }
    // 필터를 로컬스토리지에 저장
    this.savedFiltersLocalStorage();
    // 필터 영역 다시 그리기
    this.renderFilter();
    // 목록 영역 다시 그리기
    this.renderList();
  },
  /** completed된 todos를 전부 제거 */
  completedTodoHandler(event) {
    this.data.todos = this.data.todos.filter((item) => !item.completed);
    // 로컬스토리지에 저장
    this.savedTodosLocalStorage();

    this.renderList();
  },
  /** todos 로컬스토리지 저장 */
  savedTodosLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.data.todos));
  },
  /** filters 로컬스토리지 저장 */
  savedFiltersLocalStorage() {
    localStorage.setItem("filter", this.data.filter);
  },
  /** filter 기능 */
  filterList() {
    let filteredTodos = this.data.todos;
    const filter = this.data.filter;

    if (filter === "all") {
      return filteredTodos;
    } else if (filter === "active") {
      return filteredTodos.filter((item) => !item.completed);
    } else if (filter === "completed") {
      return filteredTodos.filter((item) => item.completed);
    }
  },
  /** UI 그려내기*/
  renderList() {
    this.initElem();
    let listHTML = "";

    // filterList() 함수에서 반환된 배열을 참조
    const filteredTodos = this.filterList();
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
    this.element.listElem.innerHTML = listHTML;
    this.element.todosCountElem.innerHTML = `<strong>${items}</strong> items left`;

    this.element.todoInputElem.value = "";
  },
  /** 필터링된 UI 그려내기 */
  renderFilter() {
    this.initElem();
    const filter = this.data.filter;
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

    this.element.filtersElem.innerHTML = filterHTML;
  },
};

/** HTML 문서 분석 */
window.addEventListener("DOMContentLoaded", function () {
  TodoList.init();
});
