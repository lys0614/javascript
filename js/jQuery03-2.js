$(document).ready(function(){

    // 제이쿼리를 이용한 트래버싱
    // 조상 태그 선택 함수
    // parent() : 지정한 HTML 태그의 한단계 위의 부모 태그 선택
    // parents() : 지정한 HTML 태그의 모든 조상 태그를 선택(HTML태그까지 반환)
    // parentsUntil() : 2개의 HTML 태그를 선택하고 2개의 태그 사이에 있는 조상태그를 선택
    $("#div01 span").parent().css({
        "color" : "red",
        "border" : "5px dashed black"
    });

    // $("#div02 span").parents().css({
    //     "color" : "pink",
    //     "border" : "2px dotted red",
        
    // });
    
    $("#div03 span").parentsUntil("#div03 > div").css({
        "color" : "blue" ,
        "border" : "3px solid green"
    });

    // 후손 태그 선택 함수
    // children() : 지정한 태그의 한단계 아래 자손태그를 선택
        // 형제 선택자 사용 시 자손 태그 중에서 하나를 선택하는것도 가능
    // find() : 지정한 태그의 모든 후손태그 선택

    $("#div04 > div").children(".first").css({
        "color" : "green",
        "border" : "3px solid red"
    })

    // $("#div04 > div").children().css({
    //     "color" : "green",
    //     "border" : "3px solid red"
    // })

    // $("#div05 > div").find("span").css({
    //     "color" : "green",
    //     "border" : "3px solid red"
    // });
    
    $("#div05 > div").find("*").css({
        "color" : "green",
        "border" : "3px solid red"
    });

    //형제 태그 선택
    //siblings() : 지정한 태그의 모든 형제 태그 선택
    //next() : 지정한 태그의 다음 형제 태그 선택
    //nextAll() : 지정한 태그의 다음 모든 형제 태그 선택
    //nextUntil() : 지정한 두 태그 사이에 잇는 모든 형제 태그 선택
    //prev() : 지정한 태그의 이전 태그 선택
    //prevAll() : 지정한 태그의 이전 모든 형제 태그 선택
    //prevUntil() : 지정한 두 태그 사이에 있는 모든 형제 태그 선택

    // $("#div061 > h2").siblings().css({
    //     "color" : "red",
    //     "border" : "3px solid green"
    // });

    //siblings() : 지정한 태그의 모든 형제 태그 선택
    // siblings()의 매게변수로 선택자 사용 시 형제 태그들 중에서 매개변수로 지정한 태그만 선택됨
    $("#div061 > h2").siblings("p").css({
        "color" : "red",
        "border" : "3px solid green"
    });

    //next() : 지정한 태그의 다음 형제 태그 선택
    $("#div071 > h2").next().css({
        "color" : "red",
        "border" : "3px solid green"
    });
    
    //nextAll() : 지정한 태그의 다음 모든 형제 태그 선택
    $("#div081 > span").nextAll().css({
        "color" : "red",
        "border" : "3px solid green"
    });

    //nextUntil() : 지정한 두 태그 사이에 잇는 모든 형제 태그 선택
    $("#div091 > h2").nextUntil("#div091 > h6").css({
        "color" : "red",
        "border" : "3px solid green"
    });

    //prev() : 지정한 태그의 이전 태그 선택
    $("#div101 > h2").prev().css({
        "color" : "red",
        "border" : "3px solid green"
    });

    //prevAll() : 지정한 태그의 이전 모든 형제 태그 선택
    $("#div111 > h2").prevAll().css({
        "color" : "red",
        "border" : "3px solid green"
    });

    //prevUntil() : 지정한 두 태그 사이에 있는 모든 형제 태그 선택
    $("#div121 > h6").prevUntil("#div121 > h2").css({
        "color" : "red",
        "border" : "3px solid green"
    });
});