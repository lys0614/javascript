$(document).ready(function(){
    // 제이쿼리를 이요한 트레버싱(필터링)
    // first() : 지정한 요소의 첫번째 요소를 선택
    // 선택자가 여러 요소를 탐색했을 때 .first를 통해 제일 먼저 찾아진 요소만을 선택할 수 있다
    $("#div01 > div").first().css({
        "background-color" : "pink"
    });
    
    // last() : 지정한 요소의 마지막 요소를 선택
    $("#div02 > div").last().css({
        "background-color":"pink"
    });
    // eq() : 지정한 요소의 특정 색인번호 번째의 요소를 선택
    // eq() 사용 시 색인번호는 0부터 시작함
    $("#div03 > p").eq(1).css({
        "background-color":"pink"
    });
    // filter() : 조건으로 입력한 요소를 선택
    $("#div04 > p").filter(".p1").css({
        "background-color":"pink"
    });

    // not() : 조건으로 입력한 요소와 일치하지않는 요소를 선택
    $("#div05 > p").not(".p1").css({
        "background-color":"pink"
    });
    
});