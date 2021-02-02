//변수에 함수를 저장한 경우
function hello(name){
	document.write(name+"님 환영합니다.");
}
hello("웹동네");
var func=hello;
func("딴동네"); // 변수에 함수를 저장하면 변수를 함수처럼 사용 가능


//매개변수 값으로 함수 사용

//매개변수 값으로 함수를 사용한 경우
function hello1(){
	alert("hello.");
}
function hello2(){
	alert("안녕하세요.");
}
function execute(func){
	func();
}
execute(hello1);
execute(hello2); // 함수를 매개변수 값으로 넘겨 매개변수를 일반 함수처러 ㅁ사용


//리턴값으로 함수 사용하기

//함수는 어떤값(데이터)이든 리턴할 수 있음. 이는 리턴값으로 함수를 리턴할 수 있다는 의미

//리턴값을 함수로 사용한 경우
function createHello(){ //createHello() 함수 내부에 있는 hello() 함수를 리턴값으로 하면 함수 외부에서 사용 가능
	function hello(user){
		document.write(user+"님");
	}
	return hello;
}
var result=createHello();
result("웹동네");

//함수 리터럴과 익명 함수
