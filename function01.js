for(var i=1; i<=5; i++)
document.write(i+". function<br>");

function ShowName(name){
	for(var i=1; i<=5; i++)
	document.write(i+"."+name+"입니다<br>");
}

//함수호출
ShowName("안녕");
ShowName("안녕2");
ShowName("안녕3");

//1. 일반적인 함수
// function 함수이름(){
// 	실행구문;
// }

//2. 매개변수가 있는 함수
// function 함수이름([매개변수1[,매개변수2[,...]]]{
// 	실행구문;
// })

//3. 리턴값이 있는 함수
// function 함수이름([매개변수1[, 매개변수2[, ...]]]){
// 	실행구문;
// 	return 실행결과;
// }

function hello(){
	document.write("안녕하세요. 환영합니다 <br>");
}
hello();
hello();
hello();

var star="";
for(var i=1; i<=5; i++){
	for(var m=0; m<i; m++){
		star+="*";
	}
	star+="<br>";
}
function printStar(){
	document.write(star);
}
printStar();
printStar();

//지역변수

// 전역영역
// function func1(){
// 	지역영역1;
// }
// function func2(){
// 	지역영역2;
// }

function func1(){
	var name="ddandongne";
	document.write("1.name="+name+"<br>");
}
func1();
document.write("2.name="+name+"<br>");// name은 지역변수이기 때문에 전역변수에서 사용할 수 없음.

var a = 10; //전역변수
var b = 100; //전역변수
function func3(){
	var b = 20; //지역변수
	document.write("1. a="+a+"<br>"); //전역변수
	document.write("2. b="+b+"<br>"); //지역변수
	a=50;
}
func3();

document.write("3. a="+a+"<br>"); //전역변수
document.write("4. b="+b+"<br>"); //전역변수

//매개변수가 있는 함수 만들기
// function 함수이름([매개변수1,매개변수2,...]){
// 	실행구문;
// }

// function sum(num1, num2){
// 	var result = num1+num2;
// 	alert("두수의합은"+result);
// }
// sum(10,20);

//리턴값 있는 함수
// function 함수이름([매개변수1, 매개변수2, ...]){
// 	실행구문;
// 	[return 리턴값;]
// }

//무한루프를 돌며 숫자 입력받고 입력받은 수의 합을 화면에 출력
// function sample(){
// 	var sum=0;
// 	var count=1;
// 	//무한루프 시작
// 	while(true){
// 		var value=parseInt(window.prompt("수입력",1));
// 		if(value==0){
// 			document.write("종료합니다.");
// 			//함수탈출
// 			return;
// 		}
// 		//입력값 더하기
// 		sum+=value;
// 		//입력값 출력하기
// 		document.write(count+"."+sum+"<br>");
// 		count++;
// 	}
// 	document.write("총"+count+"번실행");
// }
// sample();

//구구단 출력을 함수로 만들기
function print99dan(){
	for(var i=2; i<9; i++){
		document.write(i+"단출력","<br>");
		for(var m=1; m<=9; m++){
			document.write(i+"*"+m+"="+(i*m),"<br>");
		}
		document.write("<br>");
	}
}
print99dan();

//사칙연산계산기
function calculator(op, num1, num2){
	var result="";
	switch(op){
		// case "+" :
		// 	result= num1+num2;
		// 	break;
		// case "-":
		// 	result = num1-num2;
		// 	break;
		// case "*":
		// 	result = num1*num2;
		// 	break;
		// case "/":
		// 	result = num1/num2;
		// 	break;
			
		// default :
		// 	result = "지원하지 않는 연산자입니다.";
	
		case "+" :
			result = add(num1,num2);
			break;
		case "-":
			result = sub(num1,num2);
			break;
		case "*":
			result = mul(num1,num2);
			break;
		case "/":
			result = div(num1,num2);
			break;
			
		default :
			result = "지원하지 않는 연산자입니다.";
	}
	return result;
}
function add(num1, num2){
	return num1+num2;
}
function sub(num1, num2){
	return num1-num2;
}
function mul(num1,num2){
	return num1*num2;
}
function div(num1,num2){
	return num1/num2;
}

document.write(add(20,10));
document.write(sub(20,10));
document.write(mul(20,10));
document.write(div(20,10));

// $(document).ready(function(){
// 	//이미지 찾기
// 	var $images=$(".box");

// 	//이미지 개수 구하기
// 	var length = $images.length;

// 	//이미지 배열하기
// 	for(var i=0; i<length; i++){
// 		//n번째 이미지 구하기
// 		var $img = $images.eq(i);
		
// 		//위치값 구하기
// 		var x = 100+((i%3)*200);
// 		var y = 100+(parseInt(i/3)*200);

// 		//위치설정
// 		$img.css({
// 			left:x,
// 			top:y
// 		})
	
// 	}
// })

var $images = null;
$(document).ready(function(){
	$images = $(".list");
	showGallerty(5,150,150);
});
function showGallerty(count,width,height){
	var length = $images.length;
	for(var i=0; i<length; i++){
		var $img =$images.eq(i);
		var x = 100+((i%count)*width);
		var y = 100+(parseInt(i/count)*height);
		$img.css({
			left:x,
			top:y
		});
	}
}