const todoInputElem = document.querySelector(".new-todo");
const listElem = document.querySelector(".todo-list");

// 이전에 저장된 목록 가져오기 . localStorage를 사용하여 새로 고침을 해도 목록이 그대로 남아있게
// localStorage - 브라우저를 새로고침해도 남아있음, 여러 탭이 공유할 수 있음
// cookie - ajax(xhr request) header에 포함되서 전달됨
// .getItem() 키(문자열)을 전달해서 해당하는 값이 있으면 값을 반환한다(문자열 데이터) 없다면 null 반환
const savedTodos = localStorage.getItem("todos");
let todos = [];
if (savedTodos) {
  // localStorage에 저장된 savedTodos가 존재하면
  // 문자열데이터를 객체형태로 파싱하기위해서 JSON.parse() 로 파싱
  todos = JSON.parse(savedTodos)
}

todoInputElem.addEventListener("keydown", function (event) {
  // 엔터키를 누르면
  if (event.key === "Enter" && !event.isComposing) {
    // input에 값을 가져와서 변수에 담고
    const value = todoInputElem.value;
    // input의 값을 초기화 한다
    event.value = "";

    todos.push({ title: value, completed: false });

    localStorage.setItem("todos", JSON.stringify(todos));

    // 데이터가 변경이 일어났으니까 화면을 다시 그리도록 한다.
    render();
  }
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
    const liElem = targetElem.closest('li[data-index]');

    // 변경될 데이터(todo)를 찾기위한 index 정보 계산
    const index = parseInt(liElem.dataset.index);

    // 삭제 버튼 클릭 시
    if (targetElem.classList.contains("destroy")) {
      // 데이터 변경 : index를 사용하여 배열 todos 에서 삭제할 todo를 제거
      todos.splice(index, 1);

      // 로컬 스토리에 데이터 갱신 : 옵션
      localStorage.setItem("todos", JSON.stringify(todos));

      // 화면 다시 그리기
      render();
    } 

    // 체크박스가 토글 시
    else if (targetElem.classList.contains("toggle")) {
      // 데이터 가져오기 : index를 사용하여 todo 데이터 가져오기
      // var arr = ['a','b','c','d']; 
      // 'c' 가져오려면? -> arr[2]
      const todoItem = todos[index];

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
const render = function () {

  let listHTML = "";
  // - todos 데이터를 순회하면서 listHTML의 문자열을 완성시킨다.
  todos.forEach((item, index) => {
    const completedClass = item.completed ? "completed" : ""; 
    // data-index, item.title 정보를 가져와서 문자열을 완성시키도록 한다.
    listHTML += `
            <li data-index="${index}" class="${completedClass}">
                <div class="view">
                      <input class="toggle" type="checkbox" ${item.completed ? "checked" : ""}>
                    <label>${item.title}</label>
                    <button class="destroy"></button>
                </div>
            </li>`;
  });
  // 완성된 html 문자열을 innerHTML로 갱신한다
  listElem.innerHTML = listHTML;
  // 초기화 안해도될것같은데...??
  todoInputElem.value = "";
};

const renderFilter = function() {

  // 선택된 필터 정보가 담김 변수를 사용해서 class="selected"를 추가한다.
  // <a class="${filter === 'active' ? 'selected' : ''}">all</a>
}



// 새로고침할때 이전에 저장된 목록 가져오기(window...)
// 새로고침이 일어나면 로컬스토리에 저장된 데이터를 기반으로 다시 그려야하니까...
// 랜더 함수를 호출한다.
// load이벤트에 안해도될것 같아요..
window.addEventListener("load", function () {
  render();
});

