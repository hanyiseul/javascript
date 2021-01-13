//함수 사용
var dan = 3;
document.write(dan+"*1 = "+(dan*1),"<br>");
document.write(dan+"*2 = "+(dan*2),"<br>");
document.write(dan+"*3 = "+(dan*3),"<br>");
document.write(dan+"*4 = "+(dan*4),"<br>");
document.write(dan+"*5 = "+(dan*5),"<br>");
document.write(dan+"*6 = "+(dan*6),"<br>");
document.write(dan+"*7 = "+(dan*7),"<br>");
document.write(dan+"*8 = "+(dan*8),"<br>");
document.write(dan+"*9 = "+(dan*9),"<br>");

function print99DAN(dan){
	//특정 기능 하는 구문 위치
	document.write(dan+"*1 = "+(dan*1),"<br>");
	document.write(dan+"*2 = "+(dan*2),"<br>");
	document.write(dan+"*3 = "+(dan*3),"<br>");
	document.write(dan+"*4 = "+(dan*4),"<br>");
	document.write(dan+"*5 = "+(dan*5),"<br>");
	document.write(dan+"*6 = "+(dan*6),"<br>");
	document.write(dan+"*7 = "+(dan*7),"<br>");
	document.write(dan+"*8 = "+(dan*8),"<br>");
	document.write(dan+"*9 = "+(dan*9),"<br>");
}
print99DAN(7);

for(var i = 0; i < 10; i++){
	for(var j = 0; j < 10; j++){
		document.write(i + '*' + j + '=' + i*j + '</br>');
	}
}

var dan = 3;
for(var i = 0 ; i < 10; i++){
	document.write(dan + '*' + i + '=' + dan*i)
}
