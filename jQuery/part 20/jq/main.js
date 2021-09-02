$(document).ready(function(){
  $("span").parentsUntil("ul").css({
    "color" : "green",
    "border" : "3px solid green"
  });
});
