$(document).ready(function(){

    //제이쿼리를 이용하여 html 태그의 크기설정 및 반환
    //width() : html태그의 컨텐츠 영역의 너비(설정/반환)
    //height() : html태그의 컨텐츠 영역의 높이(설정/반환)
    //innerWidth() : html태그의 padding 영역까지의 너비(반환)
    //innerHeight() : html태그의 padding 영역까지의 높이(반환)
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
    $("#div01Btn2").on("click", function(){
        var text="";
        $("#div01Div1").width("500px");
        $("#div01Div1").height("300px");
        text += "너비 : " + $("#div01Div1").width() + "<br>";
        text += "높이 : " + $("#div01Div1").height() + "<br>";
        $("#div01Div1").html(text);
    });
    $("#div01Btn3").on("click", function(){
        var text="";
        $("#div01Div1").css("padding","40px");
        $("#div01Div1").css("margin","40px");
        $("#div01Div1").innerWidth();
        $("#div01Div1").innerHeight();
        text += "inner너비 : " + $("#div01Div1").innerWidth() + "<br>";
        text += "inner높이 : " + $("#div01Div1").innerHeight() + "<br>";
        $("#div01Div1").html(text);
    });
    $("#div01Btn4").on("click", function(){
        var text="";
        $("#div01Div1").css("padding","40px");
        $("#div01Div1").css("margin","40px");
        $("#div01Div1").outerWidth();
        $("#div01Div1").outerHeight();
        text += "outer너비 : " + $("#div01Div1").outerWidth() + "<br>";
        text += "outer높이 : " + $("#div01Div1").outerHeight() + "<br>";
        $("#div01Div1").html(text);
    });
    $("#div01Btn5").on("click", function(){
        var text="";
        $("#div01Div1").css("padding","40px");
        $("#div01Div1").css("margin","40px");
        $("#div01Div1").outerWidth(true);
        $("#div01Div1").outerHeight(true);
        text += "outer(true)너비 : " + $("#div01Div1").outerWidth(true) + "<br>";
        text += "outer(true)높이 : " + $("#div01Div1").outerHeight(true) + "<br>";
        $("#div01Div1").html(text);
    });

    
});