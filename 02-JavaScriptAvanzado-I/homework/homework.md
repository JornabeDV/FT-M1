# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5; 
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b); // b = 10
console.log(x); // x = 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // baz is not defined
function foo() {
   console.log('Hola!'); 
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // instructor = 'Franco'
```

```javascript
var instructor = 'Tony';
console.log(instructor); // instructor = 'Tony'
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // instructor = 'Franco' 
   }
})();
console.log(instructor); // instructor = 'Tony'
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // instructor = 'The Flash'
   console.log(pm); // instructor = 'Reverse Flash'
}
console.log(instructor); // instructor = 'The Flash'
console.log(pm); // instructor = 'Franco'
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45, primero concatena $4 y se transforma en "$4" string, luego suma
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
{}[0] // [0]
parseInt("09") // 9
5 && 2 // 2 // con el & siempre devuelve el de la derecha
2 && 5 // 2 
5 || 0 // 5 // el 0 es false, y el 5 es true. por lo tanto devuelve 5.
0 || 5 // 5 // el 0 es false, y el 5 es true. por lo tanto devuelve 5.
[3]+[3]-[10] // 23
3>2>1 // false, compara 3 y 2 y da true y luego compara con 1 y ahí arroja el false. pero true si es igual a 1, true = 1
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined. 
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // No devuelve nada. se cancela la función. // Si le ponemos "true" ejecuta la función.
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // "Aurelio de Rosa"

var test = obj.prop.getFullname;

console.log(test()); // "Juan Perez"
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // PRIMERO
   setTimeout(function () {
      console.log(2); // SEGUNDO
   }, 1000);
   setTimeout(function () {
      console.log(3); // PRIMERO
   }, 0);
   console.log(4); // PRIMERO
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
