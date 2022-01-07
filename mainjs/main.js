// javascript Document

$(function(){
   
    
    //slide2
    var jssor_1_options = {
        $AutoPlay: true,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
  
    //tab
var tabBtn=$(".tab_btn>ul>li");
var tabCont=$(".tab_cont>div");	

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
  e.preventDefault();       //a tag click 방지	
  
  var target= $(this);
  var index = target.index();
  
  tabBtn.removeClass("active");  //활성되있는 버튼 외 지우기
  target.addClass("active");       //타겟클릭된 부분을 추가보여줌
  tabCont.css("display","none");
  tabCont.eq(index).css("display","block");
});
    
    //순서바꾸기
    $(".change").click(function(){
        
        $(".depa2").css("display","block");
        $(".depa1").css("display","none");
        return(false);
    });
    
    $(".change2").click(function(){
       
        
        $(".depa1").css("display","block");
        $(".depa2").css("display","none");
        return(false);
    });

    $(function(){
  
  $(".menu2_btn").click(function(){
	$(".menu2_btn").toggleClass("active");
	
  }); 
        
});

});