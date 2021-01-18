//자바스크립트 버전

//li 글자색 변경
// window.onload=function(){
// 	var menu2=document.getElementById("menu2");
// 	var liList=menu2.getElementsByTagName("li");

// 	for(var i=0; i<liList.length; i++){
// 		var li = liList[i]
// 		li.style.color="#f00";
// 	}
// }

//제이쿼리 버전
$(document).ready(function(){
	// li 글자색 변경
	$("#menu2 li").css("color","red");

	$('.btn').click(function(){
		$('.box').animate({
			left:"100px"
		},1000);
	});

	// $('.btnClick').click(function(){
	// 	alert("안녕하세요");
	// });

	// $('.btnClick').on("click",function(){
	// 	alert("안녕하세요");
	// });

	$('.btnClick').click(function(){
		$('.box').css({"border": "1px solid blue" ,"width":"100px"}).text("안뇽");
	});
});