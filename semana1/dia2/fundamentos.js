/* 
FUNDAMENTOS DE JS
- Tipos de inicializar variables:
=> const: Se usa para valores que no cambian (usarlo siempre que sea posible)
    =>
=> let: solo si se sabe que una variable debe ser reasignada más adelante. Ej: estados(hooks), contador, etc.

- Tipos de datos:
    Primitivos:
    - string => cadenas de texto
    - number => numeros enteros y flotantes(decimales)
    - bigint => números enteros muy grandes
    - boolean => true o false
    - null => valor de ausencia intencional
    - undefined => cuando una variable no se le asigna un valor conocido
    - symbol valores únicos e inmutables, a menudo usados como claves de propiedad de objeto
    - object => colecciones de datos más complejos. Estoy incluye arrays, funciones, fechasy objetos literales.
*/

// VARIABLES/NÚMEROS: Calcular edad actual (2025)
const CURRENT_YEAR = 2025;
const YEAR_OF_BIRTH = 2005;

const currentAge = CURRENT_YEAR - YEAR_OF_BIRTH;

console.log("Ejercicio 1:");
console.log("Edad actual: ", currentAge);
console.log("-------------------");

// STRINGS/LITERALES: Usar template literals para imprimir nombre y apellido
const name = 'Jhair';
const lastName = 'Bejar';

const greeting = `Hola, ${name} ${lastName}. Bienvenido a JS.`;

console.log("Ejercicio 2:");
console.log(greeting);
console.log("-------------------");

// BOOLEANOS/OPERADORES LÓGICOS: Invertir el estado de registros
const estaRegistrado = true;
const noEstaRegistrado = !estaRegistrado;

console.log("Ejercicio 3:");
console.log("¿El usuario está registrado?", estaRegistrado);
console.log("¿El usuario NO está registrado?", noEstaRegistrado);
console.log("-------------------");

// OPERADORES ARITMÉTICOS: Conversor de distancia Km a Millas
const kilometros = 10;
const VALOR_KM_A_MILLAS = 0.621371;

const convertirKmMillas = kilometros * VALOR_KM_A_MILLAS;

console.log("Ejercicio 4:");
console.log(`La conversión de ${kilometros} km a millas(${VALOR_KM_A_MILLAS} x 1km) es: ${convertirKmMillas.toFixed(2)}`);
console.log("-------------------");

// OPERADORES ARITMÉTICOS: Calculador de área y perímetro
const PI = Math.PI;
const radio = 5;

const area = PI * (radio**2);
const perimetro = 2*(PI * radio);

console.log("Ejercicio 5:")
console.log(`Radio = ${radio}\nEl área es: ${area.toFixed(2)}\nEl périmetro es: ${perimetro.toFixed(2)}`);
console.log("-------------------");

// USO DE LET Y OPERADORES LÓGICOS: Gestión de Stock
let stockDisponible = 10;
const porComprar = 3;

stockDisponible = stockDisponible - porComprar;

const haySuficienteStock = stockDisponible >= 5;

console.log(`Ejercicio 6:\nStock Inicial: 10\nCompra Realizada: ${porComprar}\nStock Restante: ${stockDisponible}\n¿Hay suficiente stock? ${haySuficienteStock}.`);
console.log("-------------------");

// NULL, UNDEFINED, OBJETOS Y COERCIÓN IMPLÍCITA: Perfil de usuario
const usuario = {
    nombre: "Jhair",
    email: "jhair@gmail.com",
    esAdmin: true,
};

console.log("Ejercicio 7");
console.log(`Datos de usuario\nNombre: ${usuario.nombre}\nCorreo Electrónico: ${usuario.email}\n¿Es Administrador?: ${usuario.esAdmin}`);
console.log("-------------------");

// NULL Y UNDEFINED: Verificación de datos
const fechaEntrega = null;
let precioFinal;

// Evaluación de cortocircuito con operadores lógicos
const mensajeFecha = fechaEntrega || "Fecha no especificada";

const mensajePrecio = precioFinal || "Precio no disponible o $0.00"

console.log("Ejercicio 8");
console.log(`Mensaje: ${mensajeFecha}`);
console.log(`Mensaje: ${mensajePrecio}`);
console.log("-------------------");

// MALAS PRÁCTICAS CON var
let verdadero = true;
if (true) {
    var mensajeVar = "Este es un mensaje de un var.";
    let mensajeLet = "Este es un mensaje de un let.";
}

console.log("Ejercicio 9");
console.log(`Mensaje: ${mensajeVar}`);
console.log("-------------------");

// TIPOS COMPLEJOS EN LITERALES: Reporte Detallado
const factura = {
    cliente: 'Jhair Bejar',
    items: [
        {
            nombre: 'Servidor',
            precio: 50,
        },
        {
            nombre: 'Dominio',
            precio: 10.5,
        }
    ],
}

const itemServidor = factura.items[0];
const itemDominio = factura.items[1];

const costoTotal = itemServidor.precio + itemDominio.precio;

console.log("Ejercicio 9");
console.log(`Items:
    ${itemServidor.nombre} : ${itemServidor.precio}
    ${itemDominio.nombre} : ${itemDominio.precio}\n
    Total a pagar: ${costoTotal}`);
console.log("-------------------");

// COERCIÓN DE TIPOS/DIFERENCIA DE == Y ===
const num = 10;
const str = "10";

const comparacionUno = num == str;
const comparacionDos = num === str;

console.log("Ejercicio 9");
console.log(`Comparación Uno: ${comparacionUno}\nComparacion Dos: ${comparacionDos}`);
console.log("-------------------");