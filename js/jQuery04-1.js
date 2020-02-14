//문1) 버튼클릭 시 화면에 현재 내점수와 등급을 출력하는 프로그램작성
//문2) 로그인 버튼 클릭시 입력된 id와 password를 비교하여 컴퓨터에 저장된 id/pw 가 맞으면 로그인 되는 프로그램 안맞으면 오류 메시지

$(document).ready(function(){
    $("#div01Btn1").on("click", function(){
        GradeExit();
    });
    $("#div02Btn1").on("click", function(){
        LogIn();
    });

    function GradeExit(){
        var point = $("#div01Input1").val();
        if(point >=90){ var grade = "A";}
        else if(point >=80){ var grade = "B";}
        else if(point >=70){ var grade = "C";}
        else if(point >=60){ var grade = "D";}
        else{var grade = "F";}
        alert("점수 : "+point+", 등급 : "+grade);
        $("#div01Input1").val('');
        $("#div01Input1").focus();
    }

    function LogIn(){
        var Uid = $("#div02Userid").val();
        var Upw = $("#div02Userpw").val();
        if(Uid == "abcd"){
            if(Upw == null){
                alert("패스워드를 입력하세요")
            }
            else if(Upw == "1234"){
                alert("로그인 성공");
                $("#div02").css("display","none");
                $("#div03").css("display","table")
                $("#div03 p").text(" "+Uid+"님");
            }
            else{
                alert("비밀번호가 잘못되었습니다");
                $("#div02Userpw").val('');
                $("#div02Userpw").focus();
            }
        }
        else{
            alert("없는 ID 입니다");
            $("#div02Userid").val('');
            $("#div02Userid").focus();
        }

    $("#div03Btn1").one("click", function(){
        $("#div03").css("display","none");
        $("#div02").css("display","table");
        alert("로그아웃 되었습니다");
        $("#div02Userid").val('');
        $("#div02Userpw").val('');
    });
    }
});