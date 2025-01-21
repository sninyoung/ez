/*
* main.js
* main에서만 작동되는 스크립트 저장
*/

$(document).ready(function(){
    console.log('연결됨')
    
	const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

    // navigation은 글자를 클릭할 수가 없어서 사용안할거임, anchor, menu라는 다른 기능을 사용할 것임.
    navigation: false, /* 오른쪽에 각 페이지의 paging */ 
    navigationPosition: 'left', /* 위치 */
    navigationTooltips: ['Main', '나무 심기', '숲 활동', '활동 이야기', 'footer'], /* 툴팁 */
    showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
    
    lockAnchors: false,
    menu: '.quick_nav',
    anchors: ['main', 'tree', 'act', 'story'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

    autoScrolling: true, /* 한페이지씩 스크롤 */
    scrollHorizontally: true,

    verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
    
    scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

    afterLoad: function(origin, destination, direction, trigger){
        if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
            console.log('3번째 슬라이드가 로딩 되었을때');
        }
    },

    responsiveWidth: 1000, /* fullpage를 적용시키지 않을 모바일 너비 사이즈 */
    responsiveHeight: 740, /* fullpage를 적용시키지 않을 모바일 높이 사이즈 */
});//fullpage



const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		//type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		// renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		//     return '<span class="' + className + '">' + (index + 1) + "</span>";
		// },
	},
	

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
		prevEl: '.swiper-button-prev',  
	},

});//Swiper

        
})//$(document).ready  /**news의 swiper 종료 */