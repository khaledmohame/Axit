$(function (){
    'use strict';
    
    $(window).scroll(function (){
        var navbar =$('.navbar');
        if($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }     
    });
    
    $('.tab-switch li').click(function (){
        $(this).addClass('selected').siblings().removeClass('selected');
          
          $('.tabs-section .tabs-content > div').hide();
          $($(this).data('class')).show();
      });

      //  start Navbar scrllTop //
      $('.nav li a').click(function (e) {
  
          e.preventDefault();
  
          $('html, body').animate({
              scrollTop: $('#'+ $(this).data('scroll')).offset().top + 1
          }, 1000);
  
          window.console.log();
  
      });
    
    $('.contact-btn').hover(function(){
        
     $(this).find('span').eq(0).animate({
         
         width:'100%'
         
     },300);   
        
    },function(){
        
     $(this).find('span').eq(0).animate({
         
         width:'0%'
         
     },300);      
        
    });
    //  End Navbar scrllTop //
    
     $(".typeme").typed({
        strings: ["lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin grvaida dolor sit amet lacus accumsan et viverra justo commodo."],
        startDelay: 2500,
        showCursor: false,
    });
    
    
  });

 $(window).scroll(function(){
         
            
       if($(window).scrollTop() >= 1500){
           
          $('.scroll-to-top').fadeIn(500); 
           
       } else{
           
           $('.scroll-to-top').fadeOut(500);  
       } 
             
        
    });
    
    $('.scroll-to-top').click(function (event){
        
        
        event.preventDefault();
        
        $('html, body').animate({
            
            scrollTop:0
            
        },1000);
    });
      

//  End scrollTop //

  
 

//  Start spinner loading //

$(window).load(function(){
    $("body").css("overflow","auto");
    $(".loading-overlay .spinner").fadeOut(2000,function(){
        $(this).parent().fadeOut(2000);
    });
});

//  End spinner loading //