/* common.js
header/footer 공통요소에 들어가는 스크립트 지정
모든 페이지에서 공통으로 작동되는 스크립트
 */

$(document).ready(function(){
    console.log('연결됨')

    let window_w //브라우저 너비
    let device_status //pc, mobile 현재 상태 저장
    let scrolling = $(window).scrollTop() //스크롤된 값

    function device_chk(){
        window_w = $(window).width()
        //console.log(window_w)

        if(window_w > 1024){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        //console.log(device_status)

    }//function device_chk

    device_chk() //문서가 로딩될 때
    $(window).resize(function(){ //브라우저가 리사이즈 될 때마다
        device_chk()
    })//$(window).resize

    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
    })
   


 /*********-------모바일 1차 메뉴 열기 - open 시작----------**** */
 $('header .gnb .gnb_wrap > ul.depth1 > li > a ').on('click', function(e){
    if(device_status == 'mobile') {
        //console.log('모바일에서 메뉴가 클릭됐을 때')
        e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
        if($(this).parent().hasClass('open') == true) {
            $(this).parent().removeClass('open')
            //console.log('2차 메뉴가 열려있어요')
        }else{
            $(this).parent().addClass('open')
            //console.log('2차 메뉴가 닫혀있어요')
        }
    }else{
    }
 })
 /*********-------모바일 1차 메뉴 열기 - open  끝----------**** */


 /*********-------모바일 메뉴 열기 - menu_mo 시작 ----------****
  * 
  * header .gnb .gnb_open  을 클릭하면 header에 menu_mo 클래스 추가
  * header .gnb .gnb_wrap .gnb_close 을 클릭하면 header에 menu_mo 클래스 삭제
  * header .gnb .gnb_wrap 가 transform: translateX(120%); 이어서 안보이다가 header에 menu_mo가 추가됐을 때 0으로 해줌.
  * 
 */
        $('header .gnb .gnb_open').on('click', function(){
            $('header').addClass('menu_mo')
        })
        $('header .gnb .gnb_wrap .gnb_close').on('click', function(){
            $('header').removeClass('menu_mo')
        })
    
 /*********-------모바일 메뉴 열기 - menu_mo 끝 ----------****/


 /*********-------pc 메뉴 열기 - menu_pc 시작 ----------***
  * 1. header에 menu_pc 클래스 추가
  * 2. header .gnb .gnb_wrap > ul.depth1 > li 에 over 클래스 추가
  * tab으로 메뉴 이동하게, 메뉴에서 나오게
 */
    $('header .gnb .gnb_wrap > ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            //console.log('메뉴에 오버했을 때')
            $('header').addClass('menu_pc')
            ('header .gnb .gnb_wrap > ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })

    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
            //console.log('메뉴에 오버했을 때')
            $('header').removeClass('menu_pc')
            ('header .gnb .gnb_wrap > ul.depth1 > li').removeClass('over')
        }
    })
    $('header .tnb .search button').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').removeClass('menu_pc')
            ('header .gnb .gnb_wrap > ul.depth1 > li').removeClass('over')
        }
    })
    /*********-------pc 메뉴 열기 - menu_pc 끝 ----------****/







    /*********-------모바일에서 header fixed 클래스 추가 _ 시작 ----------***
     * 스크롤을 내리면 header에 fixed 클래스 추가
     * 스크롤이 다시 맨 상단에 내려가면fixed 클래스 삭제
     */


    function header_fixed(){
        if(device_status = 'mobile'){
            if(scrolling > 0){
                $('header').addClass('fixed')
            }else{
                $('header').removeClass('fixed')
            }
        }
    }
    header_fixed() 
    $(window).scroll(function(){
        header_fixed() 
    })




 /*********-------모바일에서 header fixed 클래스 추가 _ 끝 ----------****/







})//$(document).ready  /**news의 swiper 종료 */