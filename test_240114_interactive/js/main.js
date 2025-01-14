/*
* main.js
* main에서만 작동되는 스크립트 저장
*/
//console.log('js파일 연결됨')

$(document).ready(function(){

    /********----------txt_slide 글자 색 입히는 애니메이션 ----------****** */

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
    /*

    .txt_slide .txt_wrap .row span 의 너비(width)를 
    0에서 100%로 변경하는 애니메이션
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

        txt_slide(i) //문서가 로딩됐을 때
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
    .photo_resize .photo의 너비(width)가 현재 50%인데  100%로 커지게 하는
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

})//$(document).ready