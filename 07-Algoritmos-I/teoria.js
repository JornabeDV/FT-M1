// Algoritmos

// ejemplo

let = arr1 [1, 2, 3, 4, 5]; //
let = arr2 [6, 7, 8, 9, 10]; //

for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);

    for (let j = 0; j < arr2.length; j++){
        console.log(arr2[j]);
    }
}

// O(n * m)

// let arr3 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr3.length; i++){
//     console.log(arr3[i]);
//     for let
// } INCOMPLETE //

//ALGORITMOS DE ORDENAMIENTO: (ALGORITMOS DE BÚSQUEDA)

// BUBBLESORT:

// Recorré los elementos: si dos items adyacentes estan desordenados, hacé un swap.
// Si terminas un recorrido sin hacer un swap, ya está ordenado.
// Este es el algoritmo más sencillo probablemente. Ideal para empezar. Consiste en ciclar repetidamente a través de la lista, comparando elementos adyacentes de dos en dos. Si un elemento es mayor que el que está en la siguiente posición se intercambian. ¿Sencillo no?

//INSTERTIONSORT:
//Distintas definiciones útiles:
// Este es tal vez uno de los más simples, y consiste básicamente en extraer el elemento del conjunto y agregarlo en la posición que le corresponde según el ordenamiento que estemos usando. Para hacerlo el algoritmo tiene que ir viendo cada uno de los elementos que ya están y compararlo con el extraido, hasta encontrar la posición que corresponde.
// Este algoritmo también es bastante sencillo. ¿Has jugado cartas?. ¿Cómo las vas ordenando cuando las recibes? Yo lo hago de esta manera: tomo la primera y la coloco en mi mano. Luego tomo la segunda y la comparo con la que tengo: si es mayor, la pongo a la derecha, y si es menor a la izquierda (también me fijo en el color, pero omitiré esa parte para concentrarme en la idea principal). Después tomo la tercera y la comparo con las que tengo en la mano, desplazándola hasta que quede en su posición final. Continúo haciendo esto, insertando cada carta en la posición que le corresponde, hasta que las tengo todas en orden. ¿Lo haces así tu también? Bueno, pues si es así entonces comprenderás fácilmente este algoritmo, porque es el mismo concepto.
// Para simular esto en un programa necesitamos tener en cuenta algo: no podemos desplazar los elementos así como así o se perderá un elemento. Lo que hacemos es guardar una copia del elemento actual (que sería como la carta que tomamos) y desplazar todos los elementos mayores hacia la derecha. Luego copiamos el elemento guardado en la posición del último elemento que se desplazó.

//SELECTIONSORT:
// -Buscas el elemento más pequeño de la lista.
// -Lo intercambias con el elemento ubicado en la primera posición de la lista.
// -Buscas el segundo elemento más pequeño de la lista.
// -Lo intercambias con el elemento que ocupa la segunda posición en la lista.
// -Repites este proceso hasta que hayas ordenado toda la lista.
// Selection Sort intenta ordenar por posición, es decir empieza en la posicion mínima y busca el elemento que corresponde a ese lugar. Básicamente, empieza buscando el primer mínimo (si ordenamos en forma creciente ) y lo pone en la primera posición, luego para la segunda posición vuelve a buscar el mínimo pero dentro de los elementos que quedan, así sucesivamente hasta que no quedan elementos por ordenar.