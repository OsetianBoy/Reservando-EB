var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(function(horario){
        return horario !== horarioReservado;
    })
}



Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0){
        return 0;
    } else {
        return promedio(this.calificaciones);
    }
};

function sumatoria(calificaciones){
    let suma = 0;
    calificaciones.forEach(element => {
        suma += element;
    });
    return suma;
};

function promedio(calificaciones){ 
    return Math.round((sumatoria(calificaciones)/ calificaciones.length)*10) / 10;
};