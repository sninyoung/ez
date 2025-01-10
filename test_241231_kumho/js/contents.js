/*
* contents.js
* 각각의 콘텐츠 페이지에서 작동될 스크립트 저장
*/


console.log('열림')
$(document).ready(function(){

    if($('.sub_contents').hasClass('cnt_history')){
        let area_name = $('.cnt_history')
        let obj_name = $('.cnt_history .history_tab')
        let obj_anchor
        let area_scroll
        let area_top
        let area_h
        let area_btm
        let scrolling
        let window_h
        let tab1_name = $('.cnt_history #history_2010')
        let tab1_top
        let tab2_name = $('.cnt_history #history_2000')
        let tab2_top
        let tab3_name = $('.cnt_history #history_1990')
        let tab3_top
        let tab4_name = $('.cnt_history #history_1980')
        let tab4_top

        obj_name.find('li').on('click', function(){
            obj_anchor = $(this).attr('data-anchor')
            area_scroll = $('.cnt_history #'+ obj_anchor).offset().top - window_h*0.49
            //console.log(area_scroll)
            //$(window).scrollTop(area_scroll)
            $('html, body').animate({
                scrollTop: area_scroll
            }, 500)
        })
        function history_tab_show(){
            area_top = area_name.offset().top
            area_h = area_name.height()
            area_btm = area_top + area_h
            scrolling = $(window).scrollTop()
            window_h = $(window).height()
            tab1_top = tab1_name.offset().top
            tab2_top = tab2_name.offset().top
            tab3_top = tab3_name.offset().top
            tab4_top = tab4_name.offset().top

            if(scrolling > area_top){ 
                /*나오는 시기 조정 
                area_top 대신에 밑의 값을 넣어줌으로..
                (area_top - window_h/3)  :브라우저 높이의 1/3k값을 빼줌
                (area_top - window_h*0.3) :브라우저 높이의 30%를 더해줌

                */
                if(scrolling > (area_btm - window_h*0.5)){
                    //console.log('그만 나와')
                    obj_name.removeClass('active')
                }else{
                    //console.log('보인다')
                    obj_name.addClass('active')
                    if(scrolling > (tab4_top - window_h*0.5)){
                        obj_name.find('li').removeClass('active')
                        obj_name.find('[data-anchor="history_1980"]').addClass('active')
                        console.log('4번 탭이 보이는 중')

                    }else if(scrolling > (tab3_top - window_h*0.5)){
                        obj_name.find('li').removeClass('active')
                        obj_name.find('[data-anchor="history_1990"]').addClass('active')
                        console.log('3번 탭이 보이는 중')
                        
                    }else if(scrolling > (tab2_top - window_h*0.5)){
                        obj_name.find('li').removeClass('active')
                        obj_name.find('[data-anchor="history_2000"]').addClass('active')
                        console.log('2번 탭이 보이는 중')
                        
                    }else {
                        obj_name.find('li').removeClass('active')
                        obj_name.find('[data-anchor="history_2010"]').addClass('active')
                        console.log('1번 탭이 보이는 중')
                    }
                }
            }else{
                //console.log('아직 안보여')
                obj_name.removeClass('active')
            }
        }
        

        history_tab_show()//로딩되었을 때 한 번 실행

        $(window).resize(function(){ //리사이즈 될 때마다 실행
            history_tab_show()
        })//$(window).resize

        $(window).scroll(function(){ //리사이즈 될 때마다 실행
            history_tab_show()
        })//$(window).scroll
    }
})//$(document).ready