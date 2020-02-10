$("document").ready(function(){
    // html DOM을 조작하기 위한 jQuery 변수
        //text() : html요소의 텍스트 내용을 설정하거나 반환함(html코드제외)
            //사용법
            //$(선택자).text() : 텍스트 내용 출력
            //$(선택자).text("텍스트내용") : 텍스트내용 설정
        //html() : html요소의 내용을 설정하거나 반환(html코드 포함)
            //사용법
            //$(선택자).html() : 내용 가져오기
            //$(선택자).html("입력할내용") : 내용 설정
        //val() : html요소의 속성값을 설정하거나 반환함(html요소가 value속성을 가지고 있을경우 value값을 설정하거나 반환함)
            //사용법
            //$(선택자).val() : value값 가져오기
            //$(선택자).val("내용") : value 값 설정하기
        //attr() : html요소의 속성을 설정하거나 반환함
            //사용법
            //$(선택자).attr(속성명); : 속성값 가져오기
            //$(선택자).attr(속성명, 입력할값) : 속성값 설정하기
            
    $("#div01Btn1").on("click", function(){
        alert("text : "+ $("#div01Test").text());
    });
    $("#div01Btn2").on("click", function(){
        alert("text : "+ $("#div01Test").html());
    });
    $("#div01Btn3").on("click", function(){
        alert("value : "+ $("#div01Input").val());
    });
    $("#div01Btn4").on("click", function(){
        alert("href : " + $("#div01Link").attr("href"));
    });
///////////////////////////////////////////////////////////////////////////
    $("#div02btn1").on("click", function(){
        $("#div02txt1").text("text()를 실행하여 변경된 text");
    });
    $("#div02btn2").on("click", function(){
        $("#div02txt2").html("html()을 실행하여 변경된 html : <b>태그 넣음</b>");
    });
    $("#div02btn3").on("click", function(){
        $("#div02txt3").val("제이쿼리 3.4.1 사용");
    });

    $("#div02btn4").on("click", function(){
        $("#div02test4").attr("href", "https://www.naver.com");
        $("#div02test4").text("네이버 홈페이지");
    });
});