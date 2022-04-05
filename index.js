
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

//let b = 'Esto esta dentro del bloque';
console.log(b);



/*************************************
            CONDICIONALES
**************************************/

if(true){
   console.log('Hola mundo!!');
}


//IF ELSE
let numero = 10;

if(numero == 5){
   console.log('No es el numero 10');
}
else {
   console.log('Es el numero 10');
}


//IF anidadas

let numero_2 = 7;

if(numero_2 == 4){
   console.log('Este es el numero 4');
}else if (numero_2 == 6){
   console.log('Este es el numero 6');
}else if (numero_2 == 8){
   console.log('Este es el numero 8');
}else{
   console.log('Este es el numero 10');
}


/*************************************
         OPERADORES RELACIONALES
**************************************/


let numero_3 = 3;

if(numero_3 <= 10){
   console.log('Este numero es menor o igual a 10');
}

if(numero_3 >= 5){
   console.log('Este numero es mayor o igual a 5');
}

if(numero_3 != 4){
   console.log('Este numero es diferente a 4');
}

if( '5' == 5){
   console.log('Es igual');
}

if('5' === '5'){
   console.log('Es igual');
}


/*************************************
         OPERADORES LOGICOS
**************************************/

// or (||) 
let color = 'Verde';

if(color == 'Rojo' || color == 'Negro'){
   console.log('Este color es Rojo o negro');
}


// and (&&)

let numero_4 = 20;

if(numero_4 >= 10 && numero_4 <= 20){
   console.log('El numero esta entre el 10 y el 20');
}

// ! NOT
console.log( !(4 == 4) );


/*************************************
         OPERADORES MATEMATICOS
**************************************/


let num1 = 25;
let num2 = 10;
let resul = 0;

resul = num1 + num2;
console.log(resul);

resul = num1 - num2;
console.log(resul);

resul = num1 * num2;
console.log(resul);

resul = num1 / num2;
console.log(resul);


/*************************************
               CICLOS
**************************************/

console.log('Hola mundo!!');
console.log('Hola mundo!!');
console.log('Hola mundo!!');
console.log('Hola mundo!!');
console.log('Hola mundo!!');

//FOR

for(let x = 0; x < 50; x++){
   console.log('Hola mundo!!');
}


//WHILE
 let x = 0;
 while(x < 50){
   console.log('Hola mundo!!');
   //x = x + 1;
   x++;
 }


/*************************************
               ARRAYS
**************************************/

let nombres = ['NombreA','NombreB','NombreC'];

for(let x = 0; x < nombres.length; x++){
   //console.log(nombres[x]);
}


// Agregar elementos al array
nombres.push('NombreD');
nombres.push('NombreX');



//Eliminar elementos del array

//nombres.shift();
//nombres.pop();
nombres.splice(1,3);

for(let x = 0; x < nombres.length; x++){
   console.log(nombres[x]);
}


/*************************************
               FUNCIONES
**************************************/

/*
   function nombre_funcion(parametros){
      instrucciones
   }
*/

function hello(){
   console.log('Hola mundo!!');
}

hello();


//Con parametros
function hola_2 (nombre){
   //console.log('Hola ' + nombre);
}

hola_2('Jorge');


//Con return
function hola_3 (nombre){
   return 'Hola ' + nombre;
}

let saludo_2 =  hola_3('Jorge');
console.log(saludo_2);


function square(number){
   return number * number;
}

console.log( square(5) );


/*************************************
               EVENTOS
**************************************/


function load(){
   console.log('La pagina esta totalmente cargada');
}

function show(){
   alert('Di click!!');
}

function showBlur(){
   let name = document.getElementById('name');
   alert(name.value);
}

function getModelo(){
   let modelo = document.getElementById('mySelect');
   document.getElementById('consola').innerHTML = 'Seleccionaste el modelo: ' + modelo.value;
}

function setColor(p, color){
   p.style.color = color;
}



/*************************************
            Objetos JSON
**************************************/


// JSON stringify

let coche = {
   modelo: 'Mazda',
   anioFabricacion: 2020,
   motor: 'Gasolina'
}

let cadena = JSON.stringify(coche);

console.log('Cadena', cadena);


// JSON Parse
let objeto = JSON.parse('{"modelo":"Mazda","anioFabricacion":2020,"motor":"Gasolina"}');
console.log('Objeto', objeto);


/*************************************
            Colleciones
**************************************/

let map = new Map();

map.set('id', 1); // Almacena el valor con su clave
map.set('modelo', 'Mazda');

//Devuelve el valor de la clave
let id = map.get('modelo');

//Devuvelve true o false si existe en el Map
let band = map.has('id');

//Eliminar un elemento del Map
map.delete('modelo');

//elimina todo el Map
map.clear();

let tamano = map.size;

console.log(tamano);


// Iteracciones sobre Map

let ingredientes = new Map(
   [
      ['pepino', 500],
      ['tomate', 350],
      ['cebolla', 50]
   ]
);

for( let v of ingredientes.keys()){
   console.log(v);
}

for( let v of ingredientes.values()){
   console.log(v);
}

for( let entry of ingredientes){
   console.log(entry);
}

