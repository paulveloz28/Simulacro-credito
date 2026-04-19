//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    const camposId = ["txtIngresos", "txtEgresos", "txtMonto", "txtPlazo", "txtTasaInteres"];
    let formularioValido = true;

    // Limpiar errores y estilos previos antes de volver a validar
    camposId.forEach(id => {
        const input = document.getElementById(id);
        const errorSpan = document.getElementById("error-" + id);
        input.classList.remove("input-error");
        if (errorSpan) errorSpan.innerText = "";
    });

    // Revisar si hay campos vacíos
    camposId.forEach(id => {
        const input = document.getElementById(id);
        const errorSpan = document.getElementById("error-" + id);
        const valor = input.value.trim();

        if (input.value.trim() === "") {
            if (errorSpan) errorSpan.innerText = "Este campo es obligatorio";
            input.classList.add("input-error");
            formularioValido = false;
        }
        else if (parseFloat(valor) < 0) {
            if (errorSpan) errorSpan.innerText = "No se permite números negativos";
            input.classList.add("input-error");
            formularioValido = false;
        }
    });
    

    // Si falta algún dato, detenemos la función aquí mismo
    if (!formularioValido) {
        return;
    }

    let ingresosFloat=0;
    let egresosFloat=0;
    let cmpIngresosFloat;
    let cmpEgresosFloat;
    let total;
    let saldoDisponible;
    let capacidadDePago;
    let mostrarCapacidadPago
    let cmpMonto;
    let cmpPlazo;
    let cmpTasa;
    let monto; 
    let plazoAnios;
    let tasa;

    cmpIngresosFloat=document.getElementById("txtIngresos");
    cmpEgresosFloat=document.getElementById("txtEgresos");
    ingresosFloat=parseFloat(cmpIngresosFloat.value);
    egresosFloat=parseFloat(cmpEgresosFloat.value);

    saldoDisponible=calcularDisponible(ingresosFloat,egresosFloat);
    total=document.getElementById("spnDisponible");
    total.innerText=saldoDisponible;

    capacidadDePago=calcularCapacidadPago(saldoDisponible);
    mostrarCapacidadPago=document.getElementById("spnCapacidadPago");
    mostrarCapacidadPago.innerText=capacidadDePago;

    cmpMonto=document.getElementById("txtMonto");
    cmpPlazo=document.getElementById("txtPlazo");
    cmpTasa=document.getElementById("txtTasaInteres");
    monto=parseFloat(cmpMonto.value);
    plazoAnios=parseInt(cmpPlazo.value);
    tasa=parseFloat(cmpTasa.value);

    let interes=calcularInteresSimple(monto,tasa,plazoAnios);
    let cmpInteres=document.getElementById("spnInteresPagar");
    cmpInteres.innerText=interes;

    let totalPagar=calcularTotalPagar(monto,interes);
    let cmpTotal=document.getElementById("spnTotalPrestamo");
    cmpTotal.innerText=totalPagar;

    let cuotaMensual=calcularCuotaMensual(totalPagar,plazoAnios);
    let cmpCuota=document.getElementById("spnCuotaMensual");
    cmpCuota.innerText=cuotaMensual;

    cmpCuota.innerText = "$" + cuotaMensual.toFixed(2).replace(".", ",");

    let estado=aprobarCredito(capacidadDePago,cuotaMensual);
    let cmpEstado=document.getElementById("spnEstadoCredito");

    if(estado==true){
        cmpEstado.innerText="CREDITO APROBADO";
    }else {
        cmpEstado.innerText="CREDITO RECHAZADO";
    }
    
}
