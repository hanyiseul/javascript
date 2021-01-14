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
