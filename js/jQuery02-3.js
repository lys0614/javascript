$(document).ready(function(){
    //jquery 를 이용하여 새로운 html 태그 추가
    //append() : 선택한 html 요소의 가장 끝에 추가
    //prepend() : 선택한 html 요소의 가장 앞에 추가
    //after() : 선택한 html 요소의 바로 뒤에 추가
    //before() : 선택한 html 요소의 바로 앞에 추가

    //사용법
    //$(선택자).append(추가할 내용): 추가할 내용 = html 코드 사용 가능
    var prependListCount = 0;
    var appendListcount = 0;
    $("#div01Btn1").on("click", function(){
        var text = "<p>prepend</p>";
        $("#div01p1").prepend(text);
    });
    $("#div01Btn2").on("click", function(){
        var text = "<p>after</p>";
        $("#div01Img1").after(text);
    });
    $("#div01Btn3").on("click", function(){
        var text = "<p>before</p>";
        $("#div01Img1").before(text);
    });
    $("#div01Btn4").on("click", function(){
        var text = "<p>append</p>";
        $("#div01p1").append(text);
    });
    $("#div01Btn5").on("click", function(){
        prependListCount++;
        var text = "<li>prepend" + prependListCount + "</li>";
        $("#div01Ol1").prepend(text);
    });
    $("#div01Btn6").on("click", function(){
        appendListcount++;
        var text="<li>append"  + appendListcount + "</li>";
        $("#div01Ol1").append(text);
    });

    var beforeTextCount = 0;
    var afterTextCount = 0;
    $("#div01Btn7").on("click", function(){
        beforeTextCount++;
        var text="<b> before" + beforeTextCount + "</b>";
        $("#div01Img2").before(text);
    });
    $("#div01Btn8").on("click", function(){
        afterTextCount++;
        var text="<b> after" + afterTextCount + "</b>";
        $("#div01Img2").after(text);
    });

    //jquery를 이용하여 html 요소를 삭제하기
    //remove() : 선택한 요소 및 하위 요소를 모두 제거
    //empty() : 선택한 요소의 하위 요소를 제거
    $("#div02Btn1").on("click", function(){
        $("#div02Div01").remove();
    });
    $("#div02Btn2").on("click", function(){
        $("#div02Div02").empty();
    });
});