$(document).ready(function(){

    //제이쿼리를 이용하여 html 태그의 크기설정 및 반환
    //width() : html태그의 컨텐츠 영역의 너비
    //height() : html태그의 컨텐츠 영역의 높이
    //innerWidth() : html태그의 padding 영역까지의 너비
    //innerHeight() : html태그의 padding 영역까지의 높이
    //outerWidth() : html태그의 border 영역까지의 너비
    //outerHeight() : html태그의 border 영역까지의 높이
    //outerWidth(true) or outerHeight(true) : html태그의 margin 영역까지의 너비높이
    $("#div01Btn1").on("click", function(){
        var text="";
        text += "div의 너비 : "+$("#div01Div1").width() + "<br>";
        text += "div의 높이 : "+$("#div01Div1").height() + "<br>";
        $("#div01Div1").html(text);
        //.text()함수를 쓰면 <br>도 문자열 그대로 들어간다, 그래서 .html()함수 써야한다
    });

});