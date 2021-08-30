
// Botão subir topo inicio
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 400) {
            $("#btn-topo1").show();
        } else {
            $("#btn-topo1").hide();
        }
    });
});

