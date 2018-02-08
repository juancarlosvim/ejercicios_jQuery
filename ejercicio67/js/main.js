$(document).ready(function () {
    let p = $("<p>Lorem ipsum dolor sit amet, consectetur.</p>");

    $("body").append(p);

    p.bind("click", function () {
       alert("click en el párrafo")
    });
});