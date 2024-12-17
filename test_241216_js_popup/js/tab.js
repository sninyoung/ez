/* 
    1. 클릭한 .news .tab_list ul li에 active 클래스 추가
    2. 클릭한 .news .tab_list ul li button에 title="선택됨"이라고 써주기
    3. 클릭한 .news .tab_list ul li의 data-panel값을 받아서
        .news .tab_contents .tab_pannel 중에 data-panel값이 같은 것 active 클래스 추가

    4. 이전에 보였던 .news .tab_list ul li에 active 클래스 삭제
    5. 이전에 보였던 .news .tab_list ul li button에 title="선택됨" 삭제
    6. 이전에 보였던 .news .tab_contents .tab_pannel의 active 클래스 삭제

    관건은 누구를 클릭했을 때 이벤트가 발생할 것인가?
    .news .tab_list ul li 와  .news .tab_list ul li button의 현재 크기는 동일함.
    li를 클릭하는 걸로 하겠음.

    이미 선택된 것을 또 누를 때는 아예 작동하면 안됨.
    선택되어 있는지 구별하는 방법
     1. $(this).attr('data-panel')의 값과 curr_panel 값이 같으면 
     2. active 클래스가 있으면 선택된 탭임.
*/

//현재 this(자신) = li임.
$(document).ready(function(){ 

    //변수 선언
    let curr_panel = 'news1'//현재 클릭한 패널 이름=이미 html에서 news1이 선택되어 있음.
    let prev_panel //이전에 클릭했던 패널 이름
    let cont_h //컨텐츠 높이
    let tab_h //탭 버튼 높이

    $('.news .tab_list ul li').on('click', function(){
        if($(this).hasClass('active') == false){ // 내가 active 클래스를 가지고 있지 않으면(=이미 선택된 버튼을 클릭한게 아니라면) 밑의 코드를 실행
            prev_panel = curr_panel //다른 탭을 클릭하자마자 오버되어 있던 탭의 이름을 이전 탭 이름으로 저장함.
            curr_panel = $(this).attr('data-panel')

            //prev_panel = 이전에 선택되어있던 패널
            $('.news .tab_list ul li[data-panel="'+prev_panel+'"]').removeClass('active')
            $('.news .tab_list ul li[data-panel="'+prev_panel+'"]').find('button').attr('title', '')
            $('.news .tab_contents .tab_pannel[data-panel="'+prev_panel+'"]').removeClass('active')

            //curr_panel = 현재 선택된 패널
            $(this).addClass('active')
            $(this).find('button').attr('title', '선택됨')
            $('.news .tab_contents .tab_pannel[data-panel="'+curr_panel+'"]').addClass('active')
        }//if문
    })//on('click')
    
    /* tab_contents가 absulute라서 감싸고 있는 요소가 높이를 인식하지 못함. 
        active 클래스가 들어간 button의 높이와 tab_content의 높이를 합쳐서 ul에 줘야 함.

        >> 브라우저 사이즈가 리사이즈 될 때, 처음에 로딩 되었을 때 active가 들어간 컨텐츠의 높이 계산이 필요함.
    */
    
    function notice_h(){
        cont_h = $('.notice .list ul li.active button').height() + $('.notice .list ul li.active .tab_contents ').height()
        $('.notice .list ul').height(cont_h)
    }//function

    notice_h()//맨처음에 로딩되었을 때 1번 실행
   
    $(window).resize(function(){ //브라우저 사이즈가 리사이즈 될때마다 1번
        console.log('리사이즈');
        notice_h()
    })
    
    $('.notice .list ul li').on('click', function(){
        if($(this).hasClass('active') == false){
           $('.notice .list ul li').removeClass('active')
           $(this).addClass('active')
           cont_h = $(this).find('button').height() + $(this).find('.tab_contents').height()
           /*padding값까지 같이 주려면 outerHeight()를 쓰거나, 
            h3, p, .more를 div.inner로 감싸주고 height()를 준다.
           */
           console.log(cont_h);
           $('.notice .list ul').height(cont_h)

        }else{
        }//if-else문
    })//on('click')

})// $(document).ready



