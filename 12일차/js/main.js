// 문제
// 하트 클릭하면 빨간색으로 들어오게 만들기

const heartEl = document.querySelector(".heart");
let i = true;

const heartHandler = () => {
  if (i) {
    heartEl.innerHTML = `<i class="fa-regular fa-heart full_heart"></i>`;
    i = fulse;
  } else if (!i) {
    heartEl.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    i = ture;
  }
};

heartEl.addEventListener("click", heartHandler);
