//popup
$(document).ready(function(){ //html이 모두 로딩되면 그때 단 한번 실행
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */

    autoplay: {  /* 팝업 자동 실행 */
    delay: 5000, /*2500 = 2.5초, 5000 = 5초*/
    disableOnInteraction: true,
    },

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.visual .paging', /* 해당 요소의 class명 */
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
    },
    navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
        prevEl: '.visual .prev',  
    },

    });

    // swiper.autoplay.stop();  /* 일시정지 기능 */
    // swiper.autoplay.start();  /* 재생 기능 */
    $('.visual .btn_wrap .stop').on('click', function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()//숨김
        $('.visual .btn_wrap .play').show()//보임
    })

    $('.visual .btn_wrap .play').on('click', function(){
        swiper.autoplay.start();  /* 다시시작 재생 기능 */
        $(this).hide()//숨김
        $('.visual .btn_wrap .stop').show()//보임
    })

})/*$(document).ready*/

