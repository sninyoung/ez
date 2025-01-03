/*
* main.js
* main에서만 작동되는 스크립트 저장
*/

$(document).ready(function(){
    
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        //effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .ctrl_wrap .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderBullet: function (realIndex, className) {   /* paging에 특정 코드 넣기 */
            //     console.log(this.slides.length)
            //     return '<span class="' + className + '">' + (realIndex + 1) + "</span>" + length;
            // },
        },
    });
    
    $('.visual .ctrl_wrap button.stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.play').show()
    })
    $('.visual .ctrl_wrap button.play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.stop').show()
    })
})//$(document).ready