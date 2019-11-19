$(document).ready(function(){
   $(".loginframe").hide();
   $(".regframe").hide();
   $(".lgbtn").click(function(){
    $(".loginframe").show();  
   })
   $(".rgbtn").click(function(){
    $(".regframe").show();  
   })
   $(".closebtn").click(function(){
    $(".loginframe").hide(); 
    $(".regframe").hide();  
   })
   $(document).dblclick(function(){
    // $(".loginframe").hide();
    // $(".regframe").hide();
   })
$(".lgfromreg").click(function(){
    $(".loginframe").show(); 
    $(".regframe").hide(); 
})
$(".lgtoreg").click(function(){
    $(".loginframe").hide(); 
    $(".regframe").show(); 
})


})