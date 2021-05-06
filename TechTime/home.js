setTimeout(function(){
    //$(".online").removeClass("online");

    ; }, 3000);

    setTimeout(function(){
       //$("main div").addClass("online");
       
       ; }, 5000);

       $(".indicator").click(function(){
           $(this).parent().toggleClass("online");
       });

