// 문제
// 하트 클릭하면 빨간색으로 들어오게 만들기

const heart = document.querySelector(".heart");
let i = false; // 젤 기본 비어있는 상태

const heartHandler = () => {
  if (!i) {
    // 클릭했을때 비어있으면
    heart.innerHTML = `<i class="fa-regular fa-heart full_heart"></i>`; //색갈입힌 하트 출력
    i = true; // 색갈하트 가져온후 / 채워진 상태로 바꿈
  } else {
    //다음번 클릭시 채워졌기때문에
    heart.innerHTML = `<i class="fa-regular fa-heart"></i>`; // 그냥 하트 출력
    i = false; // 빈상태로 전환
  }
};

heart.addEventListener("click", heartHandler);
