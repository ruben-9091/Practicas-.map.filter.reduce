# map, filter y reduce

Ejercicios de práctica con los tres métodos de arrays más usados en JavaScript.

## Cómo usarlo

1. Abre `ejercicios.js` y completa cada función.
2. Ejecuta `node ejercicios.js`.
3. Cada ejercicio muestra ✅ si está bien o ❌ con lo esperado y lo recibido.

---

## `.map()` → transforma

Recorre el array y devuelve **otro array de la misma longitud**, con cada elemento transformado.

```js
const numeros = [1, 2, 3];
const dobles = numeros.map((n) => n * 2);
// [2, 4, 6]
```

- Entra un array de N elementos, sale un array de N elementos.
- No modifica el original.
- La función debe **devolver** el nuevo valor.

## `.filter()` → selecciona

Recorre el array y devuelve **un array nuevo solo con los elementos que cumplen una condición**.

```js
const numeros = [1, 2, 3, 4];
const pares = numeros.filter((n) => n % 2 === 0);
// [2, 4]
```

- La función debe devolver `true` (se queda) o `false` (se descarta).
- El resultado puede tener menos elementos, o ninguno.
- No modifica el original.

## `.reduce()` → combina todo en un único valor

Recorre el array acumulando un resultado. Ese resultado puede ser un número, un objeto, un array, lo que quieras.

```js
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
// 10
```

- Recibe dos cosas: la función `(acumulador, elementoActual) => ...` y el **valor inicial** (el `0` del ejemplo).
- Lo que devuelve la función en cada vuelta pasa a ser el `acumulador` de la siguiente.
- Pon siempre el valor inicial: con `0` para sumas, `{}` para objetos, `[]` para arrays.

---

## Truco para recordarlos

| Método | Pregunta que responde | Devuelve |
|--------|----------------------|----------|
| `map` | ¿Cómo transformo cada elemento? | Array del mismo tamaño |
| `filter` | ¿Qué elementos me quedo? | Array igual o más corto |
| `reduce` | ¿Cómo lo resumo en un solo valor? | Un valor (cualquier tipo) |

## Encadenarlos

Como `map` y `filter` devuelven arrays, se pueden encadenar:

```js
const total = productos
  .filter((p) => p.stock)          // me quedo con los que hay en stock
  .map((p) => p.precio)            // me quedo solo con el precio
  .reduce((acc, precio) => acc + precio, 0); // los sumo
```
