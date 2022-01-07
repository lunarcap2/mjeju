// JavaScript Document

$(function(){
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