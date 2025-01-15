/*
* main.js
* main에서만 작동되는 스크립트 저장
*/
//console.log('js파일 연결됨')

$(document).ready(function(){

    /************************ 공통요소 :: 시작 ***********************/
    let scrolling = $(window).scrollTop() //현재 스크롤 된 값
    let window_h = $(window).height()//브라우저 높이
    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
    })
    $(window).resize(function(){
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
    })
    /************************ 공통요소 :: 종료 ***********************/


    /********----------txt_slide 글자 색 입히는 애니메이션 ----------******
    <.txt_slide .txt_wrap .row span 의 너비(width)를 0에서 100%로 변경하는 애니메이션>
    .txt_slide .txt_wrap .row가 여러개가 가능하도록
    애니메이션의 시작점: .txt_slide가 화면에 나타났을 때 (약 300)
    애니메이션의 종료점: .txt_slide 화면 상단으로 스크롤 됐을 때 (약 800)
    800-300 = 500px 
    두줄이니까 500 / 2 = 250px 스크롤 될 때 1줄 완성
    300 ~ 550px 일 때 -> 한 줄 완성
    550 ~ 800px 일 때 -> 두 줄 완성
    */

    //값이 변하는 변수
    let obj_row = $('.txt_slide .txt_wrap .row') //애네메이션이 들어가는 글자 한 줄
    let obj_row_target = $('span') //애네메이션이 들어가는 글자 한 줄
    let obj_wrap = $('.txt_slide') //애네메이션이 들어갈 글자 전체를 감싸는
    let start_ratio = 0.2
    let end_ratio = 0.5

    //값이 변하지 않는 변수
    let scroll_gap //시작부터 스크롤된 값
    let scroll_percent //스크롤 된 값을 퍼센트로 변환한 값
    let scroll_area //스크롤 적용 범위
    let ani_start //애니메이션 시작점
    let ani_end //애니메이션 종료점
    let obj_w //너비가 조절되는 오브젝트
    let obj_length = obj_row.length //줄 수 계산
    let obj_area_start //글자 전체의 애니메이션 시작점
    let obj_area_end //글자 전체의 애니메이션 종료점
    let obj_area_h //한 줄 애니메이션이 작동될 높이


    function obj_count(){
        obj_area_start = obj_wrap.offset().top - window_h + (window_h * start_ratio)
        obj_area_end = obj_wrap.offset().top + obj_wrap.height() - (window_h * end_ratio)
        obj_area_h = (obj_area_end - obj_area_start) / obj_length

        //console.log('스크롤:', scrolling, '시작값:', obj_area_start, '종료값:', obj_area_end, '구간:', obj_area_h)

        for(i = 0; i < obj_length; i++){
            txt_slide(i)
        }
        //txt_slide(i) //문서가 로딩됐을 때
    }
    //console.log('몇줄', obj_length)

    function txt_slide(num){
        ani_start = obj_area_start + (obj_area_h * num)
        ani_end = obj_area_start + (obj_area_h * (num + 1))
        obj_w = obj_row.eq(num).find(obj_row_target) //.txt_slide .txt_wrap 첫번째 .row의 span을 찾은 값

        if(scrolling <= ani_start){ 
            scroll_percent = 0
        }else if((scrolling > ani_start) && (scrolling < ani_end)){ 
            scroll_area = ani_end - ani_start
            scroll_gap = scrolling - ani_start
            scroll_percent = scroll_gap / scroll_area *100
        }else{
            scroll_percent = 100
        }//if 종료
        //console.log(scroll_percent);
        obj_w.width(scroll_percent + '%')
    }//function txt_slide() 종료

    $(window).scroll(function(){ //스크롤 할 때마다
        obj_count()
        //txt_slide()
    })
    $(window).resize(function(){ //브라우저가 리사이즈 될 때
        obj_count()
    })
    /********----------txt_slide 글자 색 입히는 애니메이션 (종료)----------****** */

    
    /**********--------photo_resize 이미지 크기 커지는 애니메이션--------**********/
    /*
    <.photo_resize .photo의 너비(width)가 현재 50%인데  100%로 커지게 하는 애니메이션>
    언제 시작할 것인지 : 영역이 브라우저 하단에서 올라왔을 때
    언제 종료할 것인지 : 영역이 브라우저 중간쯤 올라왔을 때

    너비 50%일 때 > 50% ~ 100% > 100%를 유지하는 구간
    */

    let ph_name = $('.photo_resize .photo') //요소를 감싸는 이름
    let ph_start_width = 50 //최초의 너비(단위 : %)
    let ph_end_width = 100 //마지막 너비(단위 : %)
    let ph_width //photo의 너비(단위 : %)
    let ph_gap //
    let ph_start //애니메이션 시작 위치
    let ph_end //애니메이션 종료 위치

    function photo_resize(){
        ph_start = ph_name.offset().top - window_h + (window_h * 0.3)
        ph_end = ph_name.offset().top - (window_h * 0.2)
        //console.log('스크롤값', scrolling, '시작점:', ph_start, '종료점:', ph_end)

        if(scrolling < ph_start){
            ph_width = ph_start_width 
            //console.log('아직')
        }else if(scrolling < ph_end){
            ph_gap = ph_end - ph_start
            ph_width = (scrolling - ph_start) / ph_gap
            ph_width = (ph_width * (ph_end_width - ph_start_width)) + ph_start_width
            //console.log('늘어나는 중')
        }else{
            ph_width = ph_end_width
            //console.log('다 늘어남')
        }//if문 종료
        ph_name.width(ph_width + '%')
    }//function photo_resize 종료

    $(window).scroll(function(){ //스크롤 할 때마다
        photo_resize()
    })
    $(window).resize(function(){ //브라우저가 리사이즈 될 때
        photo_resize()
    })
    /**********--------photo_resize 이미지 크기 커지는 애니메이션 (종료)--------**********/

    
    /************************ 스크롤되면 배경이 검은색으로 변경되는 애니메이션 :: 시작 **********************
     * .bg_change 영역이 브라우 상단쯤에 닿으면 black 추가됨 (상단에 닿지 않았을때는 black이 없음)
     * 상단에 도달하기 전 :: black 클래스 없음
     * 상단에 도달한 이후 :: black 클래스 추가
    */
    let bg_name = $('.bg_change')
    let bg_class = 'black'
    let bg_start //배경색을 바꾸주기 시작하는 시점

    function bg_chage(){
        bg_start = bg_name.offset().top - (window_h * 0.2)
        //console.log('스크롤', scrolling, 'bg_chage top값', bg_start)
        if(scrolling < bg_start){
            bg_name.removeClass(bg_class)
        }else{
            bg_name.addClass(bg_class)
        }
    }
    bg_chage() //로딩이 완료되었을때

    $(window).scroll(function(){ //스크롤 할때마다
        bg_chage()
    })

    $(window).resize(function(){ //브라우저가 리사이즈가 될때
        bg_chage()
    })

    /************************ 스크롤되면 배경이 검은색으로 변경되는 애니메이션 :: 종료 **********************/

    /************************ 동영상 콘텐츠가 브라우저에 고정(확대) :: 시작 *********************
     * .bg_change .video_fit .video_area 이 긴영역의 
     *  - 브라우저의 상단에 도달하기이전                data-status="before"
     *  - 도달해서 스크롤 되는 중                      data-status="fixed"
     *  - 이미지 스크롤 되어서 화면 밖으로 사라지는 경우 data-status="after"
     *  >>>> 스크롤 되는 중에는 동영사의 크기가 천천히 늘어남 ..... 
     * 
     * >>스크롤 1000일 때 고정 시작
     * >>스크롤 1000일 때 고정 종료 ---- 스크롤1000동안 사이즈가 리스이즈됨
     * 
     * 리사이즈 시작값 80
     * 리사이즈 종료값 100    ----20만 변경됨.
     * 
     * 예를 들어 내가 현재 스크롤 값이 1500이면 현재 너비가 얼마
        * vf_area_gap = 2000(vf_end) - 1000(vf_start) = 1000
        * vf_scroll_per = 1500(scrolling) - 1000(vf_start) = 500 / 1000(vf_area_gap) = 0.5
        * vf_resize_w = 100(vf_resize_end) - 80(vf_resize_start) = 20 * 0.5 = 10 + 80(vf_resize_start)
    */

    let vf_area_name = $('.bg_change .video_fit .video_area')
    let vf_resize_name = $('.bg_change .video_fit .video_area .video_wrap .video_inner')
    let vf_resize_start = 50
    let vf_resize_end = 100
    let vf_resize_w //리사이즈 될 때 계산한 너비값
    let vf_area_gap //리사이즈를 계산해야 할 스크롤 구간 값 =영역의 차이값
    let vf_scroll_per //스크롤 된 값의 퍼센트
    let vf_start //영역을 고정하는 시작 지점
    let vf_end //영역 고정을 종료하는 종료 지점 


    function video_fixed(){
        vf_start = vf_area_name.offset().top
        vf_end = vf_area_name.offset().top + vf_area_name.height() - window_h
        vf_area_gap = vf_end - vf_start
        
        //console.log('스크롤값', scrolling, '상단값', vf_start, '종료값', vf_end)
        if(scrolling < vf_start){
            vf_area_name.attr('data-status', 'before') 
            vf_resize_w = vf_resize_start
            //console.log('아직 아니다')

        }else if(scrolling < vf_end){
            vf_area_name.attr('data-status', 'fixed') 
            vf_scroll_per = (scrolling - vf_start) / vf_area_gap
            vf_resize_w = ((vf_resize_end - vf_resize_start) * vf_scroll_per) + vf_resize_start
            vf_resize_w = vf_resize_w*1.4 /* 값을 변경해줌으로 조정 */
        
            if(vf_resize_w > vf_resize_end){
                vf_resize_w = vf_resize_end
                vf_resize_name.css('border-radius', '0')

            }
            //console.log('고정할꺼야...')
        }else{
            vf_area_name.attr('data-status', 'after') 
            vf_resize_w = vf_resize_end
            //console.log('끝!!! ')
        }
        //console.log(vf_resize_w)
        vf_resize_name.width(vf_resize_w + '%')
        vf_resize_name.height(vf_resize_w + '%')
    }
    video_fixed() //문서 로딩되었을때 1번 실행
    $(window).scroll(function(){//스크롤할때마다 실행
        video_fixed() 
    })
    $(window).resize(function(){//리사이즈 될때마다 실행
        video_fixed() 
    })

    /************************ 동영상 콘텐츠가 브라우저에 고정(확대) :: 종료 **********************/


    /************************bg_change 스크롤시 콘텐츠 이동:: 시작 **********************/
    /**
     * 시작 시점 .scroll_event .event_wrap이 화면에 나타나면
     * .scroll_event .event_wrap h2의 transform: translateY()의 값을 조절해서 계속 위로 이동
     * 현재 스크롤 값 - 스크롤 시작 값에 일정 수를 곱해서 px로 줌.
     * 
     */
    let ev_area_name = $('.scroll_event .event_wrap')
    let ev_area_start //이벤트가 시작하는 값
    let ev_move_name = $('.scroll_event .event_wrap h2') //움직일 요소
    let ev_move //움직일 값

    function scroll_event(){
        ev_area_start = ev_move_name.offset().top - window_h
        if(scrolling > ev_area_start){
            //console.log('움직일거야')
            //console.log(scrolling, window_h)
            ev_move = 0
        }else{
            //console.log('0이다')
            ev_move = 0
        }//if문종료
        //console.log(ev_move)
        ev_move_name.css('transform', 'translateY( '+ ev_move + 'px)')
    }//function scroll_event 종료

    scroll_event() //문서가 로딩될 때
    $(window).scroll(function(){ //스크롤 될 때마다
        scroll_event()
    })
    $(window).resize(function(){ //리사이즈 될 때마다
        scroll_event()
    })
    /************************ bg_change 스크롤시 콘텐츠 이동::종료 **********************/


    /***********************book:: 시작 **********************/
    
    $('.book .list .popup .popup_wrap').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: true,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        infinite: true, //무한반복
        //variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 5, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
    });
    
    //$('.클래스명').slick('slickPause');  /* 일시정지 기능 */
    //$('.클래스명').slick('slickPlay');  /* 재생 기능 */
    /************************book:: 종료 **********************/



    /************************bestseller:: 시작**********************/
    const swiper = new Swiper('.bestseller .list .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 4, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
swiper.autoplay.stop();  /* 일시정지 기능 */
swiper.autoplay.start();  /* 재생 기능 */

/************************bestseller:: 종료 **********************/


})//$(document).ready
