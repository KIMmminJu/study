const todoInputElem = document.querySelector('.new-todo');
const listElem = document.querySelector(".todo-list");

// 이전에 저장된 목록 가져오기 . localStorage를 사용하여 새로 고침을 해도 목록이 그대로 남아있게
const savedTodos = localStorage.getItem("todos");
const todos = savedTodos ? JSON.parse(savedTodos) : [];

todoInputElem.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.isComposing) {
        const value = todoInputElem.value;
        event.value = "";

        // input 값을 타이틀로, 
        // false로 초기화하는 이유는 새로운 할 일(todo)을 완료하지 않은 상태로 추가(등록)한다는 의미이고, 나중에 완료되었을 때 true로 완료된 할 일을 표시할 수 있음 
        todos.push({ title: value, completed: false });

        // 로컬 스토리지에 저장
        localStorage.setItem("todos", JSON.stringify(todos));

        render();
    }
});

// 클릭 이벤트(delete)
listElem.addEventListener("click", function(event) {
    const targetElem = event.target;
    // event.target은 이벤트가 발생한 요소를 가리키며, 이 요소가 '삭제' 버튼인 경우에만 해당 함수가 실행된다.
    if (targetElem.classList.contains("destroy")) {
        const parentElem = targetElem.parentElement;
        // data-index 속성 . 이 속성은 할 일 항목이 todos 배열에서 몇 번째 요소인지를 나타낸다.
        // parseInt() 함수는 두 개의 인수를 받는다. 첫 번째 인수는 분석할 문자열, 두 번째 인수는 진수
        // 문서객체선택.dataset.속성명;
        const index = parseInt(parentElem.dataset.index, 10);
        // * todos 배열에서 index 위치에 있는 요소를 1개 제거한다.
        todos.splice(index, 1);

        // 로컬 스토리지에서 삭제
        localStorage.setItem("todos", JSON.stringify(todos));

        render();
    }
});

const render = function() {
    // 빈문자열로 초기화
    let listHTML = "";
    todos.forEach((item, index) => {
        listHTML += `
            <li data-index="${index}">
                <div class="view">
                    <label>${item.title}</label>
                    <button class="destroy"></button>
                </div>
            </li>`;
    });
    // listElem.innerHTML에 listHTML 값을 할당하여 할 일 목록의 HTML 코드를 업데이트
    listElem.innerHTML = listHTML;
    // 입력하고나면 다시 초기화
    todoInputElem.value = "";
}

// 새로고침할때 이전에 저장된 목록 가져오기(window...)
window.addEventListener("load", function() {
    render();
});