$(document).ready(function () {
    let p = $("<p>Lorem ipsum dolor sit amet, consectetur.</p>");
    $("body").append(p);
    p.bind("click", {msg: "Has pulsado en el parafo"}, manejador);
    function manejador(e) {
        alert(e.data.msg);
    }
});