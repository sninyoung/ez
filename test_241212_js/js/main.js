$(document).ready(function(){ //html 문서가 모두 로딩될 때까지 기다렸다가 실행한다. 단한번 실행함.
    console.log('jquery 호출')
    $('#test').text('2nd jquery가 씀')

    /* box_btn을 클릭하면 box에 red라는 클래스를 추가해줌.*/
   $('.box_btn').on('click', function(){
    //box_btn을 감시하다가 click하는 순간에 실행시켜라.
    $('.box').addClass('red')
   })

    /* box_btn2을 클릭하면 box에 red라는 클래스를 추가해줌.*/
    $('.box_btn2').on('click', function(){
    //box_btn2을 감시하다가 click하는 순간에 실행시켜라.
    $('.box').removeClass('red')
   })

})

console.log('hi');

/* var랑 let */
let abc = '1' 
abc = '만세' /* '=' 은 할당연산자. 
abc= '만세'라고 넣어주면 이전 값을 지우고 자신만 들어감. */
let bbb = '2'
console.log(abc) //브라우저의 콘솔창에 로그 메시지를 출력해달라는 말. abc라고 하는 변수에 담겨있는 메세지
console.log('bbb') //변수는 절대 따옴표로 감싸면 안됨. 따옴표로 감싸면 문자를 의미함.
console.log(bbb)

let num1 = '11' //문자  
let num2 = '22'
let sum = num1 + num2

console.log(sum) //출력값 : 1122

num1 = 11 //숫자
num2 = 22
sum = num1 + num2

console.log(sum) //출력값 : 33

sum = --num1
sum+=num2

console.log(sum)

sum = 21
console.log(sum)

sum = sum + num1
if(sum > 20){ //만약 sum이라는 변수의 값이 20보다 크다면
    console.log(sum + '은 20보다 크다') //ture일 때 실행
}
sum = sum - 12
console.log(sum)
if(sum > 20){ //만약 sum이라는 변수의 값이 20보다 크다면
    console.log(sum + '은 20보다 크다') //ture일 때 실행
}
else {
    console.log(sum + '은 20보다 같거나 작다') //false일 때 실행
}

//document.querySelector('#test').innerHTML = 'jquery가 씀';
/* 
    html에서 js파일을 먼저 호출하고 다음에 html요소가 쓰임 (순서가 중요함.)
    그럼 js에서 html요소를 불러서 스타일을 줄 수가 없음 (명령을 내릴 수 없음.)
    --> 해결방법은 js를 html 아래로 내리는 것인데 이는 추천하지 않음!!
*/
