/*
Autor: Thiago Alexandre Martins Monteiro
Local: Goiânia/Goiás/Brasil
Data:  29/08/2013
*/

String.prototype.reverse = function() {
    var reversed = "";

    for (var i = this.length; i >= -1; i--) {
        reversed += this.charAt(i);
    }

    return reversed;
};

window.onload = function() {
    var btn_inverte = document.getElementById("btn_inverte");

    btn_inverte.addEventListener("click", function() {
        var texto = document.getElementById("texto");
        var texto_invertido = document.getElementById("texto_invertido");

        texto_invertido.value = texto.value.reverse();
    }, false);
};

