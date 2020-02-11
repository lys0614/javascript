// 문1)jQuery02-6.js 의 예제를 통해 div에 내부에 출력할 p태그를 생성하는 부분을 함수화 하여 동일한 프로그램을 만들기
$(document).ready(function(){
    var base = "width 300px / height 300px <br> padding 10px / border 5px solid black <br> margin 20px";
    $("#div01Div1").html(base);
    function normal(){
        var text = "";
        text += "<p>div의 너비 : "+$("#div01Div1").width() +"</p>"
        text += "<p>div의 높이 : " + $("#div01Div1").height(); + "</p>"
        $("#div01Div1").html(base + text);
    };

    function inner(){
        var text = "";
        text += "<p>div의 padding까지 너비 : "+$("#div01Div1").innerWidth()+"</p>";
        text += "<p>div의 padding까지 높이 : " + $("#div01Div1").innerHeight(); + "</p>";
        $("#div01Div1").html(base + text);
    };

    function outer(){
        var text="";
        text += "<p>div의 border까지 너비 "+$("#div01Div1").outerWidth()+"</p>";
        text += "<p>div의 border까지 높이 "+$("#div01Div1").outerHeight()+"</p>";
        $("#div01Div1").html(base + text);
    }

    function outertrue(){
        var text ="";
        text += "<p>div의 margin까지 너비 "+$("#div01Div1").outerWidth(true)+"</p>";
        text += "<p>div의 margin까지 높이 "+$("#div01Div1").outerHeight(true)+"</p>";
        $("#div01Div1").html(base + text);
    }
    $("#div01Btn1").on("click", function(){
        normal();
    });
    $("#div01Btn2").on("click", function(){
        inner();
    })
    $("#div01Btn3").on("click", function(){
        outer();
    });
    $("#div01Btn4").on("click", function(){
        outertrue();
    });
    
});