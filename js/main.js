"use strict";

//----- Variables -----
let arrayResultados = [];
let resultado;
let nuevaIteracion;

//-----Mensaje de bienvenida-----
const bienvenida = alert(
  "Bienvenido al simulador de calculadora by Andrés Briceño. Para su correcto uso deberá ingresar dos números y luego indicar que operación quiere realizar."
);

//-----Mensaje de despedida-----
const despedida = () => {
  alert(
    "Muchas gracias por utilizar el simulador de calculadora. Para seguir utilizándolo presione F5 o refresque el navegador"
  );
};

//----- Funciones booleanas -----
const esNumero = (numero) => {
  while (isNaN(parseFloat(numero))) {
    numero = parseFloat(prompt("Dato incorrecto. Debe introducir un número"));
    console.log(`El nuevo intento de número es: ${numero}`);
  }
  return parseFloat(numero);
};

const esOperacion = (operacion) => {
  while (
    operacion !== "suma" &&
    operacion !== "resta" &&
    operacion !== "multiplicacion" &&
    operacion !== "division"
  ) {
    console.log(`Se ingreso una operación incorrecta: ${operacion}`);

    operacion = prompt(
      "Opción incorrecta. Introduzca una operación: suma, resta, multiplicacion o division"
    );
  }
  return operacion;
};

//----- Inicio calculadora -----
do {
  let numeroA = prompt("Introduzca el primer número");
  console.log(`El primer número es: ${numeroA}`);
  numeroA = esNumero(numeroA);

  let numeroB = prompt("Introduzca el segundo número");
  console.log(`El segundo número es: ${numeroB}`);
  numeroB = esNumero(numeroB);

  let operacion = esOperacion(
    prompt("Introduzca una operación: suma, resta, multiplicación o división")
  );
  console.log(`La operación ingresada es: ${operacion}`);

  //----- Instancio calculadora -----
  const calculadora = new Calculadora(numeroA, numeroB);

  switch (operacion) {
    case "suma":
      resultado = calculadora.sumar(numeroA, numeroB);
      alert(`El resultado de la suma es ${resultado}`);
      break;
    case "resta":
      resultado = calculadora.restar(numeroA, numeroB);
      alert(`El resultado de la resta es ${resultado}`);
      break;
    case "multiplicacion":
      resultado = calculadora.multiplicar(numeroA, numeroB);
      alert(`El resultado de la multiplicación es ${resultado}`);
      break;
    case "division":
      resultado = calculadora.dividir(numeroA, numeroB);
      alert(`El resultado de la división es ${resultado}`);
      break;
  }

  //----- Listar total de resultados -----
  arrayResultados.push(resultado);
  console.log(`Lista completa de resultados: ${arrayResultados}`);

  //----- Filtro de números negativos -----
  const numerosNegativos = arrayResultados.filter((numero) => numero < 0);
  console.log(`Lista de números negativos: ${numerosNegativos}`);

  // ----- Encontrar primer numero mayor a 50 -----
  const numeroMayorACincuenta = arrayResultados.find((numero) => numero > 50);
  console.log(`Número mayor a 50: ${numeroMayorACincuenta}`);

  nuevaIteracion = prompt("¿Desea realizar otra operación? (Si o No)");

  if (
    nuevaIteracion.toUpperCase() !== "SI" &&
    nuevaIteracion.toUpperCase() !== "NO"
  ) {
    nuevaIteracion = prompt(
      "¿Como? No entiendo... ¿deséas realizar una nueva operación? (Si o No)"
    );
  }
} while (nuevaIteracion.toUpperCase() !== "NO");

despedida();
