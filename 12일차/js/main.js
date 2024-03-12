// 문제
// 하트 클릭하면 빨간색으로 들어오게 만들기

const hearts = document.querySelectorAll(".heart");  // querySelectorAll = 모든 heart 클래스 전부 가져옴

hearts.forEach((heart) => {                                               // 가져온 클래스 각각 컨트롤
  let i = false;                                                          // 초기(빈하트) 로 설정

  heart.addEventListener("click", function () {                           // 클릭 함수 
    if (!i) {                                                             // false(빈하트) 일 경우 
      heart.innerHTML = `<i class="fa-solid fa-heart full_heart"></i>`; // 빨강 하트 출력
      i = true;

    } else {
      // true(빨강하트) 일경우
      heart.innerHTML = `<i class="fa-regular fa-heart"></i>`;            // 빈하트 출력
      i = false;
    }
  });
})

