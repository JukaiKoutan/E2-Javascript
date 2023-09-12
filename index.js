const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// DESARROLLO
// 1. Pizzas con un id impar.

const filtrarIdImpar = pizzas.filter(numero => {
  return numero.id % 2 != 0 
})
 
const nombreDePizzas = filtrarIdImpar.forEach((impar) =>
console.log(`Las pizzas que tienen un id impar son la ${impar.nombre}`)
)

// 2. Una pizza que valga menos de $600

const pizzaMozza = pizzas.find(barato => {
return barato.precio < 600
})
console.log(`La pizza mas economica es la` , pizzaMozza.nombre); 

// 3. Cada pizza con su precio
const pizzasYPrecio = pizzas.forEach((pizza) =>
console.log(`La ${pizza.nombre} cuesta ${pizza.precio}`)
)

//4. Todos los ingredientes de cada pizza

const todosIngredientes = pizzas.forEach((ingrediente) =>
console.log( `${ingrediente.nombre}
Ingredientes: ${ingrediente.ingredientes}`)
)


