$(function () {
    $('#btnEnlace').click(function () {
       $('a').attr("href", function (i, valorOriginal) {
           return valorOriginal + "/intl/es/earth/index.html";
       });
    });
});