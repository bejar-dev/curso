/*
    DÍA 3: Control de flujo y funciones
*/

// Función para imprimir resultado
const imprimirResultado = (resultado, numEjercicio) => {
    console.log(`Día 2 - Ejercicio ${numEjercicio}`);
    console.log(resultado);
    console.log("-------------------");
}

// Ejercicio 1: El Saludador(Function/Arrow Function)
const saludar = (nombre) => `Hola ${nombre}, bienvenido a el día 2.`;

imprimirResultado(saludar("Jhair"), 1);

// Ejercicio 2: Verificador de Edad (if/else)
const EDAD_LEGAL = 18;
const edad = 20;
let mensaje;

if (edad >= EDAD_LEGAL) {
    mensaje = `Tu edad es ${edad}. Eres mayor de Edad`;
} else {
    mensaje = `Tu edad es ${edad}. Eres menor de Edad`;
}

imprimirResultado(mensaje, 2);

// Ejercicio 3: El Contador
let resultado = "";

console.log("Día 2 - Ejercicio 3:");

for (let i = 1; i <= 5; i++) {
    resultado = `Número: ${i}`;
    console.log(resultado);
}

console.log("-------------------");

// EJERCICIO 4: esPar(num)
const verificarNum = 40;

const esPar = (num) => {
    return num % 2 === 0;
}


let mensajePar = `¿El número ${verificarNum} es par? ${esPar(verificarNum)}`;

imprimirResultado(mensajePar, 4);

// Ejercicio 5: Clasificador de Números
const clasicarNum = (num) => {
    let mensaje;

    if (num > 0) {
        mensaje = "Número Positivo";
    } else if (num < 0) {
        mensaje = "Número Negativo.";
    } else {
        mensaje = "Es cero";
    }

    return mensaje;
}

console.log("Día 2 - Ejercicio 5");
console.log(clasicarNum(23));
console.log(clasicarNum(0));
console.log(clasicarNum(-8));
console.log("--------------------");

// Ejercicio 6: Tabla de Multiplicar
const tablaDel = (num) => {
    console.log(`Tabla del ${num}:`);

    for (let i = 0; i <= 12; i++) {
        let resultado = num * i;
        console.log(`${num} * ${i} = ${resultado}`);
        
    }
}

console.log("Día 2 - Ejercicio 6")
tablaDel(7);
console.log("-------------------");

// Ejercicio 7: esPar(Version Flecha)
const newEsPar = (num) => num % 2 === 0 ? true : false;

console.log("Dia 2 - Ejercicio 7")
console.log(newEsPar(6));
console.log(newEsPar(7));
console.log("-------------------")

// Ejercicio 8: Factorial
const colorSemaforo = (valor) => {
  
  if (typeof valor === 'string' && /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(valor)) {

    let color = valor.toLowerCase();
    let significado = "";

    switch (color) {
      case "rojo":
        significado = `El color ${color} significa "Detenerse"`;
        break;

      case "amarillo":
        significado = `El color ${color} significa "Precaución"`;
        break;

      case "verde":
        significado = `El color ${color} significa "Avance"`;
        break;

      default:
        significado = `No se reconoce el color.`;
        break;
    }

    return significado;

  } else {
    return "El valor no es un texto válido.";
  }
};

console.log("Día 2 - Ejercicio 8:")
console.log(colorSemaforo("AmarILLo"));
console.log(colorSemaforo(12));
console.log(colorSemaforo("007"));
console.log("-------------------")

// Ejercicio 11: esPar (version Ternaria)
const numeros = [1, 2, 45, 34, 56, 35, 57, 3];

const clasificarPares = (numeros) => {
    const esParTernario = (num) => num % 2 === 0;

    for (const numero of numeros) {
        if (esParTernario(numero)) {
            console.log(`Es par: ${numero}`);
        }
    }
}

console.log("Día 2 - Ejercicio 11");
clasificarPares(numeros);
console.log("-------------------");





