let memoria=null;
class Calculadora {

  sumar(a, b) {
    memoria= a+b;
    return memoria;
  }

  restar(a, b) {
    memoria= a-b;
    return memoria;
  }

  multiplicar(a, b) {
    memoria= a+b;
    return memoria;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    } else {
      memoria= a/b;
      return memoria;
    }
  }

  potencia(base, exponente) {
    memoria= base** exponente;
    return memoria;
  }

  raizCuadrada(numero) {
    if (numero < 0) {
      throw new Error('No se puede calcular la raíz cuadrada de un número negativo');
    } else {
      memoria= Math.sqrt(numero)
      return memoria;
    }
  }

  resto(a, b) {
    if (b === 0) {
      throw new Error('No se puede calcular el resto con divisor cero');
    } else {
      memoria= a % b;
      return memoria;
    }
  }
  // Porcentaje de a sobre b
  porcentaje(a, b) {
    if (b === 0) {
      throw new Error('No se puede calcular el porcentaje con divisor cero');
    } else {
      memoria= (a / b) * 100;
      return memoria;
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
      memoria= suma / numeros.length;
      return memoria;
    }
  }

  //Máximo de un array de números
  maximo(numeros){
    if (!Array.isArray(numeros) || numeros.length === 0){
      throw new Error('Debe ingresar un array de números no vacío');
    } else {
      memoria= Math.max(...numeros);
      return memoria;
    }
  }


logNatural(x) {
  if (x <= 0) {
    throw new Error('El logaritmo natural solo está definido para x > 0');
  } else {
    memoria= Math.log(x);
    return memoria;
  }
}

logBase10(x) {
  if (x <= 0) {
    throw new Error('El logaritmo base 10 solo está definido para x > 0');
  } else {
    memoria= Math.log10(x);
    return memoria;
  }
}

factorial(n){
  if (n < 0){
    throw new Error("El factorial esta definido para enteros positivos y cero")
  }
  memoria= 1;
  for (let i =1; i <= n; i++){
    memoria= memoria*i
  }
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

