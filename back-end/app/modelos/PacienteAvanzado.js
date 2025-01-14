class PacienteAvanzado {
  constructor(
    id,
    edad,
    edadFumador,
    genero,
    cigarrillosDia,
    metabolitos,
    variacionGenetica,
    resultadoMetabolitos,
    resultadoVariacionGenetica
  ) {
    this.id = id;
    this.edad = edad;
    this.edadFumador = edadFumador;
    this.genero = genero;
    this.cigarrillosDia = cigarrillosDia;
    this.metabolitos = metabolitos;
    this.resultadoMetabolitos = resultadoMetabolitos;
    this.variacionGenetica = variacionGenetica;
    this.resultadoVariacionGenetica = resultadoVariacionGenetica;
    this.totalVariacionGenetica = this.variacionGenetica.reduce(
      (a, b) => a * b
    );
  }
}

module.exports = PacienteAvanzado;
