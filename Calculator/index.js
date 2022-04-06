let num1;
let resultado;
let operador;

function init(){
   resultado = document.getElementById('resultado');
   operador = document.getElementById('operador');
}

function setNumber(number){
   resultado.textContent = resultado.textContent + number;
}

function setOperador(op){
   operador.textContent = op;
   num1 = resultado.textContent + op;
   limpiar();
}

function limpiar(){
   resultado.textContent = '';
}

function resolver(){
   let operacion = operador.textContent;
   let num2 = resultado.textContent;
   let resul = 0;

   switch(operacion){
      case '+':
         resul = parseFloat(num1) + parseFloat(num2);
         break;
      case '-':
         resul = parseFloat(num1) - parseFloat(num2);
         break;
      case '*':
         resul = parseFloat(num1) * parseFloat(num2);
         break;
      case '/':
         resul = parseFloat(num1) / parseFloat(num2);
         break;
   }

   resetear();
   resultado.textContent = resul;
}

function resetear(){
   resultado.textContent = '';
   operador.textContent = '';
   num1 = 0;
   num2 = 0;
   operacion = '';
}



