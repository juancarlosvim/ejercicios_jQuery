$(document).ready(function () {
   let c1 = $("<h1>Lorem ipsum dolor sit amet, consectetur.</h1>");
   let c2 = $("<h2>Lorem ipsum dolor sit amet, consectetur.</h2>");
   let c3 = $("<h3>Lorem ipsum dolor sit amet, consectetur.</h3>");
   $("body").append(c1, c2, c3);
    $(":header").css({
       "background-color": "red"
    });

});