// 숫자연산자
var a = 10;
var result = a+20+30; // 더하기
document.write("result =" +result);

var a = 50;
var b = 20;
var result = a*b/10; // 곱하기 나누기
document.write("result="+result);

var result = 5%2;
document.write("result="+result);

//나머지 연산자를 이용하여 숫자 5가 짝수인지 홀수인지 알아내는 구문
var result = 5%2;
if(result ==0){
	alert("짝수");
} else{
	alert("홀수");
}

// 문자연산자
var str1 = "안녕하세요";
var result = str1 + "하이하이";
document.write("result="+result);

//복합연산자
var a = 10;
a+=10; // a= a+10
document.write("a="+a);

//증감연산자
var a = 10;
a++;
document.write("a="+a);

var a = 10;
a--;
document.write("a="+a);


var a = 1;
var b = ++a;
document.write("<br>",a,b);
