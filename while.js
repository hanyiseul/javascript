// for(var i=0; i<10000; i++){
// 	var value = window.prompt("pw입력");
// 	if(value=="1234"){
// 		alert("환영합니다.");
// 		break;
// 	}else{
// 		alert("nope");
// 	}
// }

// while(true){
// 	var value = window.prompt("pw입력");
// 	if(value=="1234"){
// 		alert("환영합니다.");
// 		break;
// 	}else{
// 		alert("nope");
// 	}
// }

//무인도 탈출 게임
// $(document).ready(function(){
// 	$(".btnClick").click(function(){
// 		var count=0;
// 		while(true){
// 			count++
// 			var num = parseInt(Math.random()*6)+1;
// 			console.log(count+"번째나온숫자="+num);
// 			if(num==3){
// 				console.log("탈출");
// 				break;
// 			}	
// 		}
// 	});
// })

// var i = 1; //초기값
// while(i<=10){
// 	i++
// 	continue;

// 	document.write(i+"<br>");
// }
// document.write("최종i="+i+"<br>");

var dan=3;
var i=1;
while(i<=9){
	document.write(dan*i);
	i++
}

var result=0;
var i=1;
while(true){
	var value=window.prompt(i+"번째입력");
	if(value=="end"){
		alert("입력종료");
		break;
	}
	result+=parseInt(value);
	document.write("현재합은="+result+"<br>");
	i++;
}