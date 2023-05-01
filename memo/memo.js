let id = 0;

function Memo(rootElement) {
  const data = {
    list: [],
  };
  const element = {
    memoElem: null,
    addBtn: null,
    memoListElem: null,
    resetBtn: null,
    memoCountElem: null,
    clearBtn: null,
  };

  const init = function () {
    initLayout();
    initData();
    initElem();
    methodContextBind();
    bindEvent();
  };

  const initLayout = function () {
    rootElement.innerHTML = `
    <h1>memo</h1>
    <div class="main">
      <textarea class="memo uid_memo" rows="10" cols="65"></textarea>
      <div class="btn-list">
        <button class="add-btn uid_add_btn">등록</button>
        <button class="reset uid_reset_btn">초기화</button>
      </div>
      <div class="list-info">
        <span class="memo-count"></span>
        <button class="clear-memolist">Clear memo_list</button>
      </div>
      <ul class="memo-list"></ul>
    </div>
    `;
  };

  const initData = function () {
    const savedList = localStorage.getItem("list");
    if (savedList) {
      data.list = JSON.parse(savedList);
    }
    const savedId = localStorage.getItem("id");
    if (savedId) {
      id = JSON.parse(savedId);
    }
  };

  // element 정보 초기화
  const initElem = function () {
    element.memoElem = rootElement.querySelector(".memo");
    element.addBtn = rootElement.querySelector(".add-btn");
    element.memoListElem = rootElement.querySelector(".memo-list");
    element.resetBtn = rootElement.querySelector(".reset");
    element.memoCountElem = rootElement.querySelector(".memo-count");
    element.clearBtn = rootElement.querySelector(".clear-memolist");
  };

  /** 메서드 bind */
  const methodContextBind = function () {
    this.inputKeydownHandler = inputKeydownHandler.bind(this);
    this.addBtnHandler = addBtnHandler.bind(this);
    this.memoListHandler = memoListHandler.bind(this);
    this.resetBtnHandler = resetBtnHandler.bind(this);
    this.completedListHandler = completedListHandler.bind(this);
  };

  /** 이벤트 묶기 */
  const bindEvent = function () {
    // element에서 가져와서 이벤트를 걸어준다.
    element.addBtn.addEventListener("click", this.addBtnHandler);
    element.memoListElem.addEventListener("click", this.memoListHandler);
    element.resetBtn.addEventListener("click", this.resetBtnHandler);
    element.clearBtn.addEventListener("click", this.completedListHandler);
  };

  /** 등록 버튼 이벤트 */
  const addBtnHandler = function (event) {
    const memoElem = element.memoElem;

    if (!(!event.isComposing && memoElem.value !== "")) {
      return;
    }
    // 새로운 메모 객체 생성
    const newMemo = {
      id: id++, // 고유한 id 값으로 현재 시간 사용
      title: memoElem.value,
      createAt: new Date(), // 현재 시간으로 수정
      editTitle: false,
    };

    // 메모 리스트에 추가
    data.list.push(newMemo);

    savedListLocalStorage();
    // 화면 다시 그리기
    render();
  };

  const resetBtnHandler = function () {
    document.querySelector("#memo").value = "";
  };

  /** li 이벤트 */
  const memoListHandler = function (event) {
    const targetElem = event.target;

    const memoListItem = targetElem.closest("li[data-id]");
    const id = parseInt(memoListItem.dataset.id);

    if (targetElem.classList.contains("destroy")) {
      destroyHandler(id);
    } else if (targetElem.classList.contains("edit")) {
      editHandler(id);
    }
  };

  /** list 제거 */
  const destroyHandler = function (id) {
    // 데이터 변경 : id를 사용하여 배열 list 에서 삭제할 todo를 제거
    data.list = data.list.filter((list) => list.id !== id);
    // 로컬스토리지에 저장
    savedListLocalStorage();

    render();
  };

  const inputKeydownHandler = function (event) {
    if (event.key === "Enter") {
      found.title = event.target.value;
      // this.found.title = event.target.input.value;
      found.editTitle = false;
      savedListLocalStorage();
      render();
    } else if (event.key === "Escape") {
      found.editTitle = false;
      render();
    }
  };

  const removeEditInputHandler = function () {
    element.memoListElem.querySelectorAll("input").forEach((input) => {
      // 이벤트를 추가하면 삭제하는것도 고려해야한다.
      input.removeEventListener("keydown", this.inputKeydownHandler);
    });
  };

  /** title 수정 */
  const editHandler = function (id) {
    found = data.list.find((item) => item.id == id);
    // 여기에 있는 found
    if (found) {
      found.editTitle = !found.editTitle;
      removeEditInputHandler();
      render();

      const editListItem = element.memoListElem.querySelectorAll("input");
      editListItem.forEach((input) => {
        // 이벤트를 추가하면 삭제하는것도 고려해야한다.
        input.addEventListener("keydown", this.inputKeydownHandler);
      });
    }
  };

  /** list 전체 삭제 */
  const completedListHandler = function (event) {
    // 빈 배열로 초기화
    data.list = [];

    // 로컬스토리지에 저장
    savedListLocalStorage();

    render();
  };

  /** list를 로컬스토리지에 저장 */
  const savedListLocalStorage = function () {
    localStorage.setItem("list", JSON.stringify(data.list));
    localStorage.setItem("id", id);
  };
  /** UI 화면 그리기 */
  const render = function () {
    let memoListHTML = "";
    data.list.forEach((memo, index) => {
      if (memo.editTitle) {
        memoListHTML += `
          <li data-id="${memo.id}">
          <div class="list-box">
            <input type="text" value="${memo.title}" />
          </div>
          </li>
        `;
      } else {
        memoListHTML += `
          <li data-id="${memo.id}">
          <div class="list-box">
            <label>${memo.title}</label>
              <p>${new Date(memo.createAt).toLocaleString()}</p>
              <div class="edit-box">
                <button class="edit"></button>
              </div>
                <div class="destroy-box">
                  <button class="destroy"></button>
              </div>
          </div>
          </li>
        `;
      }
    });

    // 메모 리스트를 화면에 그리기
    element.memoListElem.innerHTML = memoListHTML;

    // 메모 입력창 초기화
    element.memoElem.value = "";

    // 등록된 메모 개수를 노출
    const memoCount = data.list.length;
    element.memoCountElem.innerHTML = `<strong>${memoCount}</strong> items left`;
  };

  init();
}

window.addEventListener("DOMContentLoaded", function () {
  const memo = new Memo(document.querySelector("#app1"));
  const memo1 = new Memo(document.querySelector("#app2"));
  memo.data; // O
  memo.init; // X

  console.log(memo);
});
