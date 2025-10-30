/*
ARRAYS Y OBJETOS
- Métodos principales de Arrays
- Objetos y propiedades
- Recorrer arrays de objetos
*/

const imprimirCabecera = (exercise) => {
    console.log(`Día 4 - Ejercicio ${exercise}`);
}

const imprimirPie = () => {
    console.log("-------------------")
}

// Ejercicio 1: Creación de Listas
const productos = [
    { nombre: "Laptop MSI i5 12th RTX 3060", precio: 1200 },
    { nombre: "Combo Teclado + Mouse + Audífono", precio: 150 },
    { nombre: "Monitor Teros 2410G", precio: 500 },
]

// Ejercicio 2: Añadir Producto
const validarString = (valor) => {
    if (typeof valor === 'string' ) {
        return valor
    } else {
        return null
    }
}

const newProducto = (newNombre, newPrecio) => {

    const nombreProducto = validarString(newNombre);

    if(!nombreProducto) {
        console.log("El nombre no es un texto válido");
        return "Error: el nombre debe ser un string"
    }

    console.log(`Producto Nuevo: ${newNombre} | Precio: ${newPrecio}`);
    productos.push({nombre: newNombre, precio: newPrecio});
    return "Producto agregado"
}

imprimirCabecera(2);

console.log(newProducto("Cable HDMI 4K", 25));


productos.forEach(producto => {
    console.log("-----")
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: S/ ${producto.precio.toFixed(2)}`);
})

imprimirPie();


// Ejercicio 3: Imprimir nombres
imprimirCabecera(3);
for (const producto of productos) {
    console.log(`Producto: ${producto.nombre}`);
}
imprimirPie();

// Ejercicio 4: Aplicar Descuento (.map)
const productosConDescuento = productos.map(item => {
    return {
        nombre: item.nombre,
        precio: item.precio * 0.9,
    }
});

imprimirCabecera(4);
productosConDescuento.forEach(producto => {
    console.log("-------------")
    console.log(`Producto nombre: ${producto.nombre}`)
    console.log(`Producto precio + 10% Dscto: ${producto.precio}`)
})
imprimirPie();


// Ejercicio 5: Filtrar productos caros
const productosCaros = productos.filter(item => item.precio > 500);

imprimirCabecera(5);
console.log("PRODUCTOS CAROS:")
productosCaros.forEach(producto => {
    console.log("-------------")
    console.log(`Producto nombre: ${producto.nombre}`)
    console.log(`Producto precio: ${producto.precio}`)
})
imprimirPie();


// Ejercicio 6: Actualizar Stock
const updateData = (indice, newPrecioUpdate) => {
    const actualizarValores = productos;
    actualizarValores[indice].precio = newPrecioUpdate;
    return `Producto actualizado: ${actualizarValores[indice].nombre}\nPrecio: S/ ${actualizarValores[indice].precio}`
}

imprimirCabecera(6);
console.log(updateData(0, 1300));
imprimirPie();


// Ejercicio 7: Calcular Total
const precioTotal = productos.reduce((acc, producto) => acc + producto.precio, 0);

imprimirCabecera(7);
productos.forEach(producto => {
    console.log("-------------")
    console.log(`Producto nombre: ${producto.nombre}`)
    console.log(`Producto precio: ${producto.precio.toFixed(2)}`)
})
console.log("------------------")
console.log("Precio Total: S/", precioTotal.toFixed(2));
imprimirPie();


// Ejercicio 8: Descuento y Filtro
const impuestoProductosCaros = productos.filter(producto => producto.precio > 100)
                                        .map(productoFiltrado => {
                                            return {
                                                nombre: productoFiltrado.nombre,
                                                precio: productoFiltrado.precio * 1.05
                                            }
                                        });

imprimirCabecera(8);
impuestoProductosCaros.forEach(producto => {
    console.log("-------------")
    console.log(`Producto nombre: ${producto.nombre}`)
    console.log(`Producto precio + impuesto: ${producto.precio.toFixed(2)}`)
})
imprimirPie();


// Ejercicio 9: Propiedades de un Objeto / Usar For in
const primerProducto = productos[0];

imprimirCabecera(9);
for (const propiedad in primerProducto) {
    console.log("----------")
    console.log(`Propiedad: ${propiedad}`);
    console.log(`Valor: ${primerProducto[propiedad]}`);
}
imprimirPie();


// Ejercicio 10: Desestructuración de Objetos
imprimirCabecera(10);
for (const { nombre, precio } of productos) {
    console.log("----------")
    console.log(`Nombre: ${nombre}`);
    console.log(`Precio: ${precio}`);
}
imprimirPie();


// Ejercicio 11: Buscar Producto
const verificarExistenciaPalabra = (palabra) => {
    const copiaProductos = [...productos];

    if(typeof palabra !== 'string') {
        return "Error: Debe ingresar un String para realizar la búsqueda."
    }

    const buscar = copiaProductos.find(producto => producto.nombre.includes(palabra));

    if(!buscar)  {
        return `No se encontró ningún resultado que contenga ${palabra}`
    }

    return `Producto encontrado: ${buscar.nombre}`;
}

imprimirCabecera(11);
console.log(verificarExistenciaPalabra("Monitor"));
imprimirPie();