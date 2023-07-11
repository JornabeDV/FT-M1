'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/
//RESOLUCION 1: Manera Factorial

function nFactorial(n) {
  // Caso de corte.
  if (n === 0 || n === 1) return 1; 
  //Caso numeros con decimales.
  if (Number.isInteger(n) !==true) throw new Error("Por favor solo pasar numeros enteros");
  // Validación
  if (n < 0) return 0; 
// Función recursiva.
  return n * nFactorial(n - 1) 
}

// RESOLUCION 2: Manera Factorial

// function nFactorial(n) {
//   if (n === 0 || n === 1) {
//   return 1
//   } else if (n < 0) {
//   return 0
//   } else {
//   return n * nFactorial(n - 1)
//   }
// }


// RESOLUCION 1: Manera Iterativa EJERCICIO FACTORIAL

// function nFactorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     var factorial = 1;
//     for (var i = 2; i <= n; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }
// }

// RESOLUCION 1: Manera Factorial

function nFibonacci(n) {
  //Casos de corte.
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  // Parte recursiva.
  return nFibonacci(n - 1) + nFibonacci(n - 2) // Recursión: llamarse a sí misma. 
}

// RESOLUCION 2: Manera Iterativa 

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

//FUNCIÓN CON CLASES: METODO QUEUE (COLA)   siempre pusheo y saco al principio con un SHIFT 
 
// EL MÉTODO PILA: siempre pusheo y saco del final con POP. METODO FIFO. FIRST IN FIRST OUT.

class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(data) {
    return this.arr.push(data);
  }
  dequeue() {
    // if (this.arr.length === 0) return undefined; // NO ES NECESARIA ESTA LÍNEA.
    return this.arr.shift();
  }
  size() {
    return this.arr.length;
  }
} 

//FUNCION CONSTRUCTORA:  METODO QUEUE (COLA). METODO FIFO. FIRST IN FIRST OUT.

// function Queue() { 
//   this.arr = [];
// } 

// Queue.prototype.enqueue = function(data){
//   return this.arr.push(data) // METODO QUE PONE EL DATO EN EL PRIMER LUGAR DEL ARRAY
// };

// Queue.prototype.dequeue = function() {
// if(this.arr.length === 0) return undefined; // NO ES NECESARIA ESTÁ LÍNEA, POR DEFECTO SI EL ARRAY ESTÁ VACIO TIRA UNDEFINED.
// return this.arr.shift() // METODO QUE PONE EL DATO EN EL PRIMER LUGAR DEL ARRAY
// };

// Queue.prototype.size = function() {
// return this.arr.length
// };  


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
