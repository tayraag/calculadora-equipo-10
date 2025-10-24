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
  // Porcentaje de a sobre b
  porcentaje(a, b) {
    if (b === 0) {
      throw new Error('No se puede calcular el porcentaje con divisor cero');
    } else {
      return (a / b) * 100;
    }
  }

  //Promedio de un array de números
  promedio(numeros){
    if (!Array.isArray(numeros) || numeros.length === 0){
      throw new Error('Debe ingresar un array de números no vacío');
    } else {
      let suma = 0;
      for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
      }
      return suma / numeros.length;
    }
  }

  //Máximo de un array de números
  maximo(numeros){
    if (!Array.isArray(numeros) || numeros.length === 0){
      throw new Error('Debe ingresar un array de números no vacío');
    } else {
      return Math.max(...numeros);
    }
  }


logNatural(x) {
  if (x <= 0) {
    throw new Error('El logaritmo natural solo está definido para x > 0');
  } else {
    return Math.log(x);
  }
}

logBase10(x) {
  if (x <= 0) {
    throw new Error('El logaritmo base 10 solo está definido para x > 0');
  } else {
    return Math.log10(x);
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
console.log('- calc.porcentaje(a, b)');
console.log('- calc.promedio(arrayDeNumeros)');
console.log('- calc.maximo(arrayDeNumeros)');
console.log('- calc.logNatural(numero)');
console.log('- calc.logBase10(numero)');

