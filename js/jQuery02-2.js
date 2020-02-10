$("document").ready(function(){
    // 문1)
    $("#div01btn1").on("click", function(){
        $("#div01link1").attr("href", "https://www.youtube.com");
        $("#div01link1").text("유튜브 홈페이지");
    });
    $("#div01btn2").on("click", function(){
        $("#div01link2").attr("href", "https://www.google.com");
        $("#div01link2").text("구글 홈페이지");
    });
    $("#div01btn3").on("click", function(){
        $("#div01link3").attr("href", "http://www.inven.co.kr/webzine/");
        $("#div01link3").text("인벤 홈페이지");
    });
   
    $("#div01btn4").on("click", function(){
        var a = $("#div01input1").val();
        var b = $("#div01input2").val();
        $("#div01link4").attr("href",a);
        $("#div01link4").text(b);
    });
});