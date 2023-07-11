'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null; // valor de inicio de head = null. // this.length = 0 // es la cabeza de mi lsta, necesito pasarle nodos. 
};

function Node(value) { // las propiedades del node serán value y next. value será el valor del node y next nos permitirá pasar de nodo a node.
  this.value = value; // value se le asigna el valor que tiene por parámetro ( value )
  this.next = null;
};

//let lista = new LinkedList();
//lista = {head: null};
//CURRENT = ACTUAL;

//ADD: agrega un nuevo nodo al final de la lista;

LinkedList.prototype.add = function(value) { // Agregar nodos al final de la lista. Necesita saber el valor por parámetro, sino no sabe que va a agregar al final de la lista.
  let node = new Node(value); // instanciamos (creamos) el nuevo nodo que vamos a incorporar a la lista.
  let current = this.head; // current es el puntero con el cual empezamos a recorrer los next, o sea el nodo próximo. Pero siempre empieza en head. Me guardo la referencia del head.
  //Si es el primer nodo que recibe mi lista, va a ir a tomar el lugar de this.head
  //Solo va a entrar una vez en el IF, será cuando el head está vacío.
  if (!current) { // lo primero que tengo que hacer es verificar si el head está vacío. // puedo poner !this.head === (this.head === null)
    this.head = node; // si no hay un head , que mi nodo nuevo sea el head.
    return node;
  }
  //Si head existe, entonces itero con un while, mientras haya un current.next != diferente a null. // iterador ilimitado(while).
  
  while(current.next) {//current.next !== null
  current = current.next
  };// Comienzo a recorrer los next de la lista .
  current.next = node; // Si no entra al while, es porque encontró un null, y ahí debo agregar el node.
}

// REMOVE: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía); 

LinkedList.prototype.remove = function() {  //la function no recibe parámetro porque vamos a eliminar el último nodo de la lista.
  let current = this.head; // me guardo la referencia del this.head
  //Si no entro en la lista.
  if(!current) return null; // tengo que preguntar si es una lista vacia. (!this.head) puedo poner también. // if(this.head === null) return null;
  //Si la lista tiene un solo elemento, debemos removerlo.
  else if(!current.next){ // esto es equivalente a decir if(this.head.next === null)
    let aux = this.head.value; // se puede poner current en lugar de this.head . guardamos el valor en una variable auxiliar antes de eliminar.
    this.head = null; // desvinculamos (desenganchamos el vagón) el valor guardado.
    return aux;
  }
  //Si la lista tiene mas de un elemento: iteramos.
  while (current.next.next) current = current.next // mientras haya dos current.next.next !== null

  let value = current.next.value; //nos guardamos el valor del current porque debemos retornarlo luego
  current.next = null; // desvinculamos el valor guardado.
  return value;
}
 
// SEARCH: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 

LinkedList.prototype.search = function(valueOrcb){ // puede recibir un valor o un callback.
  let current=this.head // current es el puntero con el cual empezamos a recorrer los next, o sea el nodo próximo. Pero siempre empieza en head.
  //Mientras tenga un current voy a iterar.
  while(current){
    if(typeof valueOrcb === 'function'){ // En caso de que sea una función. El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.
      if(valueOrcb(current.value)) return current.value // le pasamos el valor del nodo actual(current) por parámetro. si es true pasamos el valor del nodo actual(current).
    }   
    // En caso de que sea un dato.
    if(current.value === valueOrcb) return current.value // o devuelvo la otra comparación (valueOrcb).

    current = current.next 
  }
  return null;  // No encuentra ningún nodo cuyo valor coincida con lo buscado.
};
   
// let newList = new LinkedList();
// newList.add (5);
// newList.add (2);
// newList.add (2);
// newList.remove (2);
// console.log(newList);


/* EJERCICIO 2  ////////////////////////NO ENTRA EN CHECKPOINT/////////////////////
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

//Entrada -------> hash() ----------> buckets: donde guardar la entrada KEY.
function HashTable() {
  this.table = []; 
  this.numBuckets = 35;
};
// let pruebaHash = new HashTable()
// let prueba = "Jorge Nahuel Beja Rosa"

// - HASH: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.

// Las tablas hash son una estructura de datos que permite crear una lista de valores emparejados, por lo tal, se puede recuperar un determinado valor usando la llave de ese valor para el índice, que se pone en la tabla de antemano.

// Una tabla hash transforma una llave en un índice entero, usando una función hash, el índice decidirá dónde almacenar el par llave/valor en la memoria.

HashTable.prototype.hash = function(key){ // key = "maty" // Método licuadora (HASH).
  let hash = 0; // Inicializamos un contador para ir añadiendo los números que luego vamos a recibir.

  for (let i = 0; i < key.length; i++) { // iteramos la key en string.
      // console.log(key[i]); // m, a, t, y
      hash += key.charCodeAt(i); //Te da un número por cada caracter. // lo mismo sería hash = hash + key.charCodeAt(i) Este método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
  };
  return hash % this.numBuckets; // No dividimos porque da decimales. Buscamos número enteros. // % simbolo llamado módulo.
};

// pruebaHash.hash(prueba);

// - SET: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.

HashTable.prototype.set = function(key, value){  
  if (typeof key !== "string") throw TypeError ("Keys must be strings");

  let bucket = this.hash(key) // acá nos va a dar la posición donde lo debemos guardar.
  
  if (!this.table[bucket]) { 
    this.table[bucket] = {} // Index es la posición del elemento. Creamos un objeto para evitar COLISIONES!!!
  }
  this.table[bucket][key] = value; // Método brackets notations, usamos este metodo porque no conocemos el valor, si lo conocieramos usamos dot notatios.
};

// - GET: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.

HashTable.prototype.get = function(key){ // Recibo un parámetro porque tenemos que saber que valor vamos a buscar.
  let bucket = this.hash(key) // Aplicamos nuevamente el hasheo para determinar la posición del valor "key".
  return this.table[bucket][key] // Acá devolvemos el contacto.
};

// - HASKEY: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).


HashTable.prototype.hasKey = function(key){
  let bucket = this.hash(key)
  return !!this.table[bucket][key] // Doble negación nos devuelve un booleano. true or false. 
  // return this.table[bucket].hasOwnProperty(key). Es igual a la línea anterior.
}


// let newTable = new HashTable();
// newTable.hash("maty"); 
// newTable.hash("nico"); 
// newTable.hash("jorge"); 
// newTable.hash("Jorge");



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
