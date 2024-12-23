
/*
    pc버전에서  메뉴에 마우스를 오버하면
    1. header에 menu_pc 클래스 추가
    2. header .gnb .gnb_wrap ul.depth1 > li 에 active 클래스 추가

    >> 이벤트 대상(마우스 오버 대상) : header .gnb .gnb_wrap ul.depth1 > li = this

    >> 키보드 접근성 : 마우스 오버가 아니라 키보드 tab키를 눌러서 메뉴를 선택하고

    >> 메뉴는 pc메뉴에서 작동되는 jquery, 모바일 메뉴에서 작동되는 jquery가 다름
       pc와 모바일을 구분하는 것은 단순히 브라우저의 너비.

    ------------------------------------------------------------
    모바일 메뉴 규칙
    1. 다른 메뉴를 열면 이전에 열려있던 메뉴는 닫힘.
    2. 하나의 메뉴를 한 번 누르면 열리고 다시 누르면 닫힘.
        (닫혀있는 메뉴를 누르면 열리고, 열려있는 메뉴를 누르면 닫힘.)

    >> 현재 클릭한 메뉴가 열린 메뉴인지 확인
    1. 클릭한 메뉴가 열린 메뉴일 때 -> 클릭한 자신의 open 클래스를 삭제함.
    2. 클릭한 메뉴가 열린 메뉴가 아닐 때 -> 모든 메뉴의 open 클래스를 삭제하고 클릭한 자신만 open 클래스를 추가

    header .gnb .gnb_wrap ul.depth1 > li에 open 클래스 추가
    이벤트 대상 (누구를 눌렀을 때 이벤트가 발생할 지) :  header .gnb .gnb_wrap ul.depth1 > li > a

    a에는 href값이 있어서 누르면 그 링크로 감
    모바일에서는 a태그의 이벤트를 정지시켜야 함.


    header .gnb .gnb_open을 클릭하면  header에  menu_mo 추가
    header .gnb .gnb_close 클릭하면  header에  menu_mo 삭제

 */


$(document).ready(function(){ 
   
    let device_status //변수 선언, pc면 pc라는 값이 저장, 모바일이며 모바일의 값을 저장함.
    let window_w
    let menu_status

     //-----------pc---------------
    function device_chk(){ //함수 정의
        window_w = $(window).width()
        if(window_w > 640){ //640보다 크면 = 641부터 = pc일 때
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }

    device_chk() //html 문서가 로딩되고 나면 단 한 번만 실행 
    $(window).resize(function(){ //브라우저가 리사이즈 될 때마다 한 번 실행 
        device_chk() //함수실행
    })


    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){ //1차메뉴의 li에 마우스를 오버하면 header에 menu_pc 클래스를 넣어준다, //focusin : tab을 누르면 메뉴로 가도록
        if(device_status == 'pc'){
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active') //active 넣어주기 전에 1차메뉴의 li에 있는 모든 active를 삭제해줌.
            $(this).addClass('active')
        }
    })

    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active') //active 넣어주기 전에 1차메뉴의 li에 있는 모든 active를 삭제해줌.
    })

    //키보드 tab이동으로 메뉴를 아웃시키는 것은 마지막 1차 메뉴의 마지막 2차메뉴에서 포커스가 사라지면 메뉴를 닫는다.
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('focusout', function(){ 
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active') 
    })




    //------------모바일---------------
    $('header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
        if(device_status == 'mobile'){
        }
    })

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
		if(device_status == 'mobile'){
            e.preventDefault();	/* a 태그의 href를 작동 시키지 않음 */

            menu_status = $(this).parent().hasClass('open') //대입연산자를 이용해서 변수에 값을 넣어줌.
            console.log(menu_status)
            
            if(menu_status == true){ //클릭한게 열려있는 메뉴라면
                $(this).parent().removeClass('open') 
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li ').removeClass('open') 
                $(this).parent().addClass('open') 
            }
        }
	});

    //header .gnb .gnb_open을 클릭하면  header에  menu_mo 추가
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_mo')
    })
    
    //header .gnb .gnb_close 클릭하면  header에  menu_mo 삭제
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_mo')
    })
            


})// $(document).ready


