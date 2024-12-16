//popup
$(document).ready(function(){ //html이 모두 로딩되면 그때 단 한번 실행
    const swiper = new Swiper('.popup .swiper', { /* 팝업을 감싸는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 100,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: { 
            nextEl: '.popup .btn_wrap .next',  /* 다음 버튼 */
            prevEl: '.popup .btn_wrap .prev',  /* 이전 버튼 */
        },

    });

    $('.popup .btn_wrap .stop').on('click', function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()//숨김
        $('.popup .btn_wrap .play').show()//보임
    })

    $('.popup .btn_wrap .play').on('click', function(){
        swiper.autoplay.start();  /* 다시시작 재생 기능 */
        $(this).hide()//숨김
        $('.popup .btn_wrap .stop').show()//보임
    })

})/*$(document).ready*/

