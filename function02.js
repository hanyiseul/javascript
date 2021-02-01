//중복코드 제거 및 코드 재사용성

//10,15,19가 홀수인지 짝수인지 계산
// var n1=10;
// document.write(n1+"은");
// if(n1%2){
// 	document.write("홀수<br>");
// }else{
// 	document.write("짝수<br>");
// }

// var n2=15;
// document.write(n2+"은");
// if(n2%2){
// 	document.write("홀수<br>");
// }else{
// 	document.write("짝수");
// }
// var n3=19;
// document.write("홀수<br>");
// if(n3%2){
// 	document.write("홀수<br>");
// }else{
// 	document.write("짝수<br>");
// }

// function odd(value){
// 	// var n1=10;
// 	document.write(value+"은");
// 	if(value%2){
// 		document.write("홀수<br>");
// 	}else{
// 		document.write("짝수<br>");b
// 	}
// }
// odd(10);
// odd(15);
// odd(19);

//코드 그룹화
// $(document).ready(function(){
// 	// 첫번째 탭메뉴 처리

// 	// 선택한 탭메뉴를 저장할 변수
// 	var $selectMenuItem=null;

// 	//메뉴 항목에 클릭 이벤트 등록
// 	$('#tabMenu li').click(function(){
// 		//기존 선택 메뉴 항목이 있으면 비선택 상태로 만들기
// 		if($selectMenuItem !=null){
// 			$selectMenuItem.removeClass("select");
// 		}

// 		//클릭한 메뉴 항목을 신규 선택 메뉴 항목으로 저장
// 		$selectMenuItem=$(this);
// 		//선택상태로 만들기
// 		$selectMenuItem.addClass("select");
// 	})

// 	// 두번째 탭메뉴 처리

// 	var $selectMenuItem2=null;
// 	$("#tabMenu2 li").click(function(){
// 		if($selectMenuItem2!=null){
// 			$selectMenuItem2.removeClass("select");
// 		}
// 		$selectMenuItem2=$(this);
// 		$selectMenuItem2.addClass("select");
// 	})
// });

//매개변수
$(document).ready(function(){
	tabMenu("#tabMenu li");
	tabMenu("#tabMenu2 li");
});

function tabMenu(selector){
	//선택 한 탭메뉴를 저장할 변수
	var $selectMenuItem=null;

	//메뉴 항목에 클릭 이벤트 등록
	$(selector).click(function(){
		//기존 선택 메뉴 항목이 있으면 비선택 상태로 만들기0
		if($selectMenuItem!=null){
			$selectMenuItem.removeClass("select");
		}
		//클릭한 메뉴 항목을 신규 선택 메뉴 항목으로 저장
		$selectMenuItem=$(this);

		//선택상태로 만들기
		$selectMenuItem.addClass("select");
	})
}