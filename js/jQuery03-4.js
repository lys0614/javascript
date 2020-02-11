$(document).ready(function(){
    $("#myInput").on("keyup", function(){
        //this = 현재 선택한 태그, 콜백 함수 내에서 현재 선택한 태그를 지칭할때 사용하는 기호
        var value = $(this).val().toLowerCase();
        //toLowerCase() : 모두 영문 소문자로 변형
        
        $("#myTable tr").filter(function(){
            //toggle() : 괄호안의 데이터를 숨겼다가 보였다가 하는거
            //indexOf() : 문자열 안에서 괄호안의 글자의 위치를 반환해줌
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > 1);//myInput에 입력한 문자열이 myTable의 tr에 있을때, 영문자 소문자로 치환하고 해당 데이터를 보여주겠다는 뜻
        });
    });
});