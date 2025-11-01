/*
EJERCICIOS BÁSICOS - RETO DE LÓGICA
- FizzBuzz (múltiplos de 3 y 5).
- Invertir un string.
- Contar cuántas vocales tiene una palabra.
- Comprobar si una palabra es palíndromo.
*/

// Impresion Cabecera
const imprimirCabecera = (ejercicio, nombre) => {
    console.log(`---------------Ejercicio ${ejercicio}: ${nombre}---------------`)
} 

// Impresion Pie
const imprimirPie = () => {
    console.log(`------------------------------`)
}


// Ejercicio 1: FizzBuzz (3, 5 y 15)
const fizzBuzz = () => {
    for (let i = 0; i <= 100; i++) {
        
        // Validar si es múltiplo de 15
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        
        // Validar si es múltiplo de 3
        } else if (i % 3 === 0) {
            console.log("Fizz");
        
        // Validar si es múltiplo de 3
        } else if (i % 5 === 0) {
            console.log("Buzz");

        // Imprimir los que no pertenecen
        } else {
            console.log(i)
        }
        
    }
}

imprimirCabecera(1, "FizzBuzz")
fizzBuzz();
imprimirPie()


// Ejercicio 2: Invertir un string
const invertirString = (palabra) => {
    // Validar que la entrada existe y es un String
    if(typeof palabra === 'string' && palabra) {
        // Separamos, revertimos, juntamos
        const palabraInvertida = palabra.split('').reverse().join('');

        return palabraInvertida;
    } else {
        return "Error: El parámetro está vacío o debe ser tipo string"
    }

}

imprimirCabecera(2, "Invertir String");
console.log(invertirString("JavaScript"));
console.log(invertirString());
console.log(invertirString(45));
imprimirPie();


// Ejercicio 3: Contar cuantas vocales tiene una palabra
const contarVocales = (palabra) => {
    // Validamos parámetro
    if (palabra && typeof palabra === 'string') {
        // Convertimos a minúscula, separamos, filtramos por vocales
        const vocales = palabra.toLocaleLowerCase().split('').filter(vocal => "aeiouáéíóú".includes(vocal))

        // Retornamos la cantidad
        return vocales.length
    } else {
        return "Error: Parámetro inválido."
    }
}

imprimirCabecera(3, "Contar Vocales");
console.log(contarVocales("Programación"));
imprimirPie();


// Ejercicio 4: Comprobar si una palabra es Palíndromo
const comprobarPalindromo = (palabra) => {
    // Validamos entrada
    if (palabra && typeof palabra === 'string') {
        // Convertimos a minúsculas, separamos, reversa y unimos
        const reversoPalabra = palabra.toLocaleLowerCase().split('').reverse().join('');

        // Validar si son iguales
        return palabra === reversoPalabra
    } else {
        return "Error: Parámetro incorrecto"
    }

}

imprimirCabecera(4, "Comprobar Palíndromo");
console.log(comprobarPalindromo("reconocer"));
console.log(comprobarPalindromo("oso"));
console.log(comprobarPalindromo("coche"));
imprimirPie();
