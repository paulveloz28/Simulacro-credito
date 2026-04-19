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

}
