$(document).ready(function(){ 

    let tab_name //변수 생성

    $('.news .tab_list ul li button').on('click', function(){
        tab_name = $(this).parent().attr('data-panel') //: 자신의(this) 부모(parent)의 data-panel 값(attr)
        console.log(tab_name)

        $(this).attr('title', '선택됨')
        $(this).html('<span>선택됨</span>')
    })

})// $(document).ready