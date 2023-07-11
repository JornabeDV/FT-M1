// LISTA ENLAZADA (LINKED LIST): nodos interconetados. estos contienen valor y una referencia(objetos:key:value) al siguiente nodo.
// NO ES NATIVA DE JAVASCRIPT. DEBEMOS CREARLA NOSOTROS.

// TIPOS DE LISTAS ENLAZADAS:


// -SIMPLE: CON ESTA TRABAJAREMOS. HAY OTRAS.

// ESTRUCTURAS:

// SE PUEDE CREAR CON FUNCION CONSTRUCTORA O CON CLASES.

// OPTIMIZAN ESPACIO LIBRE EN LA MEMORIA DE LOS PROCESOS.

// EJEMPLO:

//ESTRUCTURA CON FUNCION CONSTRUCTORA:

// function LinkedList() {
//     this.head = null;
// };

// function Node(data) {
//     this.data = data;
//     this.next = null;
// };

// LinkedList.prototype.add = function(data) { // 5
//     let node = new Node(data); // {data: 5, next: null}
//     let current = this.head; // referencia del head. la variable se puede llamar como quiera, por buena práctica "current"(actual). siempre tiene que estar esta referencia.
    
//     if(!current) { // Si current es igual igual igual a null = current === NULL es lo mismo que !current;
//         this.head = node; 
//         return node;
//     }
// }
// let newList = new LinkedList();
// newList.add (5);
// console.log(newList);

// let node = new Node(5);
// console.log(newList);

// AGREGAMOS OTROS VAGON(NODE)

function LinkedList() {
    this.head = null;
};

function Node(data) {
    this.data = data;
    this.next = null;
};

LinkedList.prototype.add = function(data) { // 5
    let node = new Node(data); // {data: 5, next: null}
    let current = this.head; // referencia del head. la variable se puede llamar como quiera, por buena práctica "current"(actual). siempre tiene que estar esta referencia.
    
    if(!current) { // Si current es igual igual igual a null = current === NULL es lo mismo que !current;
        this.head = node; //redefinimos el valor de la cabeza   
        return node;
    } 
    while(current.next){ // current.next es lo mismo que diferente a null // While actualiza hasta el último punto de la cadena (null). Es un For indefinido. no sabemos cuantos nodos vamos a recorrer. en el for el valor del recorrido es finito.
        current = current.next; // reasigna el valor de current 
    }
    current.next = node;
    return node;
}
let newList = new LinkedList();
newList.add (5);
newList.add (2);

console.log(newList);

//HASH TABLE:

function HashTable() {
    this.table = [];
    this.numBuckets = 35;
};

HashTable.prototype.hash = function(key){ // key = "maty"
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
        // console.log(key[i]); // m, a, t, y
        hash += key.charCodeAt(i);
    };
    // console.log(hash); // 443
    // console.log(hash % this.numBuckets); // 23
    return hash % this.numBuckets;

};

let newTable = new HashTable();
newTable.hash("maty"); 
newTable.hash("nico"); 
newTable.hash("jorge"); 
newTable.hash("Jorge"); //Tiene otro código mayus que minus.

