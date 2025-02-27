/* main.js*/


let tab_name //product의 클릭한 tab의 이름

$(document).ready(function(){
    
    /************************ 공통요소 :: 시작 ***********************/
    let scrolling = $(window).scrollTop()// 현재 스크롤 된 값
    let window_h = $(window).height() //브라우저 높이
    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
    })
    $(window).resize(function(){
        window_h = $(window).height()
        //console.log(window_h)
    })
    /************************ 공통요소 :: 종료 ***********************/




    /************************* visual 동영상 (시작) *************************
    * .visual .video_area 이 
    *  - 브라우저의 상단일 때                data-status="before"
    *  - 도달해서 스크롤 되는 중                      data-status="fixed"
    *  - 이미지 스크롤 되어서 화면 밖으로 사라지는 경우 data-status="after"
    *  >>>> 스크롤 되는 중에는 동영상의 크기가 천천히 늘어남
    * 
    * >>> 스크롤 1000일때 고정 시작
    *     스크롤 2000일때 고정 종료   ---- 스크롤 1000동안 사이즈가 리사이즈됨
    * >>> 리사이즈 시작 값은 75
    *     리사이즈 종료 값은 100 --- 20만 변경됨...
    * 
    * >>> 예를들어 내가 현재 스크롤 값이 1500임 ... 그럼 현재 넓이가 얼마 ...
    *     v_area_gap = 2000(v_end) - 1000(v_start) = 1000
    *     v_scroll_per = 1500(scrolling) - 1000(v_start) = 500 / 1000(v_area_gap) = 0.5
    *     v_resize_w = 100(v_resize_end) - 80(v_resize_start) = 20 * 0.5(v_scroll_per) = 10 + 80(v_resize_start) = 90
   */

   let v_area_name =  $('.visual .video_area')
   let v_resize_name = $('.visual .video_area .video_wrap .video_inner')
   let v_resize_start = 75 //리사이즈 시작값 동영상의 75%
   let v_resize_end = 100 //리사이즈 종료값
   let v_resize_w // 리사이즈 될때 계산한 넓이값
   let v_area_gap // 리사이즈를 계산해야할 스크롤 구간값
   let v_scroll_per //스크롤 된 값의 퍼센트
   let v_start = 20 //영역을 고정하는 시작 지점
   let v_end //영역 고정을 종료하는 종료 지점 

   function video_fixed(){
       v_start = v_area_name.offset().top
       v_end = v_area_name.offset().top + v_area_name.height() - window_h 
       v_area_gap = v_end - v_start
       //console.log('스크롤값', scrolling, '상단값', v_start, '종료값', v_end)
       if(scrolling < v_start){
           v_area_name.attr('data-status', 'before')
           //기존값을 지우고 내가 준 값으로 교체함
           v_resize_w = v_resize_start
       }else if(scrolling < v_end){
           v_area_name.attr('data-status', 'fixed')
           v_scroll_per = (scrolling - v_start) / v_area_gap
           v_resize_w = ((v_resize_end - v_resize_start) * v_scroll_per) + v_resize_start
           v_resize_w = v_resize_w * 1
           if(v_resize_w > v_resize_end){ ///end값이상 늘어나지 못하게 막음
               v_resize_w = v_resize_end
           }
       }else{
           v_area_name.attr('data-status', 'after')
           v_resize_w = v_resize_end
       }//if문
       //console.log(v_resize_w)
       v_resize_name.width(v_resize_w + '%')
       v_resize_name.height(v_resize_w + '%')
   }//function
   video_fixed() //문서 로딩되었을때 1번 실행
   $(window).scroll(function(){//스크롤할때마다 실행
       video_fixed() 
   })
   $(window).resize(function(){//리사이즈 될때마다 실행
       video_fixed() 
   })
    /************************* visual 동영상 (끝)  **************************/


    /************************* campaign 왼쪽 제목 고정  (시작)  *************************/
    
   
    /************************* campaign 왼쪽 제목 고정 (끝)  *************************/

    /************************* campaign 아코디언 (시작)  *************************/
    gsap.registerPlugin(ScrollTrigger);
    const items = gsap.utils.toArray(".campaign .accordion");
    
    items.forEach((item, i) => {
        const content = item.querySelector(".campaign .accordion .conts");
        const header = item.querySelector(".campaign .accordion .tit");
        //console.log ('아코디언 js연결');
        gsap.to(content, {
            height: 0,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top " + ((header.clientHeight * i)+150),
                endTrigger: ".final",  // 고정요소 하단에 종료를 뜻하는 class
                end: "top " + header.clientHeight * items.length,
                pin: true,
                pinSpacing: false,
                scrub: true,
                markers: false,
                id: i + 1
            }
        });
    });
    /************************* campaign 아코디언 (끝)  **************************/

    /*************************project 스위퍼 (시작)  *************************/
    const project_swiper = new Swiper('.project .swiper', { /* 팝업을 감싸는 요소의 class명 */
        autoplay: {/* 팝업 자동 실행 */
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
        loop: true, /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        loopAdditionalSlides: 1,
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1441: {    /* 1025px이상일때 적용 */
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
        },
    });
    /*************************project 스위퍼 (시작)  *************************/
    

    /*************************project 스위퍼 (시작)  *************************/
    const support_swiper = new Swiper('.support .swiper', { /* 팝업을 감싸는 요소의 class명 */
        autoplay: {/* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 5000,
        effect:'fade',
        loop: true, /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 1, /* 팝업과 팝업 사이 여백 */
    });
    /*************************project 스위퍼 (시작)  *************************/

    /*************************news 스위퍼 (시작)  *************************/
    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싸는 요소의 class명 */
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