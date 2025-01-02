/* common.js
header/footer 공통요소에 들어가는 스크립트 지정
모든 페이지에서 공통으로 작동되는 스크립트
 */


$(document).ready(function(){
    let scrolling = 0 //현재 스크롤 된 값
    let prev_scroll //이전에 스크롤 된 값
    
    
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
                console.log('내려감')
            }else{
                $('header').removeClass('scroll_down')
                console.log('올라감')
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
    
    /***********--------header에 fixed랑 scroll_down 추가 (종료)-------******** */



})//$(document).ready
