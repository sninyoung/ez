/* common.js*/


$(document).ready(function(){
    let scrolling = 0 //현재 스크롤 된 값
    let prev_scroll //이전에 스크롤 된 값
    let window_w //브라우저 너비
    let device_status //pc나 모바일이냐 상태 지정
    
    
    /***********--------header에 fixed랑 scroll_down 추가 (시작)-------******** 
    스크롤이 1이라도 되면 fixed 클래스 추가
    하단으로 스크롤 되면  scroll_down 클래스 추가
    위로 스크롤 되면 scroll_down 클래스 삭제
    맨 위로 갔을 때 fixed, scroll_down 모두 삭제
    >>> 스크롤 방향 판단
    이전 스크롤 값은 저장해두고 현재 스크롤 값을 빼 올때 0보다 작으면 
    */
    function scroll_chk(){
        prev_scroll = scrolling
        scrolling = $(window).scrollTop()

        if(scrolling > 0){
            $('header').addClass('fixed')
            if((prev_scroll - scrolling) < 0 ){
                $('header').addClass('scroll_down')
                //console.log('내려감')
            }else{
                $('header').removeClass('scroll_down')
                //console.log('올라감')
            }
        }else{
            $('header').removeClass('fixed')
            $('header').removeClass('scroll_down')
        }

        //console.log(prev_scroll, scrolling)
    }
    
    scroll_chk() //함수 실행
    $(window).scroll(function(){
        scroll_chk()
    })
    /***********--------header에 클래스 fixed랑 scroll_down 추가 (종료)-------******** */


    /***********--------pc버전 메뉴에 마우스 오버했을 때: li에 클래스 over 추가 (시작)-------*********/
    /*
    header .gnb_wrap ul.depth1 > li 에 마우스를 올리면 
    header에는 menu_pc 클래스 추가 
    1차 메뉴 li에는 over 클래스 추가
    pc버전일 때만 구현
     */


    /***********--------pc버전 메뉴에 마우스 오버했을 때: li에 over 클래스 추가 (시작)-------*********/
    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1000){ /*브라우저 브레이크 포인트 너비 기준값 1300, 1000, 760, 640, 320 등*/
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        //console.log(device_status)
    }
    resize_chk()//함수 실행
    $(window).resize(function(){
        resize_chk()//함수 실행
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_pc')
            $('header .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header .gnb').on('mouseleave', function(){
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
    //키보드 접근성 -tab키를 눌러서 메뉴 다음에 존재하는 링크에 포커스됐을 때 메뉴를 아웃시킴
    $('header .global').on('focusin', function(){
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
    /***********--------pc버전 메뉴에 마우스 오버했을 때: li에 over 클래스 추가 (종료)-------*********/


    /***********--------언어선택 열었을 때: li에 open 클래스 추가 (시작)-------*********/
    /* 
    pc버전에서만 구현돼야 함.
    header .global button에서 title명을 바꿔줘야 함.
    한 번 클릭하면 열리고 다시 클릭하면 닫힘
    >> header .global을 클릭했을 때
    >> header .global에 open 클래스가 있는지 체크
    */

    $('header .global').on('click', function(){
        if(device_status == 'pc'){
            //console.log('누름')
            if($(this).hasClass('open') == true){  //열려있는 상태일떄
                //console.log('열렸어요')
                $(this).removeClass('open')
                $(this).find('button').attr('title', '언어선택 열기 버튼')
            }else{
                //console.log('닫혔어요')
                $(this).addClass('open')
                $(this).find('button').attr('title', '언어선택 닫기 버튼')                
            }
        }
    })
    /***********--------언어선택 열었을 때: li에 open 클래스 추가 (종료)-------*********/


    /*
     *header .gnb .gnb_wrap ul.depth1 > li > a 를 클릭했을 때  
     1. 클릭이벤트를 삭제(페이지 이동 막기)
        1차 메뉴 li에 open 클래스를 추가하거나 삭제함
     >> 열려있으면 닫고, 닫혀있으면 (다른 애들은 모두 닫고 나만 열기)
     
     */

     $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault(); /* a의 클릭 막기 */
            if($(this).parent().hasClass('open') == true){ //open이 있으면
                $(this).parent().removeClass('open')
                $(this).next().slideUp()
                //console.log('열렸어요')
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parent().addClass('open')
                $(this).next().slideDown()
                //console.log('닫혔어요')
            }
        }
     })

    

 /*********-------모바일 메뉴 열기 - menu_mo 시작 ----------****/
  /* header .gnb .gnb_open >> 클릭하면 열리고 header에 menu_mo 클래스 추가
    * header .gnb .gnb_close >> 클릭하면 닫힘 header에 menu_mo 클래스 삭제 */

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_mo')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_mo')
    })


})//$(document).ready
