//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let ingresosFloat=0;
    let egresosFloat=0;
    let cmpIngresosFloat;
    let cmpEgresosFloat;
    let total;
    let saldoDisponible;
    let capacidadDePago;
    let mostrarCapacidadPago

    cmpIngresosFloat=document.getElementById("txtIngresos");
    cmpEgresosFloat=document.getElementById("txtEgresos");
    ingresosFloat=parseFloat(cmpIngresosFloat.value);
    egresosFloat=parseFloat(cmpEgresosFloat.value);

    saldoDisponible=calcularDisponible(ingresosFloat,egresosFloat);
    total=document.getElementById("spnDisponible");
    total.innerText=saldoDisponible;
}
