/*
// 변수를 선언하고 그 변수에 값을 대입하지 않은 경우
var data1;
//data1 = 10 -> 변수의 값 선언
alert("data1 = "+data1);

//함수 인자 값 없이 함수를 호출하는 경우
function myFunc(data1){
	alert("data1= " + data1);
}
myFunc("value1");
// myFucn();

//존재하지 않는 객체의 프로퍼티에 접근하는 경우

//객체를 만들기 위한 생성자함수(Class)를 생성함
function MyClass(){
	this.name="ddandongne"
}
var test1 = new MyClass();
 // 위 과정을 통해 test1 인스턴스가 생성됨
alert("test1.name ="+test1.name);
alert("test1.userName ="+test1.userName);


// 연산자와 함께 사용하는 경우 
var num1 = 10;
var num2 = 20;
var result = num1+num2;
alert(result);

//document
var name = "변수"
document.write("name="+name+"<br>");

// 변수 let
let message;
message = 'hello';
alert(message);

let message2;
message2 = 'hello';
message2 = 'world';
alert(message2);

// 변수 선언하기
let admin, name2;
name2 = "john";
admin = name2;
alert(admin); //"john"

//상수 const
const myBirthday = "20.08.06";
//myBirthday = "20.00.00" 에러 ->상수는 재할당할 수 없음

//배열
var userName = ["1","2","3","4","5"];
document.write("userName[0]="+userName[0]+"<br>");
document.write("userName[1]="+userName[1]+"<br>");
document.write("userName[2]="+userName[2]+"<br>");
document.write("userName[3]="+userName[3]+"<br>");
document.write("userName[4]="+userName[4]+"<br>");
document.write("userName[5]="+userName[5]+"<br>"); // 배열 인덱스 값은 0부터 시작 0->1 1->2 ...4->5 5의 값은 없기 때문에 undefined

//배열과 반복문 응용
var userName1 = ["1","2","3","4","5"];
for(var i = 0; i < userName.length; i++){
	document.write("userName1["+i+"]="+userName1[i],"<br>");
}


// 전역변수
var globalV = "전역변수";
window.onload=function(){
	global2 = "전역변수";
}
function func1(){
	var local1 = "지역변수";
}

// 지역변수
var globalV = "전역변수";
window.onload=function(){
	var local1 = "지역변수";
}
function func1(){
	var local1 = "지역변수";
}
function func2(){
	document.write(globalV);
}

//매개변수
var globalV = "전역변수";
window.onload=function(){
	var local1 = "지역변수";
	func1(100,200);
}
function func1(num1,num2){
	var local1 = "지역변수";
	document.write("매개변수 num1="+num1+",num2="+num2);
}
*/
//멤버변수
function MyClass(){
	this.name="멤버변수";
}
MyClass.prototype.showName=function(){
	document.write("name=",this.name);
}
var objClass = new MyClass();
objClass.showName();