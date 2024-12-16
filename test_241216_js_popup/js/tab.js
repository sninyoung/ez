$(document).ready(function(){ 

    let tab_name //변수 생성

    $('.news .tab_list ul li').on('click', function(){
        tab_name = $(this).find('button').text()
        console.log(tab_name)
    })

})// $(document).ready