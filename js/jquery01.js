$(document).ready(function(){//웹페이지 로딩이 다 되었을때 해당 함수를 실행하겠다는 문구
    // jquery 효과
    
    // hide/show/toggle : jQuery에서 미리 만들어 놓은 CSS효과
    // hide() : 지정한 html 태그를 숨김(=display:none; 과 같은 효과)
    // 콜백함수는 해당 명령문이 실행될때 자동으로 실행되는 함수. 익명함수라고도 한다
        // $(선택자).hide(속도, 콜백함수)
            //속도는 총 동작 시간
            //1000분의 1 초로 계산함
    // show(): 지정한 html 태그를 보이게 함(=display:inline / block; 과 같은 효과)
        // $(선택자).show(속도, 콜백함수)
    // toggle(): hide()와 show()의 기능을 돌아가며 실행
        // $(선택자).toggle(속도, 콜백함수)
    
        $("#btnHide").on("click",function(){
            $("#btnHide").hide();
            $("#btnShow").show();
            $("#div01p01").hide(500, function(){
                alert("숨기기");
            });
        });

        $("#btnShow").on("click",function(){
            $("#btnShow").hide();
            $("#btnHide").show();
            $("#div01p01").show(500, function(){
                alert("보이기");
            });
        });

        $("#btnToggle").on("click",function(){
            $("#btnHide").show();
            $("#btnShow").show();
            $("#div01p01").toggle(500, function(){
                alert("숨기기/보이기 토글");
            });
        });

    // slide() 효과
    // slideDown() : 지정한 html요소를 아래로 슬라이드
        //$(선택자).sldeDown(속도,콜백)
        //속도는 slow,fast,숫자(실질적용은 숫자/1000초)
    // slideUp() : 지정한 html 요소를 위로슬라이드
        //$(선택자).sldeUp(속도,콜백)
    // slideToggle() : 지정한 html 요소를 위/아래 슬라이드 번갈아
        //$(선택자).sldeToggle(속도,콜백)
        $("#div02flip1").on("click", function(){
            $("#div02panel1").slideDown();
        });
        $("#div02flip2").on("click", function(){
            $("#div02panel2").slideUp();
        });
        $("#div02flip3").on("click", function(){
            $("#div02panel3").slideToggle();
        });

    // 애니메이션 효과
    // animate() : 사용자 정의 애니메이션을 작성할 수 있음
    // $(선택자).animate({옵션}, 속도, 콜백) 의 형태
    // 속도와 콜백은 생략가능, 속도는 기본값으로 저장됨
        // 옵션 = css 속성을 입력 object 형을 사용하기 때문에 한번에 여러가지 css 속성을 넣을수 있음
            // 컬러 관련 css 속성은 jQuery.color 플러그인을 추가설치해야함
            // 현재 적용된 값에 증가/감소 값을 넣어서 표현이 가능함
        // 속도 = 입력한 숫자를 1/1000 해서 계산
        // 콜백 = animate 실행 된 이후 동작할 작업 부분
        // 애니메이션을 연속으로 여러개 실행할 수 있음
            // animate()를 여러개 입력시 입력된 순서에 따라 차례대로 실행됨
        // $("#div03btn01").on("click", function(){
        //     $("#div03div").animate({
        //         left:"250px",
        //         height:"400px",
        //         width:"400px",
        //         backgroundColor : jQuery.Color("orange")
        //     },500);
        // });
        $("#div03btn01").on("click", function(){
            // 애니메이션 효과 연속으로 주기 1
            // $("#div03div").animate({left: "+=250px"});
            // $("#div03div").animate({left:"500px"});
            // $("#div03div").animate({width:"400px"});
            // $("#div03div").animate({height:"400px"});
            // $("#div03div").animate({backgroundColor:jQuery.Color("red")});

            // 애니메이션 효과 연속으로 주기 2
            // 선택자 검색을 1번만 해서 이쪽이 좀 더 처리속도가 빠름
            var div = $("#div03div");
            div.animate({left : "500px"});
            div.animate({width:"400px"});
            div.animate({height:"400px"});
            div.animate({backgroundColor:jQuery.Color("red")});

            // 애니메이션 효과 연속으로 주기 3 - jQuery Chaining 을 활용한 방법
            // div.animate({left : "500px"}).animate({width:"400px"}).animate({height:"400px"}).animate({backgroundColor:jQuery.Color("red")});
        });
        
        // jQuery 애니메이션 효과 멈추기
        // stop() : 애니메이션이나 jQuery 효과를 끝나기 전에 중지시킴
            //$(선택자).stop(stopAll, goToEnd)
            //stopAll = 기본값은 false, 연속된 효과가 있을경우 모두 중지
            //goToEnd = 기본값 false, 해당 효과의 끝으로 이동
            // 애니메이션 효과를 여러개 사용했을 경우 stop()기본형을 사용하면 현재 동작중인 애니메이션만 효과를 중단시키고 나머지 애니메이션이 바로 자동으로 시작됨
        $("#div04btn01").on("click", function(){
            $("#div04panel").stop();
        });

        $("#div04flip").on("click", function(){
            $("#div04panel").slideDown(5000);
        });

        $("#div04btn02").on("click", function(){
            $("#div04div1").stop();
        });

        $("#div04btn03").on("click", function(){
            $("#div04div2").stop();
        });

        $("#div04div1").on("click", function(){
            $("#div04div1").fadeOut(5000);
        });

        $("#div04div2").on("click", function(){
            $("#div04div2").animate({left:"500px"}, 5000);
        });

        $("#div04div3").on("click", function(){
            $("#div04div3").animate({left:"500px"}, 5000);
            $("#div04div3").animate({width:"100px"}, 500);
        });
        $("#div04btn04").on("click", function(){
            // $("#div04div3").stop();
            $("#div04div3").stop(false, true);
            //$(선택자).stop(stopAll, goToEnd) 의 형식 유지
        });

        //jQuery 콜백 함수
        //jQuery 함수를 사용 시 해당 함수가 완전히 실행 완료가 된 후 자동으로 호출되는 함수

        $("#div05btn1").on("click", function(){
            $("#div05 > h3").hide("slow");
            alert("콜백함수 미사용");
        });

        $("#div05btn2").on("click", function(){
            $("#div05 > h3").hide("slow", function(){
                alert("콜백함수 사용");
            });
        });

        // jQuery chaining
        // jQuery 사용시 여러개의 함수를 한번에 연결해서 입력하는 방식
        // jQuery Chaining 기능을 사용 시 선택자를 통해서 2번 이상 같은 html 요소를 찾을 필요가 없음
        // $(선택자).함수1().함수2().함수3()....
        $("#div06btn01").on("click", function(){
            $("#div06 > h3").css("color", "red")
            .slideUp(2000)
            .slideDown(2000)
            .fadeOut(1500)
            .fadeIn(1500);
        });
    
    });
