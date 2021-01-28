//중복코드 제거 및 코드 재사용성

//10,15,19가 홀수인지 짝수인지 계산
var n1=10;
document.write(n1+"은");
if(n1%2){
	document.write("홀수<br>");
}else{
	document.write("짝수<br>");
}

var n2=15;
document.write(n2+"은");
if(n2%2){
	document.write("홀수<br>");
}else{
	document.write("짝수");
}
var n3=19;
document.write("홀수<br>");
if(n3%2){
	document.write("홀수<br>");
}else{
	document.write("짝수<br>");
}

function odd(value){
	// var n1=10;
	document.write(value+"은");
	if(value%2){
		document.write("홀수<br>");
	}else{
		document.write("짝수<br>");
	}
}
odd(10);
odd(15);
odd(19);

//코드 그룹화
