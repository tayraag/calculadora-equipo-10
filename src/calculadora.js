let memoria = null;
class Calculadora {
  constructor() {
    this.historial = [];
  }

  getHistorial() {
    return this.historial;
  }

  limpiarHistorial() {
    this.historial = [];
  }

  sumar(a, b) {
    memoria = a + b;
    this.historial.push(`Suma: ${a} + ${b} = ${memoria}`);
    return memoria;
  }

  restar(a, b) {
    memoria = a - b;
    this.historial.push(`Resta: ${a} - ${b} = ${memoria}`);
    return memoria;
  }

  multiplicar(a, b) {
    memoria = a * b;
    this.historial.push(`Multiplicación: ${a} * ${b} = ${memoria}`);
    return memoria;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    } else {
      memoria = a / b;
      this.historial.push(`División: ${a} / ${b} = ${memoria}`);
      return memoria;
    }
  }

  potencia(base, exponente) {
    memoria = base ** exponente;
    this.historial.push(`Potencia: ${base} ^ ${exponente} = ${memoria}`);
    return memoria;
  }

  raizCuadrada(numero) {
    if (numero < 0) {
      throw new Error('No se puede calcular la raíz cuadrada de un número negativo');
    } else {
      memoria = Math.sqrt(numero);
      this.historial.push(`Raíz Cuadrada: √${numero} = ${memoria}`);
      return memoria;
    }
  }

  resto(a, b) {
    if (b === 0) {
      throw new Error('No se puede calcular el resto con divisor cero');
    } else {
      memoria = a % b;
      this.historial.push(`Resto: ${a} % ${b} = ${memoria}`);
      return memoria;
    }
  }
  // Porcentaje de a sobre b
  porcentaje(a, b) {
    if (b === 0) {
      throw new Error('No se puede calcular el porcentaje con divisor cero');
    } else {
      memoria = (a / b) * 100;
      this.historial.push(`Porcentaje: (${a} / ${b}) * 100 = ${memoria}%`);
      return memoria;
    }
  }

  //Promedio de un array de números
  promedio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      throw new Error('Debe ingresar un array de números no vacío');
    } else {
      let suma = 0;
      for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
      }
      memoria = suma / numeros.length;
      this.historial.push(`Promedio: ${suma} / ${numeros.length} = ${memoria}`);
      return memoria;
    }
  }

  //Máximo de un array de números
  maximo(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      throw new Error('Debe ingresar un array de números no vacío');
    } else {
      memoria = Math.max(...numeros);
      this.historial.push(`Máximo: max(${numeros}) = ${memoria}`);
      return memoria;
    }
  }


  logNatural(x) {
    if (x <= 0) {
      throw new Error('El logaritmo natural solo está definido para x > 0');
    } else {
      memoria = Math.log(x);
      this.historial.push(`Logaritmo Natural: ln(${x}) = ${memoria}`);
      return memoria;
    }
  }

  logBase10(x) {
    if (x <= 0) {
      throw new Error('El logaritmo base 10 solo está definido para x > 0');
    } else {
      memoria = Math.log10(x);
      this.historial.push(`Logaritmo Base 10: log10(${x}) = ${memoria}`);
      return memoria;
    }
  }

  factorial(n) {
    if (n < 0) {
      throw new Error("El factorial esta definido para enteros positivos y cero")
    }
    memoria = 1;
    for (let i = 1; i <= n; i++) {
      memoria = memoria * i
    }
    this.historial.push(`Factorial: ${n}! = ${memoria}`);
    return memoria;
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
console.log('- calc.porcentaje(a, b)');
console.log('- calc.promedio(arrayDeNumeros)');
console.log('- calc.maximo(arrayDeNumeros)');
console.log('- calc.logNatural(numero)');
console.log('- calc.logBase10(numero)');
console.log('- calc.factorial(numero');
console.log('\nHistorial de operaciones:');
console.log(calc.getHistorial().join('\n'));
