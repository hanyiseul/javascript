// for 단일문
for(var i = 1; i<=10; i++){
	document.write(i+"seulli<br>");
}

for(var i=0; i<10; i++){
	document.write("i="+i, "<br>");
}
document.write("종료 i =" + i+"<br>");

for(var i=0; i<10; i++){
	document.write((i+1)+"<br>");
}

//별찍기
var result="";
for(var i=0; i<10; i++){
	result+="*";
}
document.write("result="+result+"<br>");

//배열+ for 활용
var data=["변수","연산자","형변환","조건문if","조건문switch","반복문for","반복문while","함수","클래스"];
console.log(data.length);
for(var i=0; i<data.length; i++){
	document.write(i+"번째 내용="+data[i],"<br>");
}

//continue
for(var i=1; i<=10; i++){
	continue;
	document.write(i+"<br>");
}
document.write("최종"+i+"<br>");

//break
for(var i=1; i<=10; i++){
	break;
	document.write(i+"<br>");
}
document.write("최종"+i+"<br>");


// for 다중문

//별찍기

for(var i=0; i<5; i++){
	var result="";
	for(var m=0; m<=i;m++){
		result+="*";
	}
	document.write(result,"<br>");
}

//별찍기 역방향
for(var i=5; i>0; i--){
	var result="";
	for(var m=0; m<i; m++){
		result+="*";
	}
	document.write(result,"<br>");
}

//for 응용

//구구단
var dan=3;
for(i=1; i<=9; i++){
	document.write(dan+"*"+i+"="+dan*i+"<br>");
}
//배열의 총 합
var data=[10,20,30,40,50];
var result=0;
for(i=0; i<data.length; i++){
	result+=data[i];
}
document.write(result);

//박스를 가로배열
//  $(document).ready(function(){
// 	$('.btnClick').click(function(){
// 		var box = $('.box');
// 		for(var i=0; i<box.length; i++){
// 			var x =i*150;
// 			box.eq(i).animate({
// 				left:x,
// 				top:0
// 			});
// 		}
// 	});
//  });

 //박스를 가로세로 배열
  $(document).ready(function(){
	$('.btnClick').click(function(){
		var box = $('.box');
		for(var i=0; i<box.length; i++){
			var x =(i%3)*150;
			var y =(parseInt(i/3))*150;
			box.eq(i).animate({
				left:x,
				top:y
			});
		}
	});
 });