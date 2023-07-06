

// CLOUSERS: FUNCION QUE LLAMA A OTRA FUNCIÓN.

// CALLBACK: UNA FUNCIÓN QUE SE PASA POR PARÁMETRO A OTRA FUNCIÓN.

// RECURSIÓN: UNA FUNCIÓN QUE SE LLAMA A SÍ MISMA.1. ES UNA TECNICA QUE NOS PERMITE, DE MANERA EFICIENTE, REPETIR LA MISMA TAREA PARA LOGRAR UN OBJETIVO.
// CARACTERISTICAS:
// 1-   DEBE LLAMARSE A SÍ MISMA.
// 2-   DEBEMOS PASARLE OTRO ARGUMENTO A LA FUNCÍON RETORNADA. DISTINTO AL ARGUMENTO DE LA FUNCIÓN PADRE. SINO CAEMOS EN UN BUCLE INFINITO.
// 3-   LA FUNCIÓN DEBE TENER  AL MENOS UNA SENTENCIA DE CORTE.

// EJEMPLOS:

function factorial(x) {
    if (x === 0 || x === 1) return 1;
    else if (x <= 0) return 0;
    return x * factorial(x - 1)
}

// factorial de un numero: !4 = 4 * 3 * 2 * 1


// otro ejemplo:

// factorial(5) HACERLOOOO


//////////////////////
// ARRAY: ES UNA ESTRUCTURA DE DATOS  NATIVA DE JS  EN LA QUE PODEMOS ALMACENAR  DATOS DE FORMA ORDENADA

// ESTRUCTURA DE DATOS:

// SET: ES UNA ESTRUCTURA DE DATOS  NATIVA DE JS  EN LA QUE PODEMOS ALMACENAR  DATOS DE FORMA ORDENADA SOLO QUE NO PERMITE DATOS REPETIDOS.
// -limpiar info repetida de un array.


let repetidos = [1, 2, 3, 4, 5, 6, 7, 8, "Hello", "Hello", 0]

let miSet = new set(repetidos)

miSet.add(4)
miSet.delete ("Hello")

console.log(miSet) [1, 2, 3, 4, 5, 6, 7, 8, 0, "Hello", 4]


// STACK:PILAS: siguen una estructura LIFO, last in first out.- NO ES NATIVA DE JS.

//CON CLASES.
class Stack {
    constructor() {
        this.array = [];
    }
    agregar(data) {
        this.array.push(data);
    }
    quitar() {
        this.array.pop();
    }
};



let newStack = new Stack()
newStack.agregar(2)
newStack.agregar(4)
newStack.quitar(2)
console.log(newStack);

//CON FUNCIÓN CONSTRUCTORA.

function Stack () {         // función constructura, primer letra de la función con mayus.
    this.array = [];
};

Stack.prototype.agregar = function(data){
    this.array.push(data)
};

Stack.prototype.quitar = function() {
    this.array.pop()
};

let newStack1 = new Stack()
newStack1.agregar(2)
newStack1.agregar(4)
newStack1.quitar(2)
console.log(newStack1);


// QUEUE : COLAS: siguen una estructura FIFO, last in first out.- NO ES NATIVA DE JS.


// COMPLETAR