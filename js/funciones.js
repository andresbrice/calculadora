"use strict";

//----- Variables -----
let numeroA, numeroB, operacion;

//----- Funciones -----

const suma = (numeroA, numeroB) => numeroA + numeroB;

const resta = (numeroA, numeroB) => numeroA - numeroB;

const multiplicacion = (numeroA, numeroB) => numeroA * numeroB;

const division = (numeroA, numeroB) => {
  while (numeroB === 0) {
    console.log(numeroB);
    numeroB = parseFloat(
      prompt(
        "No se puede dividir entre 0. Ingrese nuevamente el segundo número."
      )
    );
  }
  return numeroA / numeroB;
};

// ----- Funcion para saber si es un numero -----
const esNumero = (numero) => {
  while (isNaN(parseFloat(numero))) {
    numero = parseFloat(prompt("Dato incorrecto. Debe introducir un número"));
  }
  return parseFloat(numero);
};

// ----- Funcion para saber si es una operacion correcta -----
const esOperacion = (operacion) => {
  while (
    operacion !== "suma" &&
    operacion !== "resta" &&
    operacion !== "multiplicacion" &&
    operacion !== "division"
  ) {
    operacion = prompt(
      "Opción incorrecta. Introduzca una operación: suma, resta, multiplicacion o division"
    );
  }
};

//-----Mensaje de despedida-----
const despedida = () => {
  alert(
    "Muchas gracias por utilizar el simulador de calculadora. Para seguir utilizandolo presione F5 o refresque el navegador"
  );
};

//-----Declaro la calculadora-----
const calculadora = () => {
  //-----Pido el primer numero-----
  numeroA = prompt("Introduzca el primer número");

  //-----Valido que el numero A sea un numero-----
  numeroA = esNumero(numeroA);
  console.log(numeroA);

  //-----Pido el segundo numero-----
  numeroB = prompt("Introduzca el segundo número");

  //-----Valido que el numero B sea un numero-----
  numeroB = esNumero(numeroB);
  console.log(numeroB);

  //-----Pido la operacion-----
  operacion = prompt(
    "Introduzca una operacion: suma, resta, multiplicacion o division"
  );

  //-----Valido que la operacion sea la correcta y este bien escrita-----
  esOperacion(operacion);

  switch (operacion) {
    case "suma":
      alert(`El resultado de la suma es ${suma(numeroA, numeroB)}`);
      console.log(suma(numeroA, numeroB));
      despedida();
      break;
    case "resta":
      alert(`El resultado de la resta es ${resta(numeroA, numeroB)}`);
      console.log(resta(numeroA, numeroB));
      despedida();
      break;
    case "multiplicacion":
      alert(
        `El resultado de la multiplicación es ${multiplicacion(
          numeroA,
          numeroB
        )}`
      );
      console.log(multiplicacion(numeroA, numeroB));
      despedida();
      break;
    case "division":
      alert(`El resultado de la división es ${division(numeroA, numeroB)}`);
      console.log(division(numeroA, numeroB));
      despedida();
      break;
  }
};
