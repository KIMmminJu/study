const memoList = {
  id: 0,
  data: {
    list: [],
  },
  found: null,
  // 변수에 저장하고 재사용할 element 정보를 저장
  element: {
    memoElem: null,
    addBtn: null,
    memoListElem: null,
    resetBtn: null,
    memoCountElem: null,
    clearBtn: null,
  },
  /** 최초 동작에 해야 할 일 */
  initData() {
    const savedList = localStorage.getItem("list");
    if (savedList) {
      this.data.list = JSON.parse(savedList);
    }
    const savedId = localStorage.getItem("id");
    if (savedId) {
      this.id = JSON.parse(savedId);
    }
  },
  // element 정보 초기화
  initElem() {
    this.element.memoElem = document.querySelector("#memo");
    this.element.addBtn = document.querySelector(".add-btn");
    this.element.memoListElem = document.querySelector(".memo-list");
    this.element.resetBtn = document.querySelector(".reset");
    this.element.memoCountElem = document.querySelector(".memo-count");
    this.element.clearBtn = document.querySelector(".clear-memolist");
  },
  /** list element 참조 정보 저장 */
  init() {
    // 초기화
    this.initData();
    // element 정보 초기화
    this.initElem();
    // 메서드 this bind
    this.methodContextBind();
    // 이벤트 바인딩
    this.bindEvent();
    // 초기 랜더링
    this.render();
  },
  /** 메서드 this bind */
  methodContextBind() {
    this.inputKeydownHandler = this.inputKeydownHandler.bind(this);
    this.addBtnHandler = this.addBtnHandler.bind(this);
    this.memoListHandler = this.memoListHandler.bind(this);
    this.resetBtnHandler = this.resetBtnHandler.bind(this);
    this.completedListHandler = this.completedListHandler.bind(this);
  },
  /** 이벤트 묶기 */
  bindEvent() {
    // element에서 가져와서 이벤트를 걸어준다.
    this.element.addBtn.addEventListener("click", this.addBtnHandler);
    this.element.memoListElem.addEventListener("click", this.memoListHandler);
    this.element.resetBtn.addEventListener("click", this.resetBtnHandler);
    this.element.clearBtn.addEventListener("click", this.completedListHandler);
  },
  /** 등록 버튼 이벤트 */
  addBtnHandler(event) {
    const memoElem = this.element.memoElem;

    if (!(!event.isComposing && memoElem.value !== "")) {
      return;
    }
    // 새로운 메모 객체 생성
    const newMemo = {
      id: this.id++, // 고유한 id 값으로 현재 시간 사용
      title: memoElem.value,
      createAt: new Date(), // 현재 시간으로 수정
      editTitle: false,
    };

    // 메모 리스트에 추가
    this.data.list.push(newMemo);

    this.savedListLocalStorage();
    // 화면 다시 그리기
    this.render();
  },
  resetBtnHandler() {
    document.querySelector("#memo").value = "";
  },
  /** li 이벤트 */
  memoListHandler(event) {
    const targetElem = event.target;

    const memoListItem = targetElem.closest("li[data-id]");
    const id = parseInt(memoListItem.dataset.id);

    if (targetElem.classList.contains("destroy")) {
      this.destroyHandler(id);
    } else if (targetElem.classList.contains("edit")) {
      this.editHandler(id);
    }
  },
  /** list 제거 */
  destroyHandler(id) {
    // 데이터 변경 : id를 사용하여 배열 list 에서 삭제할 todo를 제거
    this.data.list = this.data.list.filter((list) => list.id !== id);
    // 로컬스토리지에 저장
    this.savedListLocalStorage();

    this.render();
  },
  inputKeydownHandler(event) {
    // 3. 호출된 함수는 이벤트 객체를 가져올 수 있어요 - event
    // 4. 이벤트 객체 안에는 이벤트를 걸어준 돔의 정보를 가져올 수 가 있어요 - event.target
    // event.target === input.addEventListener 를 추가한 input엘리먼트를 가르킴

    // found를 어떻게 가져올 수 있을까?
    if (event.key === "Enter") {
      this.found.title = event.target.value;
      // this.found.title = event.target.input.value;
      this.found.editTitle = false;
      this.savedListLocalStorage();
      this.render();
    } else if (event.key === "Escape") {
      this.found.editTitle = false;
      this.render();
    }
  },
  removeEditInputHandler() {
    this.element.memoListElem.querySelectorAll("input").forEach((input) => {
      // 이벤트를 추가하면 삭제하는것도 고려해야한다.
      input.removeEventListener("keydown", this.inputKeydownHandler);
    });
  },
  /** title 수정 */
  editHandler(id) {
    this.found = this.data.list.find((item) => item.id == id);
    // 여기에 있는 found
    if (this.found) {
      this.found.editTitle = !this.found.editTitle;
      this.removeEditInputHandler();
      this.render();

      const editListItem = this.element.memoListElem.querySelectorAll("input");
      editListItem.forEach((input) => {
        // 이벤트를 추가하면 삭제하는것도 고려해야한다.
        input.addEventListener("keydown", this.inputKeydownHandler);
      });
    }
  },
  /** list 전체 삭제 */
  completedListHandler(event) {
    // 빈 배열로 초기화
    this.data.list = [];

    // 로컬스토리지에 저장
    this.savedListLocalStorage();

    this.render();
  },
  /** list를 로컬스토리지에 저장 */
  savedListLocalStorage() {
    localStorage.setItem("list", JSON.stringify(this.data.list));
    localStorage.setItem("id", this.id);
  },
  /** UI 화면 그리기 */
  render() {
    let memoListHTML = "";
    this.data.list.forEach((memo, index) => {
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
    this.element.memoListElem.innerHTML = memoListHTML;

    // 메모 입력창 초기화
    this.element.memoElem.value = "";

    // 등록된 메모 개수를 노출
    const memoCount = this.data.list.length;
    this.element.memoCountElem.innerHTML = `<strong>${memoCount}</strong> items left`;
  },
};

window.addEventListener("DOMContentLoaded", function () {
  memoList.init();
});
