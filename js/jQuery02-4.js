$(document).ready(function(){
    // html 요소의 class 속성 추가하기
    //addClass() : 선택한 html 요소에 하나 이상의 클래스를 추가함
        //사용법
        //$(선택자).addClass(추가할class명1, class명2, ...)
    //removeClass() : 선택한 html요소에 하나이상의 클래스를 제거함
        //사용법
        //$(선택자).removeClass(제거할클래스명1, 클래스명2, ...)
    //toggleClass() : 선택한 html 요소에 클래스를 추가/제거 전환함
    //css() : 선택한 html 요소에 css속성을 설정하거나 반환함
        //동시에 여러개의 css 속성을 설정하고자 할 경우 {속성명:속성값} = 오브젝트형 을 사용하여 입력
    $("#div01Btn01").on("click", function(){
        $("#div01 > h1, h2, p").addClass("blue");
        $("#div01 > div").addClass("important");
        //선택한 태그에 class="입력한클래스명"이 들어가는 방식
    });    

    $("#div02Btn01").on("click", function(){
        $("#div02h301").addClass("important blue");
    });

    $("#div02Btn02").on("click", function(){
        $("#div02h301").toggleClass("important blue");
    });

    $("#div02Btn03").on("click", function(){
        $("#div02h301").removeClass("blue");
    });

    $("#div03Btn1").on("click", function(){
        $("#div03h301").css("border","1px solid black");
        //css 파일이 따로 필요하지않고, css 속성을 직접 입력해서 적용하는 타입
    });

    $("#div03Btn2").on("click", function(){
        $("#div03h301").css({"background-color" : "pink", "font-size":"32px", "border":"1px solid black"});
        //오브젝트형으로 한번의 .css()에 여러개의 속성을 부여할 수도 있음.
        //다른방법으로 .css()를 여러번 해서 여러속성을 부여할수도 있음
    });
});