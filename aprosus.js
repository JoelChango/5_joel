function calcularNotaFinal() {
    var notaPrimeraEv = document.getElementById("nota_primera_ev").value;
    var notaSegundaEv = document.getElementById("nota_segunda_ev").value;
    var divResultado = document.getElementById("resultado");

    var notaFinal = (parseFloat(notaPrimeraEv) + parseFloat(notaSegundaEv)) / 2;

    if (notaFinal >= 5) {
        divResultado.innerHTML = "APROBADO :)";
        divResultado.style.backgroundColor = "green";
    } else {
        divResultado.innerHTML = "VUELVE A INTENTARLO :(";
        divResultado.style.backgroundColor = "red";
    }
}
