// 형변환
var a = window.prompt("나이 입력");
a = a+30;
alert(a); //결과값 a,30

var age = window.prompt("나이입력");
age = parseInt(age)+30;
alert(age); // 결과값 a+30

var result = 1 + "2";
document.write("result="+result);


// 암시적 형변환

//숫자형+문자형
var a = 10+"10" // 1010
//불린형+문자형
var a = true+"10" // true10
//불린형+숫자형
var a = true+10 //11

//숫자를 문자로
var a = 30;
var result = 1+a+10;
alert(result);

//불린값을 숫자로
var result = 2+true;
alert(result); // true 값을 1로 자동 변환하여 숫자 연산

//불린값을 문자로
var result = "2"+true;
alert(result);


//명시적 형변환

//문자 -> 숫자
//정수형
var value = "123.456"
parseInt(value); //123

var value="123"
Number(value); //123

//실수형
var value="123.456"
parseFloat(value); //123.345

var value="123.456"
Number(value); //123.456

//숫자 -> 문자
//일반문자형
var value=15;
String(value); // "15"

//16진수 문자형
var value=15;
value.toString(16); //"f"

//실수문자형
var value=123.456;
value.toFixed(2); //"123.46" 반올림 발생

//숫자를 문자로 형변환
var test1 = 15;
String(test1);
alert(test1);

$(document).ready(function(){
	var bg = 0xff0;
	$('body').css('background-color','#'+bg.toString(16));
});

$(document).ready(function(){
	setInterval(function(){
		var color = Math.random()*0xffffff; //0~fffff 사이의 랜덤 색 만들기 이때 결과는 10진수
		color = parseInt(color); // 실수를 정수로 형변환
		color = color.toString(16); // 정수를 16진수 문자로 변경
		$("body").css("background-color","#"+color); // 문자로 된 색상으로 최종 배경색 변경
	},1000);
});

//문자를 숫자로 형변환
var test = "300";
var result = parseInt(test)+10;
document.write("result="+result);

var test = "300.25";
var result = Number(test)+10;
document.write("result="+result);



var test = 100;
var result = String(test);
document.write("result="+result);

var test = "100.50"
var result = parseFloat(test)+150+parseInt("20");
document.write("result="+result);