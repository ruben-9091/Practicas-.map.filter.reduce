// Ejercicios de .map, .filter y .reduce
// Cómo usarlo: completa cada función y ejecuta `node ejercicios.js`.
// Verás ✅ o ❌ por cada ejercicio.

// ---------- Datos de ejemplo ----------
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const productos = [
  { nombre: "Camiseta", precio: 15, categoria: "ropa", stock: true, cantidad: 2 },
  { nombre: "Pantalón", precio: 40, categoria: "ropa", stock: false, cantidad: 1 },
  { nombre: "Zapatillas", precio: 60, categoria: "calzado", stock: true, cantidad: 1 },
  { nombre: "Calcetines", precio: 5, categoria: "ropa", stock: true, cantidad: 6 },
  { nombre: "Mochila", precio: 25, categoria: "accesorios", stock: true, cantidad: 3 },
  { nombre: "Gorra", precio: 12, categoria: "accesorios", stock: false, cantidad: 2 },
];

const alumnos = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 6 },
  { nombre: "Pedro", nota: 3 },
  { nombre: "Sara", nota: 10 },
];

// ---------- MAP ----------

// 1. Devuelve un array con cada número multiplicado por 2.
function doblar(arr) {
  const doble = arr.map((n) => n * 2);
  return doble;
  // TU CÓDIGO AQUÍ
}

// 2. Devuelve un array solo con los nombres de los productos.
function nombresDeProductos(lista) {
  const nameProducts = lista.map((n) => n.nombre); 
  return nameProducts;
  // TU CÓDIGO AQUÍ
}

// 3. Devuelve un array de objetos { nombre, precioFinal } donde
//    precioFinal = precio * 1.21 (IVA del 21%), redondeado a 2 decimales.
function conIVA(lista) {
  const final = lista.map((producto) => ({
    nombre: producto.nombre, 
    precioFinal: +(producto.precio * 1.21).toFixed(2)
  })); 
  return final; 
  // TU CÓDIGO AQUÍ
}

// ---------- FILTER ----------

// 4. Devuelve solo los números pares.
function pares(arr) {

  return arr.filter((n) => n % 2 === 0); 
  // TU CÓDIGO AQUÍ
}

// 5. Devuelve solo los productos que tienen stock.
function enStock(lista) {
  return lista.filter ((n) => n.stock === true)
  // TU CÓDIGO AQUÍ
}

// 6. Devuelve los productos con stock Y precio menor a 20.
function baratosEnStock(lista) {
  return lista.filter((n) => n.stock === true && n.precio < 20)
  // TU CÓDIGO AQUÍ
}

// ---------- REDUCE ----------

// 7. Devuelve la suma de todos los números.
function sumar(arr) {

  return arr.reduce((acc, n) => acc + n, 0)
  // TU CÓDIGO AQUÍ
}

// 8. Devuelve el total del carrito: suma de precio * cantidad de cada producto.
function totalCarrito(lista) {

  return lista.reduce((acc, n) => acc + (n.precio*n.cantidad), 0)
  // TU CÓDIGO AQUÍ
}

// 9. Devuelve un objeto que cuente cuántos productos hay por categoría.
//    Ejemplo: { ropa: 3, calzado: 1, accesorios: 2 }
function contarPorCategoria(lista) {
  return lista.reduce((acc, n) => { 
    const cat = n.categoria; 

    acc[cat] = (acc[cat] || 0) + 1; 
    return acc; 
  },{})
  // TU CÓDIGO AQUÍ
}

// ---------- COMBINANDO LOS TRES ----------

// 10. Suma de los precios de los productos de la categoría "ropa" que tengan stock.
function sumaRopaEnStock(lista) {
  return lista
  .filter((n) => n.stock === true && n.categoria === "ropa")
  .map((n) => n.precio)
  .reduce((acc, n) => acc + n, 0)
  // TU CÓDIGO AQUÍ
}

// 11. Nota media de los alumnos aprobados (nota >= 5).
function mediaAprobados(lista) {
  const aprobados = lista.filter((n) => n.nota >= 5); 

  const notas = aprobados.map((n) => n.nota)
  
  const sumaNota = notas.reduce((acc, n) => acc + n, 0); 

  const media = sumaNota / aprobados.length;

  return media; 
  // TU CÓDIGO AQUÍ
}

// 12. Devuelve los nombres en MAYÚSCULAS de los productos con stock,
//     solo de los que cuestan más de 10.
function nombresCarosEnStock(lista) {

  const stock = lista.filter((n) => n.stock === true && n.precio > 10); 
  const nombres = stock.map((n) => (n.nombre).toUpperCase()); 
  return nombres; 

  // TU CÓDIGO AQUÍ
}

// ---------- Comprobaciones (no hace falta tocar esto) ----------
function check(numero, resultado, esperado) {
  const ok = JSON.stringify(resultado) === JSON.stringify(esperado);
  console.log(`${ok ? "✅" : "❌"} Ejercicio ${numero}`);
  if (!ok) {
    console.log("   Esperado:", JSON.stringify(esperado));
    console.log("   Recibido:", JSON.stringify(resultado));
  }
}

check(1, doblar(numeros), [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
check(2, nombresDeProductos(productos), [
  "Camiseta", "Pantalón", "Zapatillas", "Calcetines", "Mochila", "Gorra",
]);
check(3, conIVA(productos.slice(0, 2)), [
  { nombre: "Camiseta", precioFinal: 18.15 },
  { nombre: "Pantalón", precioFinal: 48.4 },
]);
check(4, pares(numeros), [2, 4, 6, 8, 10]);
check(5, enStock(productos).map((p) => p.nombre), [
  "Camiseta", "Zapatillas", "Calcetines", "Mochila",
]);
check(6, baratosEnStock(productos).map((p) => p.nombre), ["Camiseta", "Calcetines"]);
check(7, sumar(numeros), 55);
check(8, totalCarrito(productos), 30 + 40 + 60 + 30 + 75 + 24);
check(9, contarPorCategoria(productos), { ropa: 3, calzado: 1, accesorios: 2 });
check(10, sumaRopaEnStock(productos), 20);
check(11, mediaAprobados(alumnos), 8);
check(12, nombresCarosEnStock(productos), ["CAMISETA", "ZAPATILLAS", "MOCHILA"]);
