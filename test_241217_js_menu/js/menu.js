
/*
    pc버전에서  메뉴에 마우스를 오버하면
    1. header에 menu_pc 클래스 추가
    2. header .gnb .gnb_wrap ul.depth1 > li 에 active 클래스 추가

    >> 이벤트 대상(마우스 오버 대상) : header .gnb .gnb_wrap ul.depth1 > li = this

 */


$(document).ready(function(){ 
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){ //1차메뉴의 li에 마우스를 오버하면 header에 menu_pc 클래스를 넣어준다.
        $('header').addClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active') //active 넣어주기 전에 1차메뉴의 li에 있는 모든 active를 삭제해줌.
        $(this).addClass('active')

    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active') //active 넣어주기 전에 1차메뉴의 li에 있는 모든 active를 삭제해줌.
    
    })

})// $(document).ready


