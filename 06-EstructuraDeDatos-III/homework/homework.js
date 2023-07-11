'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) { // Definir clases.
   this.value = value,
   this.left = null,
   this.right = null

}

//Todas las funciones arrancan en el nivel 0.
/*
               8        NIVEL 0
            /    \   
           3     10     NIVEL 1
         / \
        1   4           NIVEL 2
            \
             6          NIVEL 3

let tree = new BinarySearchTree(8)
--->Nivel 0 = return 1 + this.left.size() + this.right.size();
--->Nivel 1 = return 1 + this.left.size() + this.right.size() -------------- return 1
--->Nivel 2 = return 1 ---------------- return 1 + this.right.size();
--->Nivel 3 = return 1

*/
//- SIZE: retorna la cantidad total de nodos del árbol.
BinarySearchTree.prototype.size = function () { 
   //1-SI NO HAY NADA.
   if (!this.value) return null;
   //2-NODO HOJA (NO TIENE HIJO == HIJOS NULL) //Este es mi caso de corte.
   if (!this.left && !this.right) return 1;
   //3- UN NODO QUE TENGA NODOS A LA DERECHA UNICAMENTE.
   if (!this.left && this.right) return 1 + this.right.size();
   //4-UN NODO QUE TENGA NODOS A LA IZQUIERDA UNICAMENTE.
    if (this.left && !this.right) return 1 + this.left.size();
   //5-UN NODO QUE TENGA TANTO A LA IZQUIERDA COMO A LA DERECHA.
    if (this.left && this.right) return 1 + this.left.size() + this.right.size();
}

//REFACTORING: DEL MÉTODO SIZE.
BinarySearchTree.prototype.size = function () { 
   let counter = 1;

   if (this.right) counter += this.right.size();
   if (this.left) counter += this.left.size();

   return counter;
}


// let tree = new BinarySearchTree(20); // Ingresamos un valor para recorrer el árbol.
//- INSERT: agrega un nodo en el lugar correspondiente.
///////////////////////////////////////////////10
BinarySearchTree.prototype.insert = function (value) { // Como sabíamos que ibamos a insertar, le pasamos por parámetro el VALUE.
   if (value < this.value) { //Es menor y va a la izquierda.
      //10////////20///// El valor que recibo es menor que mi value (20), entro a la izquierda.
         if (!this.left) this.left = new BinarySearchTree(value); // Si el valor del nodo de la izquierda es NULL insertá el nuevo valor.
         else this.left.insert(value) // Sino insertá el valor del nodo.
   }  else if (value > this.value) {
         if (!this.right) this.right = new BinarySearchTree(value); //Entra en este IF cuando el nodo izquierdo tenga valor. Hasta validar que el nodo que sigue a la izq. es NULL.
         else this.right.insert(value); // Sino insertá el valor del nodo.
      }  
};

//- CONTAINS: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
BinarySearchTree.prototype.contains = function (value) {
   //Este es mi caso de corte.
   if (this.value === value) return true;
   if (value > this.value) {
      if (!this.right) return false;
      else return this.right.contains(value);
   } else {
      if (!this.left) return false;
      else return this.left.contains(value);
   }; 
}; 

//
//- DEPTHFIRSTFOREACH: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
// Recibirá un CB por parámetro y el orden de como se ejecutará la function.
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) { //NO ENTRA EN EL CHECKPOINT!!!!

   if (order === "pre-order") { // DESDE ARRIBA HACIA ABAJO TODO A LA IZQUIERDA, LUEGO VUELVE ENTRANDO A LA DERECHA.
      cb(this.value) //NODO.
      if(this.left) this.left.depthFirstForEach(cb, order) //IZQUIERDA.
      if(this.right) this.right.depthFirstForEach(cb, order) //DERECHA.
   } else if (order === "post-order"){ // DESDE ABAJO HACIA ARRIBA. ENTRA PRIMERO EN IZQUIERDA Y LUEGO DERECHA ANTES DE SUBIR UN NIVEL.
      if(this.left) this.left.depthFirstForEach(cb, order) //IZQUIERDA
      if(this.right) this.right.depthFirstForEach(cb, order) //DERECHA
      cb(this.value) //NODO
   }
   else { // SI NO SE PASA NINGÚN PARÁMETRO SE HARÁ POR DEFECTO "IN-ORDER".
      if(this.left) this.left.depthFirstForEach(cb, order) // IZQUIERDA.
      cb(this.value) // NODO.
      if(this.right) this.right.depthFirstForEach(cb, order) //DERECHA.
   }

//PEDIDO: IN-ORDER : IZQUIERDA, NODO , DERECHA.
//PEDIDO: PRE-ORDER : NODO, IZQUIERDA, DERECHA. 
//PEDIDO: POST-ORDER : IZQUIERDA, DERECHA, NODO.

/*
               8        NIVEL 0
            /    \   
           3     10     NIVEL 1
         / \
        1   4           NIVEL 2
            \
             6          NIVEL 3
*/
// pre-order (DFS) = 8 [8, 3, 1, 4, 6,10]

//primera vuelta ---> console.log(8) + this.left.DFS + this.right.DFS
//segunda vuelta -------------------> console.log(3) + this.left.DFS   
//tercera vuelta ------------------------------------> console.log(1) ( no llama a nadie más)
//cuarta vuelta -----------------------------------------------------> console.log(4) + this.right.DFS (empieza a subir)
//quinta vuelta ---------------------------------------------------------------------> console.log(6)
//sexta vuelta ------------------------------------------------------------------------------------------------>console.log(10)


}


//- BREADTHFIRSTFOREACH: recorre el árbol siguiendo el orden breadth first (BFS) . Comportamiento FIFO.
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) { //NO ENTRA EN EL CHECKPOINT!!!!
/*
                    0
                  /   \
                -1     5
                /     / \
              -2     3   7
                      \
                       4
            testArray = [0, -1, 5, -2, 3, 7, 4]
*/   

   cb(this.value) // ACÁ INICIA LA VUELTA.
   if(this.left) array.push(this.left) 
   if(this.right) array.push(this.right) 

let next = array.shift() // -1 // 5 // -2 // 3 // 7 // 4 // undefined// acá corta. METODO SHIFT: SACA PRIMER ELEMENTO DEL ARRAY.
if (next) next.breadthFirstForEach(cb, array)

// 1RA VUELTA: console.log(0) + array = [-1, 5]
// 2DA VUELTA: console.log(-1) + array = [5, -2]
// 3RA VUELTA: console.log(5) + array = [-2, 3, 7]
// 4TA VUELTA: console.log(-2) + array = [3, 7]
// 5TA VUELTA: console.log(3) + array = [7, 4]
// 6TA VUELTA: console.log(7) + array = [4]
// 7MA VUELTA: console.log(4) + array = []



}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
