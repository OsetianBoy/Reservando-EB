var Reserva = function(horario, cantidadPersonas, precioxPersona, cuponDescuento){
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioxPersona = precioxPersona;
    this.descuento = cuponDescuento;
};

Reserva.prototype.precioBase = function(){
    return this.cantidadPersonas * this.precioxPersona;
};

Reserva.prototype.precioFinal = function(){
    let precioBase = this.precioBase();
    let adicional = calcularAdicional(this.horario, precioBase);
    let descuentos = calcularDescuentos(this.cantidadPersonas, this.descuento, precioBase, this.precioxPersona);
    return precioBase + adicional - descuentos;
};

function calcularAdicional(horario, precioBase){
    var adicionalXHorario = calcularAdicionalxHorario(horario, precioBase);
    var adicionalXFinde = calcularAdicionalxFinde(horario, precioBase);
    return adicionalXFinde + adicionalXHorario;
};

function calcularAdicionalxHorario(horario, precioBase){
    var hora = horario.getHours();
    if ((hora >= 13 && hora < 14) || (hora >= 20 && hora < 21)){
        return precioBase * 5 / 100;
    }
    return 0;
};

function calcularAdicionalxFinde(horario, precioBase){
    var finde = horario.getDay();
    if (finde === 0 || finde === 5 || finde === 6){
        return precioBase * 10 / 100;
    }
    return 0;
};

function calcularDescuentos(cantidadPersonas, cuponDescuento, precioBase, precioxPersona){
    var descuentoXGrupo = calcularDescuentoXGrupo(cantidadPersonas, precioBase);
    var descuentoXCodigo = calcularDescuentoXCodigo(cuponDescuento, precioBase, precioxPersona);
    return descuentoXGrupo + descuentoXCodigo;
};

function calcularDescuentoXGrupo(cantidadPersonas, precioBase){
    let descuento = 0;
    if (cantidadPersonas >= 4 && cantidadPersonas < 6){
        descuento = 5;
    } else if (cantidadPersonas >= 6 && cantidadPersonas < 8){
        descuento = 10;
    } else if (cantidadPersonas >=8){
        descuento = 15;
    }
    return precioBase * descuento / 100;
};

function calcularDescuentoXCodigo(cuponDescuento, precioBase, precioxPersona){
    let descuento = 0;
    if(cuponDescuento === 'DES15'){
        descuento = precioBase * 15 / 100;
    } else if (cuponDescuento === 'DES200'){
        descuento = 200;
    } else if (cuponDescuento === 'DES1'){
        descuento = precioxPersona;
    }
    return descuento;
};



var listadoDeReservas = [
    new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1"),
    new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200"),
];