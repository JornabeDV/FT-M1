CLOUSURES:

LAS CLOUSURES son funciones que retornan otras funciones, las cuales pueden acceder al contexto de su función padre y obtener información allí.

En otras palabras su funcion hija utiliza info disponible de su padre.

diferencia con CALLBACK: esta usa de parámetro otra función.


EJEMPLO DE CLOUSURES:

function saludar(saludo) {

    return function (nombre) {
        console.log(saludo + " " + nombre);    
    }
};

let saludarHola = saludar ("Hola"); // RESULTADO: "Hola"
saludarHola ("Maty"); // RESULTADO: "Hola Maty"
saludarHola ("Jorge") // RESULTADO: "Hola Maty" y "Hola Jorge"


OTRO EJEMPLO: // La función padre almacena la información solicitada, para futuras llamadas de la función hija.

function crearContador(){
    let contador = 0;
    return function(){
        contador++;
        return contador;
    };
};

let contador1 = crearContador();
console.log(contador1()); // RESULTADO: 1
console.log(contador1()); // RESULTADO: 2
console.log(contador1()); // RESULTADO: 3

let contador2 = crearContador();
console.log(contador2());

OTRO EJEMPLO: 

function mascota (){
    let tipoDeMascota = "perro"
    return function(){
        let nombreMascota = "Pipo";
        console.log(" Yo tengo un " + tipoDeMascota + " que se llama " + nombreMascota);
    };
}

OTRO EJEMPLO CON ARRAY:

var creaFuncion = function(){
  var arreglo = [];

  for ( var i=0; i < 3; i++){ // porque el scope del var es general, deberíamos poner let para que sea local.
    arreglo.push(
      function(){
        console.log(i);
      }
    )
  }
  return arreglo;
}

var arr = creaFuncion();

arr[0]() // 3 sale un 3, qué esperaban ustedes??
arr[1]() // 3
arr[2]() // 3


