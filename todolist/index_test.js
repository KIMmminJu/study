const TodoList = {
    data: {
        todos: [],
        filter: 'all'
    },
    /**
     * 최초 동작에 해야 할 일 
     */
    init() {
        // 데이터 초기화
        const savedTodos = localStorage.getItem("todos");
        const savedFilter = localStorage.getItem("filter");
        if (savedTodos) {
            this.data.todos = JSON.parse(savedTodos);
        }

        if (savedFilter) {
            this.data.filter = savedFilter;
        }
        // 이벤트 바인딩
        this.bindEvent();
        let thiz = this;
        window.addEventListener("load", function() {
            thiz.renderList();
        });
    },
    bindEvent() {
        const todoInputElem = document.querySelector(".new-todo");
        let thiz = this;
        todoInputElem.addEventListener('keydown', this.addTodoHandler.bind(this));

        const listElem = document.querySelector(".todo-list");
        listElem.addEventListener("click", this.liTodoHandler.bind(this));

        const filtersElem = document.querySelector('.filters');
        filtersElem.addEventListener("click", this.filterTodoHandler.bind(this));

        const clearCompletedBtn = document.querySelector('.clear-completed');
        clearCompletedBtn.addEventListener('click',this.completedTodoHandler.bind(this));
    },
    // todo 아이템 추가
    addTodoHandler(event) {
        const todoInputElem = event.target;
        if (event.key === 'Enter' && !event.isComposing && todoInputElem.value !== '') {

            // 새로운 할 일 객체 생성
            const newTodo = {
                id: Date.now(), // 고유한 id 값으로 현재 시간 사용
                title: todoInputElem.value,
                completed: false
            };

            // 할 일 목록에 추가
            this.data.todos.push(newTodo);

            // localStorage에 저장
            localStorage.setItem('todos', JSON.stringify(this.data.todos));

            this.renderList();
        }
    },
    liTodoHandler(event){
        const targetElem = event.target;
          
        // li 엘리먼트 찾기 : closest() 메서드를 사용해서 li를 찾는다.
        const liElem = targetElem.closest('li[data-id]');
    
        // 변경될 데이터(todo)를 찾기위한 id 정보
        const id = liElem.dataset.id;
    
        // 삭제 버튼 클릭 시
        if (targetElem.classList.contains("destroy")) {
          // 데이터 변경 : id를 사용하여 배열 todos 에서 삭제할 todo를 제거
          this.data.todos = this.data.todos.filter(todo => todo.id !== parseInt(id));

          localStorage.setItem("todos", JSON.stringify(this.data.todos));

          this.renderList();
        } 
    
        // 체크박스가 토글 시
        else if (targetElem.classList.contains("toggle")) {
          // 데이터 가져오기 : id를 사용하여 todo 데이터 가져오기
          const todoItem = this.data.todos.find(todo => todo.id === parseInt(id));
    
          // 데이터 변경 : 가져온 todo 데이터에서 완료여부를 변경(반대 값으로) true -> false, false -> true
          todoItem.completed = !todoItem.completed;
    
          localStorage.setItem("todos", JSON.stringify(this.data.todos));
    
          this.renderList(); 
        }
    },
    filterTodoHandler(event){
        const targetElem = event.target;
        // 대상 찾기
        const href = targetElem.getAttribute("href");
        if(href === "#/"){
          this.data.filter = 'all';
        } else if(href === "#/active"){
          this.data.filter = 'active';
        } else if(href === "#/completed"){
          this.data.filter = 'completed';
        }
        // 필터 영역 다시 그리기
        this.renderFilter();
        // 목록 영역 다시 그리기
        this.renderList();
    },
    completedTodoHandler(event){
        this.data.todos = this.data.todos.filter(item => !item.completed);
        
        localStorage.setItem('todos', JSON.stringify(this.data.todos));
        this.renderList();
    },
    renderList() {
        const todoInputElem = document.querySelector(".new-todo");
        const listElem = document.querySelector(".todo-list");
        const todosCountElem = document.querySelector('.todo-count');
        let listHTML = "";
        let filteredTodos = [];
      
        // 필터 조건에 맞게 목록을 가공하고
        if (this.data.filter === 'all') {
          filteredTodos = this.data.todos;
        } else if (this.data.filter === 'active') {
          filteredTodos = this.data.todos.filter(item => !item.completed);
        } else if (this.data.filter === 'completed') {
          filteredTodos = this.data.todos.filter(item => item.completed);
        }
        // 그 목록으로 화면을 그린다.
        filteredTodos.forEach((item, index) => {
          const completedClass = item.completed ? "completed" : "";
          listHTML += `
            <li data-id="${item.id}" class="${completedClass}">
              <div class="view">
                <input class="toggle" type="checkbox" ${item.completed ? "checked" : ""}>
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
        `

        todoInputElem.value = "";
    },
    renderFilter() {
        const filtersElem = document.querySelector('.filters');
        const filterHTML = `
        <li>
          <a href="#/" class="${this.data.filter === 'all' ? 'selected' : ''}">All</a>
        </li>
        <li>
          <a href="#/active" class="${this.data.filter === 'active' ? 'selected' : ''}">Active</a>
        </li>
        <li>
          <a href="#/completed" class="${this.data.filter === 'completed' ? 'selected' : ''}">Completed</a>
        </li>
        `;
      
        filtersElem.innerHTML = filterHTML;
    }
}

TodoList.init();