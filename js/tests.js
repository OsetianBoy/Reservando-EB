var expect = chai.expect;

//Paso 2: Testeá la función reservarHorario(horario)
describe("Testeando la funcion reservarHorario del objeto Restaurant", function(){
    it('Reserva de forma correcta un horario disponible en un restaurant',function(){
        var restaurantTest = new Restaurant(1, "restaurantTest", "khinkali", "ciudad", ["13:00", "15:30", "18:00"], "", [4, 5, 6, 8, 10]);
        restaurantTest.reservarHorario("13:00")
        expect(restaurantTest.horarios).to.eql(["15:30", "18:00"]);
    })

    it('Al reservar un horario que no esta disponible, el array se mantiene igual',function(){
        var restaurantTest = new Restaurant(1, "restaurantTest", "khinkali", "ciudad", ["13:00", "15:30", "18:00"], "", [4, 5, 6, 8, 10]);
        restaurantTest.reservarHorario("12:00")
        expect(restaurantTest.horarios).to.eql(["13:00", "15:30", "18:00"]);
        
    })
    it('Al no poner un horario en el restaurant, el array se mantiene igual',function(){
        var restaurantTest = new Restaurant(1, "restaurantTest", "khinkali", "ciudad", ["13:00", "15:30", "18:00"], "", [4, 5, 6, 8, 10]);
        restaurantTest.reservarHorario("")
        expect(restaurantTest.horarios).to.eql(["13:00", "15:30", "18:00"]);
        
    })
});

//Paso 3: Testeá la función obtenerPuntuación()
describe('Testea la funcion de obtenerPuntuacion del objeto Restaurant.', function(){
    it('Calcula correctamente el promedio de puntuacion, cuando el restaurant tiene calificaciones.', function(){
        var restaurantTest = new Restaurant(1, "restaurantTest", "khinkali", "ciudad", ["13:00", "15:30", "18:00"], "", [4, 5, 6, 8, 10]);
        expect(restaurantTest.obtenerPuntuacion()).to.equal(6.6);

    })
    it('Dado un restaurant que no tiene ninguna calificacion, es igual a 0.', function(){
        var restaurantTest = new Restaurant(1, "restaurantTest", "khinkali", "ciudad", ["13:00", "15:30", "18:00"], "", []);
        expect(restaurantTest.obtenerPuntuacion()).to.equal(0);
        
    })
});

//Paso 4: Testeá la función calificar()
describe('Testeando la funcion calificar() del objeto Restaurant.', function(){
    it('Dado una calificacion con valor superior a 10 el array de calificaciones permanece igual.', function(){
        var restaurantTest = new Restaurant(1, "restaurantTest", "khinkali", "ciudad", ["13:00", "15:30", "18:00"], "", [4, 5, 6, 8, 10]);
        restaurantTest.calificar(11);
        expect(restaurantTest.calificaciones.length).to.equal(5);
    })
    it('Dado una calificacion con valor entre 1 - 10 el array de calificaciones aumenta.', function(){
        var restaurantTest = new Restaurant(1, "restaurantTest", "khinkali", "ciudad", ["13:00", "15:30", "18:00"], "", [4, 5, 6, 8, 10]);
        restaurantTest.calificar(9);
        expect(restaurantTest.calificaciones.length).to.equal(6);
    })
});

//Paso 5: Testeá la función buscarRestaurante(id)
describe('Testea la funcion buscarRestaurante.', function(){
    it('Encuentra de forma correcta un restaurant mediante su id', function(){
        var restaurant = listado.buscarRestaurante(1);
        expect(restaurant.id).to.equal(1);
    })
    it('Al poner un id inexistente no da ningun valor.', function(){
        var restaurant = listado.buscarRestaurante(25);
        expect(restaurant.id).to.equal();
    })
});

//Paso 6: Testeá la función obtenerRestaurantes()
describe('Testeando la funcion obtenerRestaurantes del objeto listado', function(){
    it('Se obtiene correctamente la funcion obtenerRestaurantes', function(){
        expect(listado.obtenerRestaurantes(null,null,null).length).to.equal(24);
    });
});

//TEST DE RESERVA
// precioBase
describe('Testeando la funcion precioBase del objeto reserva',function(){
    it('Se calcula de forma correcta el precio base', function(){
        expect(listadoDeReservas[0].precioBase()).to.equal(2800);
        expect(listadoDeReservas[1].precioBase()).to.equal(300);
    });
});

//precioFinal
describe('Testeando la funcion precioFinal del objeto reserva', function(){
    it('Se calcula de forma correcta el precio final', function(){
        expect(listadoDeReservas[0].precioFinal()).to.equal(2310);
        expect(listadoDeReservas[1].precioFinal()).to.equal(100);
    });
});
