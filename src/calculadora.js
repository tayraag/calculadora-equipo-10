class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    } else {
      return a / b;
    }
  }

  potencia(base, exponente) {
    return base ** exponente;
  }

  raizCuadrada(numero) {
    if (numero < 0) {
      throw new Error('No se puede calcular la raíz cuadrada de un número negativo');
    } else {
      return Math.sqrt(numero);
    }
  }

  resto(a, b) {
    if (b === 0) {
      throw new Error('No se puede calcular el resto con divisor cero');
    } else {
      return a % b;
    }
  }
  // ingresar varios números mediante un array y definir cuál es el máximo
  maximo(numeros){
    if (!Array.isArray(numeros)|| numeros.length ===0){
      throw new Error('Debe ingresar un array de números no vacío');
    } else{
      return Math.max(...numeros); //Los 3 puntos son para que el math.max reciba varios números y no un array
    }
  }
}




// Exportar para usar en tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('calc.sumar(5, 3):', calc.sumar(5, 3));
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(a, b)');
console.log('- calc.dividir(a, b)');
console.log('- calc.potencia(base, exponente)');
console.log('- calc.raizCuadrada(numero)');
console.log('- calc.resto(a, b)');
console.log('- calc.maximo(arrayDeNumeros)');