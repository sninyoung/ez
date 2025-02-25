/* main.js*/


let tab_name //product의 클릭한 tab의 이름

$(document).ready(function(){
    
     /************************* visual 스위퍼 (시작)  **************************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap .prev',  
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .ctrl_wrap .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
     /************************* visual 스위퍼 (끝)  **************************/


     /************************* product 스위퍼 (시작)  **************************/
     const product_panel01_swiper = new Swiper('.product .panel01 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            381: {    /* 381px이상 768px이하일때 적용 */
                slidesPerView: 3,
                spaceBetween: 12,
            },
            769: {    /* 769px이상 1024px이하일때 적용 */
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1025: {    /* 1025px이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1441: {    /* 1441px이상일때 적용 */
                slidesPerView: 5,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.product .tab_content .panel01 .btn_wrap .next',
            prevEl: '.product .tab_content .panel01 .btn_wrap .prev',
        },
    });
    const product_panel02_swiper = new Swiper('.product .panel02 .swiper', { /* 팝업을 감싸는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            381: {    /* 381px이상 768px이하일때 적용 */
                slidesPerView: 3,
                spaceBetween: 12,
            },
            769: {    /* 769px이상 1024px이하일때 적용 */
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1025: {    /* 1025px이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1441: {    /* 1441px이상일때 적용 */
                slidesPerView: 5,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.product .tab_content .panel02 .btn_wrap .next',
            prevEl: '.product .tab_content .panel02 .btn_wrap .prev',
        },
    });
    const product_panel03_swiper = new Swiper('.product .panel03 .swiper', { /* 팝업을 감싸는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            381: {    /* 381px이상 768px이하일때 적용 */
                slidesPerView: 3,
                spaceBetween: 12,
            },
            769: {    /* 769px이상 1024px이하일때 적용 */
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1025: {    /* 1025px이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1441: {    /* 1441px이상일때 적용 */
                slidesPerView: 5,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.product .tab_content .panel03 .btn_wrap .next',
            prevEl: '.product .tab_content .panel03 .btn_wrap .prev',
        },
    });
    const product_panel04_swiper = new Swiper('.product .panel04 .swiper', { /* 팝업을 감싸는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            381: {    /* 381px이상 768px이하일때 적용 */
                slidesPerView: 3,
                spaceBetween: 12,
            },
            769: {    /* 769px이상 1024px이하일때 적용 */
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1025: {    /* 1025px이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1441: {    /* 1441px이상일때 적용 */
                slidesPerView: 5,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.product .tab_content .panel04 .btn_wrap .next',
            prevEl: '.product .tab_content .panel04 .btn_wrap .prev',
        },
    });

    /************************* product 스위퍼 (끝)  **************************/
    /************************* product 탭 기능 (시작)  *************************
     * .product .tab_list ul li 버튼을 누른 후 하는 일
     * li에 active 클래스 추가
     * li button에 title="선택됨" 입력
     * li에 data-tab의 값을 가져와서 .tab_content .tab_panel 중에서 data-tab이 같은 값인 요소 찾아서 active 클래스
    */
    $('.product .tab_list ul li').on('click', function(){
        $('.product .tab_list ul li').removeClass('active')
        $(this).addClass('active')
        $('.product .tab_list ul li button').attr('title', '')
        $(this).find('button').attr('title', '선택됨')
        tab_name = $(this).attr('data-tab')
        console.log(tab_name)
        $('.product .tab_content .tab_panel').removeClass('active')
        $('.product .tab_content').find('[data-tab="'+tab_name+'"]').addClass('active')
    })
    /*************************  product 탭 기능 (끝)  **************************/


    /************************* insights 스위퍼 (시작)  *************************/
    const insights_tip_swiper = new Swiper('.insights .tip .swiper', { /* 팝업을 감싸는 요소의 class명 */
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

    const insights_haccp_swiper = new Swiper('.insights .haccp .swiper', { /* 팝업을 감싸는 요소의 class명 */
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
    /************************* insights 스위퍼 (끝)  **************************/



})//$(document).ready 