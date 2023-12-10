
function valorEntrada() {
    var capCantidad = document.getElementById("cantidad").value;
    var capCategoria = document.getElementById("categoria").value;
    const TICKET = 200;
    var resumenTotal = 0;

    // formula para aplicar los descuentos

    if (capCategoria == 0) {
        resumenTotal = capCantidad * TICKET;
    }

    if (capCategoria == 1) {
        resumenTotal = capCantidad * TICKET * 0.2;
    }

    if (capCategoria == 2) {
        resumenTotal = capCantidad * TICKET * 0.5;
    }

    if (capCategoria == 3) {
        resumenTotal = capCantidad * TICKET * 0.85;
    }

    document.getElementById("total").innerText = resumenTotal;
    controlForm();
    //para incluir a la funcion de controlForm en el BTNCLICK


    //para controlar la carga correcta del nombre y el mail

    function controlForm() {
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        var capCantidad = document.getElementById("cantidad").value;

        // PARA VALIDAR ENTRADA DE NOMBRE

        if (nombre.value === "") {
            nombre.classList.add("is-invalid");
            nombre.focus();
        }
        else {
            nombre.classList.remove("is-invalid");
        }

        //PARA VALIDAR ENTRADA APELLIDO

        if (apellido.value === "") {
            apellido.classList.add("is-invalid");
            apellido.focus();
        }
        else {
            apellido.classList.remove("is-invalid");
        }


        //PARA VALIDA EMAIL

        if (mail.value === "") {
            mail.classList.add("is-invalid");
            mail.focus();
        }
        else {

            if (regexEmail.test(mail.value))
                mail.classList.remove("is-invalid");
            else
                mail.classList.add("is-invalid");

        }


        // PARA VALIDAR LA CANTIDAD DE ENTRADAS Y NO ACEPTE VALOR NEGATIVO

        if (cantidad.value === "") {
            cantidad.classList.add("is-invalid");
            cantidad.focus();
        }
        else {
            cantidad.classList.remove("is-invalid");
        }

        // PARA QUE EL TOTAL A PAGAR NO SEA NEGATIVO

        if (capCantidad < 0) {
            document.getElementById("cantidad").classList.add("is-invalid");
            document.getElementById("total").innerText = 0;
            document.getElementById("cantidad").focus();
        }
        else {
            document.getElementById("cantidad").classList.remove("is-invalid");
        }

    }

}

    const BTNCLICK = document.getElementById("btnResumen");
    BTNCLICK.addEventListener("click", valorEntrada);
