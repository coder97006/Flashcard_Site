$( document ).ready(function() {
    
    $(".clicks").click(function() {       
        $("#javascript").toggle();
        $("#javascriptDef").toggle();
      });

    $(".clicks2").click(function() {       
        $("#oper").fadeToggle(4000);
        $("#operDef").fadeToggle(4000);
      });
  
      $(".clicks3").click(function() {       
        $("#vari").toggle();
        $("#variDef").toggle();
      });

      $(".clicks4").click(function() {       
        $("#function").toggle();
        $("#functionDef").toggle();
      });

      $(".clicks5").click(function() {       
        $("#method").toggle();
        $("#methodDef").toggle();
      });

      $(".clicks6").click(function() {       
        $("#jquery").toggle();
        $("#jqueryDef").toggle();
      });

      $(".clicks7").click(function() {       
        $("#boolean").toggle();
        $("#booleanDef").toggle();
      });

});