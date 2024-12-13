//tour
/*  .tour .list ul li 에 마우스를 오버하면 
    오버한 li에 active 클래스를 추가함. 
    이전에 오버했던 li에서 active 클래스를 삭제해야 함. 
    >>active 클래스는 단 한개의 li에만 들어가야 함.

    li가 많은데 그중에 마우스를 오버한 li만 찾는 방법이 $(this)임. --> 이벤트 대상= 자기 자신
    *주의사항 
    지금은 $(this)가 li이지만, 
    만약 $('.tour .list ul li a').on()으로 준다면 $(this)는 li가 아닌 a가 된다. 

    이전에 오버한 li를 찾으려면 
    오버한 li에 active 클래스를 주기 전에 모든 li의 active 클래스를 지우면 됨.
*/

//banner
/*  .banner .list ul li 에 마우스를 오버하기 전에는 클래스가 x
    li에 마우스를 오버하면 오버한 li는 on클래스를 추가한다. 나머지 li는 off클래스를 추가한다. 

    li에서 완전히 벗어나면 모든 li의 on/off클래스를 삭제함.
*/

//slide
/*
    .slide .list ul li에 data-status 이 속성에 오버한 li는 on값을, 오버하지 않은 다른 애들은 off값을,

    attr은 기존 값을 삭제하고 새로 입력한 값만 들어감.
*/




$(document).ready(function(){ //html이 모두 로딩되면 그때 단 한번 실행
    //tour
    $('.tour .list ul li').on('mouseenter', function(){
        $('.tour .list ul li').removeClass('active')  //모든 li의 active 클래스를 삭제
		$(this).addClass('active') //오버한 li에만 active 클래스 추가
	});

    //biz
    $('.biz .list ul li').on('mouseenter', function(){
        $('.biz .list ul li').removeClass('active')  //모든 li의 active 클래스를 삭제
		$(this).addClass('active') //오버한 li에만 active 클래스 추가
	});

    //banner
    $('.banner .list ul li').on('mouseenter', function(){
        $('.banner .list ul li').removeClass('on')  //나머지 li의 off 클래스를 추가
        $('.banner .list ul li').addClass('off')  //나머지 li의 off 클래스를 추가
		$(this).addClass('on') //오버한 li에만 on 클래스 추가
        $(this).removeClass('off')
	});
    $('.banner .list ul li').on('mouseleave', function(){
        $('.banner .list ul li').removeClass('on') 
        $('.banner .list ul li').removeClass('off') 
	});

    //slide
    // slide_name = $('.slide .list ul li:nth-child(2)').attr('data-status')
    // console.log(slide_name)

    // $('.slide .list ul li').attr('data-status', 'test')
    
    $('.slide .list ul li').on('mouseenter', function(){
        $('.slide .list ul li').attr('data-status', 'off') 
        $(this).attr('data-status', 'on') //오버한 li에는 off가 있었지만 this로 오버한 li에 기존 값을 지우고 on이 입력
    })
    $('.slide .list ul').on('mouseleave', function(){
        $('.slide .list ul li').attr('data-status', '')
    })


})/*$(document).ready*/

