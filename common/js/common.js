// Javascript Document

$(function(){
   $(".ic_menu").on("click",function(){
        $("#open_menu").animate({marginLeft:"280px"},500);
        $(".black_back").css("display","block");
    });
    
    $("#open_menu .close, .black_back").on("click",function(){
        $("#open_menu").animate({marginLeft:"-280px"},500);
        $(".black_back").css("display","none");
    });
    
    // open_right
    $(".ic_right").on("click",function(){
        $("#open_right").animate({marginRight:"280px"},500);
        $(".black_back").css("display","block");
    });
    
    $("#open_right .close, .black_back").on("click",function(){
        $("#open_right").animate({marginRight:"-280px"},500);
        $(".black_back").css("display","none");
    });
    
    // open menu submenu slide
    $(".gnb>li").on("mouseover", function () {
        $(this).find(".submenu").stop().slideDown();
    });
    $(".gnb>li").on("mouseleave", function () {
        $(this).find(".submenu").stop().slideUp();
    }); 
});