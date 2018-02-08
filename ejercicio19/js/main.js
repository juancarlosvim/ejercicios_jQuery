$(function () {


    $("input").first().click(function () {
       $("div:first>p").css({opacity: 0.6}).fadeToggle();

    });
    $("input:eq(1)").click(function () {
        $("div:eq(1)>p").css({opacity: 0.6}).fadeToggle("slow");

    });
    $("input").last().click(function () {
        $("div:last>p").css({opacity: 0.6}).fadeToggle(3000);

    });



});