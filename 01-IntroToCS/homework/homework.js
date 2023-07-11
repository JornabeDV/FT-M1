'use strict';

function BinarioADecimal(num) {
   //Necesito las posiciones => RECORDAR que son de derecha a izquierda
   //Elevar la base 2 a las posiciones.
   //El resultado de la potencia lo multiplicamos por el numero binario.
   //Sumamos los resultados de todos los calculos respectivos a su posición.

   //1°RESOLUTION:
   // return parseInt(num, 2); 
   // Funcion parseInt: convierto una cadena binaria de texto a un número.
   // Funcion toString: permite convertir cualquier número en una cadena de texto.

   //2°RESOLUTION:
   // const num = num.split('').map(Number);

   //3°RESOLUTION:
   // let decimal = 0;
   
   // for (let i = 0; i < num.length; i++) {
   //    const power = num.length - 1 - i;
   //    decimal += num[i] * 2 ** power;
   // };
   // return decimal;

   //4°RESOLUTION:
   // let numDecimal = 0;
   // let numPotencia = 0;

   // for (let i = num.length - 1; i >= 0 ; i--){
   //    const digito = parseInt(num[i]);
   //    numDecimal += digito * Math.pow(2, numPotencia);
   //    numPotencia ++;
   // };
   // return numDecimal;

   //5°RESOLUTION:
   // let str = num.toString();
   // let decimal = 0;
   // let suma = 0;
   // for (let i = 0; i < str.length; i++) {
   //    suma = 2**(str.length -i-1) * str[i];
   //    decimal += suma
   // };
   // return decimal;

   //6°RESOLUTION:
   num = num.split('').reverse();
   var suma = 0;

   for (let i = 0; i < num.length; i++) {
      suma += Math.pow(2, i) * num[i];
   };
   return suma;
}

function DecimalABinario(num) {

   //1°RESOLUTION:
   // var binario = [];

   // while (num !== 0){
   //    binario.unshift(num % 2);
   //    num = Math.floor(num / 2);
   // };

   // return binario.join('');

   //2°RESOLUTION:
   // let binario = '';
   // while (num > 0){
   //    binario += num % 2
   //    num = Math.floor(num / 2);
   // };
   // return binario.split('').reverse().join('');

   //3°RESOLUTION:
   let binario = [];

   while (num !== 0){
      binario.unshift (num % 2)// Lo mismo poner push y luego reverse.
      num = Math.floor(num / 2);
   };

   return binario.join('');
   
}
   
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
