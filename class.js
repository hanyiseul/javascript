//클래스
function calculator(){
	this.add = function(a,b){
		document.write("a+b");
	}
}

//인스턴스
//var tabMenu = new TabMenu();

// 클래스 내부 함수 호출
function calculator(){
	this.add = function(a,b){
		alert("합"+(a+b));
	}
	this.sub = function(a,b){
		alert("차"+(a-b));
	}
	this.mul = function(a,b){
		alert("곱"+(a*b));
	}
	this.div = function(a,b){
		alert("나누기"+(a/b));
	}
}
var cal1 = new calculator;
cal1.add(10,20);
