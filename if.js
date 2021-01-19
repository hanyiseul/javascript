//조건문이란? 특정조건에 맞는 경우에만 특정 구문을 실행하고자 할 때 사용하는 자바스크립트 제어문

// if(로또번호==당첨번호){
// 	당첨!
// };

//논리연산자

// var a = 10;
// var b = 20;
// //var result = a > b; // a 가 b보다 클 경우 true
// //var result = a==b; // 같은 경우 true
// var result = a!=b; // 같지 않은 경우 true
// alert(result);

// var a = "남자";
// var b = "개발자";
// //var result = (a=="여자") && (b=="개발자");
// var result = (a=="여자") || (b =="디자이너");
// alert(result);

// if에 논리 비교 연산자 연동하기
var a=true;
var b=false;
var c=10;
var d=20;

//1. 같다면 등가(==)
if(a==true)
	document.write("1. a==true 실행 <br>");

//2. >크다면
if(c>10)
	document.write("2. c>10 실행 <br>");

//3. >크다면
if(10>c)
	document.write("3. 10>c 실행 <br>");

//4. <작다면
if(c<10)
	document.write("4. c<10 실행 <br>");

//5. <=작거나 같다면
if(d<=20)
	document.write("5. d<=20 실행 <br>");

//6. 같지 않다면, 부등가(!=)
if(b!=true)
	document.write("6. b!=실행 <br>");

var a=true;
var b=false;
if(a==false||b==true)
	document.write("1. a==true||b==ture 실행<br>");

var a=true;
var b=false;
if(a==1&&b==0)
	document.write("2. a==1&&b==0 실행<br>");

//아이디 확인하기
// var userId = window.prompt("사용자 아이디?");
// var id = false;
// while(!id){
// 	if(userId=="seulli"){
// 		alert("환영합니다.");
// 		id = true;
// 	}else{
// 		alert("다시입력");
// 		var userId = window.prompt("사용자 아이디?");
// 	}
// }

// 수 입력받기
// var value = window.prompt("수입력");
// value=parseInt(value);
// if(value%2==0){ // 0으로 나뉘면 true(짝수) 0으로 나뉘지 않으면 flalse(거짓)
// 	alert("짝수");
// }else{
// 	alert("홀수");
// }

// var value = window.prompt("수입력");
// if(value==10){
// 	alert("정답");
// }else{
// 	alert("오답");
// }

// 박스 이동시키기
// $(document).ready(function(){
// 	$(".btn").click(function(){
// 		var x = window.prompt("left");
// 		if(x>=0){
// 			$('.box').animate({
// 				left:x+"px"
// 			},1000);
// 		}else{
// 			alert("x");
// 		}
// 	});
// });

//교재정답
// $(document).ready(function(){
// 	//박스 노드 구하기
// 	var $box = $('.box');

// 	//버튼에 이벤트 걸기
// 	$(".btn").click(function(){
// 		//1.값입력
// 		var value = window.prompt("x좌표값을 입력해주세요.",0);
// 		//2.문자를 숫자로
// 		value=parseInt(value);
// 		//3.비교
// 		if(value>=0 && value<=430){
// 			$box.css("left",value);
// 		}else{
// 			alert("유효한 좌표 값이 입력되지 않습니다.");
// 		}
// 	});
// })

//아이디 패스워드 확인 테스트
// var userId=window.prompt("id?");
// var userPw=window.prompt("pw?");
// if(userId=="seulli" && userPw=="1234"){
// 	alert("성공");
// }else{
// 	alert("실패");
// }

//조건문 속의 조건문
// var userId=window.prompt("id?");
// var userPw=window.prompt("pw?");

// if(userId=="seulli"){
// 	if(userPw=="1234"){
// 		alert("성공");
// 	}else{
// 		alert("실패");
// 	}
// }else{
// 	alert("실패");
// }

//로그인처리
// var userId=window.prompt("id?");
// var userPw=window.prompt("pw?");
// if(userId==".." && userPw=="1234"){
// 	alert("성공")
// }else if(userId!=".."){
// 	alert("id실패")
// }else{
// 	alert("pw실패")
// }

// var a = window.prompt("연봉");
// if(a<=100){
// 	alert("퇴사");
// }else if(a<=200){
// 	alert("이직준비");
// }else if(a<=500){
// 	alert("존버");
// }else if(a>=1000){
// 	alert("내회사");
// }

//조건부 연산자
// var value = window.prompt("수입력");
// value=parseInt(value);
// (value%2==0)?alert("참"):alert("거짓");


// var a = window.prompt("수입력");
// a=parseInt(a);
// if(a=="1"){
// 	alert("냉장고")
// }else if(a=="2"){
// 	alert("세탁기")
// }else if(a=="3"){
// 	alert("tv");
// }else{
// 	alert("실패");
// }

// var value = window.prompt("입력");
// if(value=="오른쪽" || value=="왼쪽" || value=="가운데"){
// 	alert(value+"클릭");
// }else{
// 	alert("???");
// }1

// $(document).ready(function(){
// 	$('.btn').click(function(){
// 		var x = window.prompt("가로");
// 		var y = window.prompt("세로");
// 		x=parseInt(x);
// 		y=parseInt(y);
// 		if(x>=0 && x<=500 && y>=0 && y<=300){
// 			$('.box').animate({
// 				left:x,
// 				top:y
// 			},1000);
// 			$('.wrap').css({"width":x,"height":2*y});
// 		}else{
// 			alert("다시입력");
// 		}
// 	});
// });

// $(document).ready(function(){
// 	var dCheck = false;
// 	$('.dCheckbox').click(function(){
// 		dCheck = !dCheck;
// 		if(dCheck==true){
// 			$('.checkbox').addClass("check");
// 		}else{
// 			$('.checkbox').removeClass("check");
// 		}
// 	});
// });

// $(document).ready(function(){
// 	$('.dCheckbox').click(function(){
// 		$('.checkbox').toggleClass("check");
// 	});
// });