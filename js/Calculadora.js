class Calculadora {
  constructor(numeroA, numeroB) {
    this.numeroA = numeroA;
    this.numeroB = numeroB;
  }

  sumar() {
    return this.numeroA + this.numeroB;
  }

  restar() {
    return this.numeroA - this.numeroB;
  }

  multiplicar() {
    return this.numeroA * this.numeroB;
  }

  dividir() {
    while (this.numeroB === 0 || isNaN(this.numeroB)) {
      this.numeroB = parseFloat(
        prompt(
          "No se puede dividir entre 0, ingrese nuevamente el segundo número. Recuerde que tampoco se admiten letras ni símbolos"
        )
      );
      console.log(this.numeroB);
    }
    return this.numeroA / this.numeroB;
  }
}
