$(document).ready(function(){
    $("#div01Btn1").on("click", function(){
        var text = $("#div01Input1").val();
        var text1 = "<li>"+text+"</li>";
        $("#div01list1").prepend(text1);
        $("#div01Input1").val("");
        $("#div01Input1").focus();
    });
    $("#div01Btn2").on("click", function(){
        var text = $("#div01Input1").val();
        var text2 = "<li>"+text+"</li>";
        $("#div01list1").append(text2);
        $("#div01Input1").val("");
        $("#div01Input1").focus();
    });
    $("#div01Btn3").on("click", function(){
        $("#div01 li").addClass("style1");
    });
    $("#div01Btn4").on("click", function(){
        $("#div01 li").addClass("style2");
    });
    $("#div01Btn5").on("click", function(){
        $("#div01 li").addClass("style3");
    });
    $("#div01Btn6").on("click", function(){
        $("#div01 li").removeClass();
    });
    $("#div01Btn7").on("click", function(){
        $("#div01 li").remove();
        $("#div01Input1").focus();
    });
});