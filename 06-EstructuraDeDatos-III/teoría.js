// ARBOL BINARIO DE BÚSQUEDA:

// LOS MENORES A LA IZQUIERDA, LOS MAYORES A LA DERECHA.
// DOS HIJOS TIENEN TODOS LOS NODOS, PUEDEN TENER VALOR O SER NULL, PERO SIEMPRE TIENE DOS HIJOS CADA NODO.
// POSIBILIDADES DE LOS NODOS:
    //1-NODO HOJA (NO TIENE HIJO == HIJOS NULL)
    //2-NODO TENGA NODOS A LA DERECHA UNICAMENTE.
    //3-NODO TENGA NODOS A LA IZQUIERDA UNICAMENTE.
    //4-NODO TENGA TANTO A LA IZQUIERDA COMO A LA DERECHA.

function BinarySearchTree (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value) { //Es menor y va a la izquierda.
        if (this.left){ //Entra en este IF cuando el nodo izquierdo tenga valor.
            //Recursividad
            this.left.insert(value);
        } else { // Si no hay nadie.
            this.left = new BinarySearchTree(value);
            return value;
        }
    } else { //Es mayor y va a la derecha.
        if (this.right){ //
            this.right.insert(value);
        }else{ 
            this.right = new BinarySearchTree(value);
            return value;
        }
    }

};

let newTree = new BinarySearchTree(8);
newTree.insert(7);
console.log (newTree);