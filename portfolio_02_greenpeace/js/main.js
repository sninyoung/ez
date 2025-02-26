/* main.js*/


let tab_name //product의 클릭한 tab의 이름

$(document).ready(function(){
    
     /************************* visual 동영상 (시작) **************************/
    
     /************************* visual 동영상 (끝)  **************************/





    /*************************news 스위퍼 (시작)  *************************/
    const news_swiper = new Swiper('.news .tip .swiper', { /* 팝업을 감싸는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            381: {    /* 381px이상 768px이하일때 적용 */
                slidesPerView: 2,
                spaceBetween: 16,
            },
            769: {    /* 769px이상 1024px이하일때 적용 */
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1025: {    /* 1025px이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
    /*************************news 스위퍼 (끝)  **************************/



})//$(document).ready 