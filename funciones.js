//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let valorDisponible;
    valorDisponible=ingresos-egresos;
    if(valorDisponible<0){
        return "0";
    }
    return valorDisponible;
}

function calcularCapacidadPago(montoDisponible){
    return montoDisponible*0.5;
}

function calcularInteresSimple(monto,tasa,plazoAnios){
    let interes; 
    interes = monto*(tasa/100)*plazoAnios;
    return interes;
}

function calcularTotalPagar(monto,interes){
    let total;
    total=monto+interes+100;
    return total;
}

function calcularCuotaMensual(total,plazoAnios){
    let meses;
    let cuotas;

    meses=plazoAnios*12;
    cuota=total/meses;

    return cuota;
}

function aprobarCredito(capacidadPago,cuaotaMensual){
    if(capacidadPago>cuaotaMensual){
        return true;
    }else {
        return false;
    }
}