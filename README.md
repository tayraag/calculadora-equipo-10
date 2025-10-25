# calculadora-curso-git
Una calculadora simple de consola desarrollada en JavaScript con cliente interactivo de uso para los trabajos prácticos del Curso de git.

## Integrantes

- Tayra Aguila
- Gaston Mendiola
- Lucas Gastón Vela
- Szulzyk Joaquín

## 📋 Características

- ✅ Operaciones matemáticas básicas
- 🔄 Cliente interactivo con menú

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio
cd calculadora-curso-git

# No requiere instalación de dependencias
# Solo necesitas tener Node.js instalado
```

## 📦 Requisitos

- Node.js (versión 12 o superior)

## 💻 Uso

### Cliente Interactivo

Ejecuta el cliente interactivo para usar la calculadora:

```bash
node cliente.js
```

Verás un menú como este:

```
=================================
     CALCULADORA INTERACTIVA     
=================================
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Potencia
6. Raíz Cuadrada
7. Resto
8. Promedio
9. Maximo de un arreglo
14. Historial de Operaciones
15. Limpiar Historial

0. Salir
=================================
```

## 📂 Estructura del Proyecto

```
calculadora-curso-git/
├── src/
│   ├── calculadora.js
│   ├── cliente.js
│   └── tests.js
├── README.md
├── CHANGELOG.md
└── .gitignore
```

## 🔧 Funciones Disponibles

| Función | Estado | Descripción |
|---------|--------|-------------|
| `sumar(a, b)` | ✅ Implementada | Suma dos números |
| `restar(a, b)` | ✅ Implementada | Resta dos números |
| `multiplicar(a, b)` | ✅ Implementada | Multiplica dos números |
| `dividir(a, b)` | ✅ Implementada | Divide dos números |
| `potencia(base, exp)` | ✅ Implementada | Eleva un número a una potencia |
| `raizCuadrada(num)` | ✅ Implementada | Calcula la raíz cuadrada |
| `resto(a, b)` | ✅ Implementada | Calcula el resto de la división |
| `promedio(array)` | ✅ Implementada | Calcula el promedio de un array |
| `maximo(array)` | ✅ Implementada | Encuentra el máximo de un arreglo |
| `factorial(n)` | ✅ Implementada | Calcula el factorial de un numero |
| `memoria` | ✅ Implementada | guarda el ultimo calculo en memoria para utilizar despues |
| `getHistorial()` | ✅ Implementada | Devuelve el historial de operaciones realizadas |
| `limpiarHistorial()` | ✅ Implementada | Borra todo el historial de operaciones |