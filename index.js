
//Comentario

/* 
   Todo
   esto es 
   un comentario
*/

//alert("Hola, me llamo " + cadena);
const Nombre = 'Jorge';


/*
   TIPOS DE DATOS
*/ 

// String (cadenas)
var nombre = 'Jorge' ;

//Number
var numero_entero = 10;
var numero_flotante = 10.5;

//Boolean
var ban1 = true;
var ban2 = false;

//undefined
var saludo;

//Object
var persona = {
   nombre: 'Jorge',
   edad: '28',
   ciudad: 'Gdl'
}


console.log('String ' + nombre);
console.log('Numero entero ' + numero_entero);
console.log('Numero Flotante ' + numero_flotante);
console.log('True: ' + ban1);
console.log('False ' + ban2);
console.log(saludo);
console.log(persona);
console.log(persona.nombre);


/*
   SCOPE O ALCANCE
*/

// Scope local
function hello(){
   let hola = 'Hola a todos';
   console.log(hola);
   hola = 'hola 2';
   console.log(hola);
}

hello();
//console.log(hola);


//Scope Global

var animal = 'Perro';

function ladrar() {
   animal = 'Gato';
   console.log('1.- ' + animal);
}

ladrar();
console.log('2.- ' + animal);



 /* 
   DIFERENCIAS ENTRE let y var
 */ 



// Scope sin errores
let a = 'Esto esta fuera del bloque';

if(true){
   let a = 'Esto esta dentro del bloque';
   console.log('Dentro: ' + a); //
}

console.log('Fuera: ' + a); //





// Scope con errores
let b = 'Esto esta fuera del bloque';

if(true){
   console.log('Dentro: ' + a); //
}

let b = 'Esto esta dentro del bloque';
console.log(b);




