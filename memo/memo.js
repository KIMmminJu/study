const memoList = {
  data: {
    list: [],
  },
  // 변수에 저장하고 재사용할 element 정보를 저장
  element: {
    memoElem: null,
    addBtn: null,
    memoListElem: null,
  },
  /** 최초 동작에 해야 할 일 */
  initData() {
    const savedList = localStorage.getItem("list");
    if (savedList) {
      this.data.list = JSON.parse(savedList);
    }
  },
  // element 정보 초기화
  initElem() {
    this.element.memoElem = document.querySelector("#memo");
    this.element.addBtn = document.querySelector("#add-btn");
    this.element.memoListElem = document.querySelector(".memo-list");
  },
  /** list element 참조 정보 저장 */
  init() {
    // 초기화
    this.initData();
    // element 정보 초기화
    this.initElem();
    // 이벤트 바인딩
    this.bindEvent();
    // 초기 랜더링
    this.render();
  },
  /** 이벤트 묶기 */
  bindEvent() {
    // element에서 가져와서 이벤트를 걸어준다.
    this.element.addBtn.addEventListener(
      "click",
      this.addBtnHandler.bind(this)
    );
  },
  /** 등록 버튼 이벤트 */
  addBtnHandler(event) {
    const memoElem = this.element.memoElem;
    if (!event.isComposing && memoElem.value !== "") {
      // 새로운 메모 객체 생성
      const newMemo = {
        id: this.id++, // 고유한 id 값으로 현재 시간 사용
        title: memoElem.value,
        createAt: new Date(), // 현재 시간으로 수정
      };

      // 메모 리스트에 추가
      this.data.list.push(newMemo);

      this.savedListLocalStorage();
      // 화면 다시 그리기
      this.render();
    }
  },
  /** list를 로컬스토리지에 저장 */
  savedListLocalStorage() {
    localStorage.setItem("list", JSON.stringify(this.data.list));
  },
  /** UI 화면 그리기 */
  render() {
    let memoListHTML = "";
    this.data.list.forEach((memo, index) => {
      memoListHTML += `
      <li>
        <div class="list-box">
          <label>${memo.title}</label>
          <p>${memo.createAt.toLocaleString()}</p>
        </div>
      </li>
    `;
    });

    // 메모 리스트를 화면에 그리기
    this.element.memoListElem.innerHTML = memoListHTML;

    // 메모 입력창 초기화
    this.element.memoElem.value = "";
  },
};

window.addEventListener("DOMContentLoaded", function () {
  memoList.init();
});
