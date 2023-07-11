'use strict'
// No cambies los nombres de las funciones.

/*
18/2
9/3
3/3
1 ---> terminé el factoreo.

let result = [1, 2, 3, 3]

*/

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // Pensamos los pasos de ejecución.

  // Tengo un número... puedo pensar que hay un factor que va a estar siempre --> 1.
  // Voy a intentar dividir el número por el siguiente.
  // Si me da la división exacta -> agrego al array de divisores --> voler a dividir por el mismo.
  // Si tengo una división inexacta -> No guardo ese divisor, avanzaría al siguiente.
  // [1, 2, 2, 3, 3, 5]
  // 180/2 = 90.
  // 90/2 = 45.
  // 45/2 = YA NO ME DA NUMERO ENTERO.
  // 45/3 = 15.
  // 45/3 = 5.
  // 5/3 = YA NO ME DA NUMERO ENTERO.
  // 5/4 = YA NO ME DA NUMERO ENTERO.
  // 5/5 = 1 TERMINÓ.

  var divisores = [1];
  var counter = 2;

  while (num !== 1) {
    if (num % counter === 0) { // SI EL RESTO DE LA DIVISIÓN ES 0 INGRESO Y PUSHEO N.
      divisores.push(counter);
      num = num / counter;
    } else counter++ // SI EL RESTO DE LA DIVISIÓN NO ES 0 ENTONCES AUMENTO EN UN 1 COUNTER Y VUELVO A PROBRAR EL WHILE.
  }
  return divisores;
}

function bubbleSort(array) { //ORDENAMIENTO MEDIANTE COMPARACIÓN DE A PARES.
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Inicial = [5, 1, 4, 2, 8]
  // Vuelta1 = [5, 1, 4, 2, 8] -> [1, 4, 2, 5, 8] COMPARAMOS 5 CON CADA UNO Y SWAPEAMOS EN CASO DE SER MENOR.
  // Vuelta2 = [1, 4, 2, 5, 8] -> [1, 2, 4, 5, 8] COMPARAMOS 4 CON CADA UNO Y SWAPEAMOS EN CASO DE SER MENOR.
  // Vuelta3 = [1, 2, 4, 5, 8] -> [1, 2, 4, 5, 8] COMPARAMOS CADA UNO Y SWAPEAMOS EN CASO DE SER MENOR.
  // Vuelta4 = [1, 2, 4, 5, 8] -> [1, 2, 4, 5, 8] COMPARAMOS CADA UNO Y SWAPEAMOS EN CASO DE SER MENOR.
  // Vuelta5 = [1, 2, 4, 5, 8] -> [1, 2, 4, 5, 8] COMPARAMOS CADA UNO Y SWAPEAMOS EN CASO DE SER MENOR.
  // RECORRE LA CANTIDAD DE LUGARES TENGA EL ARRAY.

//   for (i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length -1 -i; j++) {
//       if (array [j] > array[j+1]) {
//         //swap
//         var aux = array[j];
//         array[j] = array[j+1]; 
//         array[j+1] = aux;  
//       }
//     } 
//   }  
//   return array;

// }
  let swap = true; // FLAG: FUNCIONA COMO INTERRUPTOR.
  while (swap) {
    swap = false; // LO PRIMERO QUE HAGO ES APAGAR EL INTERRUPTOR.
    for (let i = 0; i < array.length -1; i++) {
      if (array [i] > array[i+1]) {
        //swap:
        var aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux; 
        swap = true; // SI NO ENTRA AL IF, SWAP QUEDA EN FALSE.
      }
    }
  }
  return array;
}


function insertionSort(array) { // MIRA COMPARA Y ORDENA. ORDENAMIENTO A PARTIR DEL MAS PEQUEÑO BUSCADO EN EL LISTADO AL MAS GRANDE
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

/*
                         i --> ir seleccionando el numero que tengo que comparar.
     Array Inicial = [5, 1, 4, 2, 8]
                      j --> me permite comparar a i con los anteriores.
  aux = 1
            i
        [5, 1, 4, 2, 8]
        j

  aux = 1
  */

  for (let i = 1; i < array.length; i++) { // Arranco el recorrido en la posición 1 = i. y j arranca en 0.
    let j = i - 1
    let aux = array[i];
    while (j >= 0 && array[j] > aux) {
      array [j+1] = array[j];
      j--; // Retrocede Jota hasta que no ingrese al while. se realiza el swap hasta que queden de menor a mayor.
    }
    array[j+1] = aux 
  }
  return array;
}


function selectionSort(array) { //Buscamos el mínimo de todo el Array. Escaneamos buscando el menor.
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  i --> me iba a permitir dejar fija la posición en la que iba a ir el mismo.
     Array Inicial = [5, 1, 4, 2, 8]
  j --> cual es el valor mínimo.
  aux = 1
            i
        [5, 1, 4, 2, 8]
        j

  aux = 1
  */

  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++){
      if (array[j] < array[min]) min = j; // Me guardo la POSICIÓN del número mas chiquito. No cuanto vale.
    }
    var aux = array[i];
    array[i] = array[min];
    array[min] = aux; 
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
