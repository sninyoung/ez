$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: false, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['Main', '나무심기', '숲 활동', '활동이야기'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */	
		/* navigation은 글자를 클릭할 수가 없음 - 다른 기능을 사용 anchor, menu */
		
		lockAnchors: false, /* anchor를 사용하려면 해제 */
		menu: '.quick_nav',
		anchors: ['main', 'tree', 'introduce', 'story'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

		autoScrolling: true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,
		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				console.log('3번째 슬라이드가 로딩 되었을때');
			}
		},
		responsiveWidth: 1000, /* fullpage를 적용시키지 않을 모바일 사이즈 */
		responsiveHeight: 700,
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
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
			renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
		

		navigation: {  /* 이전, 다음 버튼 */
			nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
			prevEl: '.swiper-button-prev',  
		},

	});
})//document.ready