$(document).ready(function(){
  $("button:first").click(function(){
    $("img").before("<b>Fuwad</b>");
  });
  $("button:last").click(function(){
    $("img").after("<b>Fuwad</b>");
  });
});
