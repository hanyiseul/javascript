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
 // 위 과정을 통해 Shirt1이란 인스턴스가 생성됨
alert("test1.name ="+test1.name);
alert("test1.userName ="+test1.userName);


commit test