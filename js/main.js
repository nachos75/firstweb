const backToTop = document.getElementById('backtotop');

const checkScroll = () => {
   /*
     웹페이지가 수직으로 얼마나 스크롤 되었는지를 확인하는 값(픽셀 단위로 반환)
     https://developer.mozilla.org/ko/docs/Web/API/Window/pageYOffset
   */
  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0) {
      backToTop.classList.add('show');
  } else {
      backToTop.classList.remove('show');
  }
}

const moveBackToTop = () => {
  if (window.pageYOffset > 0) {
      /*
        smooth하게 스크롤하기
        https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
      */
      window.scrollTo({top: 0, behavior: "smooth"})
  }
}

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);


/*-------------------------------------------------------------------------*/
const slidePrevList = document.getElementsByClassName('slide-prev');

for (let i = 0; i < slidePrevList.length; i++) {
    // ul 태그 선택

}