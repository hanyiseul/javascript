// var value = window.prompt("행운번호");
// switch(value){
// 	case"3":
// 		alert("냉장고");
// 		break;
// 	case"2":
// 		alert("세탁기");
// 		break;
// 	case"1":
// 		alert("tv");
// 		break;
// 	default:
// 		alert("꽝");
// }

//사칙연산계산기 만들기
// var num1 = window.prompt("첫번째숫자");
// var op = window.prompt("사칙연산");
// var num2 = window.prompt("두번째숫자");

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// switch(op){
// 	case"+":
// 		//alert(num1 + num2);
// 		result = num1+num2
// 		break;
// 	case"-":
// 		alert(num1 - num2);
// 		break;
// 	case"*":
// 		alert(num1 * num2);
// 		break;
// 	case"/":
// 		alert(num1 / num2);
// 		break;
// 	default:
// 		alert("error");
// }
// alert(num1+op+num2+"="+result);

//랜덤 경품 추첨기
$(document).ready(function(){
	$('.btnClick').click(function(){

		var value = parseInt(Math.random()*10)+1;

		switch(value){
			case"1":
				alert("냉장고");
				break;
			case"5":
				alert("세탁기");
				break;
			case"8":
				alert("tv");
				break;
			default:
				alert("error");
		}
	});
});

$(document).ready(function(){
	var x = 50;
	var y = 200;

	$(document).keydown(function(e){
		console.log("입력한 키 코드 값 ="+e.keyCode);
		
		switch(e.keyCode){
			case 37:
				x-=50;
				break;
			case 39:
				x+=50;
				break;
			case 38:
				y-=50;
				break;
			case 40:
				y+=50;
				break;
		}

		if(x<0){
			x=0;
		}else if(x>500-120){
			x=500-120;
		}else if(y<0){
			y=0;
		}else if(y>500-70){
			y=500-70;
		}
		console.log(x,y);

		$('.box').animate({
			left:x,
			top:y
		});
	});
})