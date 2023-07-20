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


// EJERCICIO A: PIZZAS QUE TENGAN ID IMPAR //

const idImpares = pizzas.filter((pizza) => {
  return pizza.id %2 === 1;
});

idImpares.forEach((pizza) => {
  console.log (`La ${pizza.nombre} tiene id ${pizza.id}, es impar`)
});



// EJERCICIO B: ¿Hay alguna pizza que valga menos de $600? //


const pizzaEconomica = pizzas.some ((pizzas) => {
  return pizzas.precio <= 600;
  
})

if (pizzaEconomica === true) {
console.log (`Sí, hay una pizza que vale menos de $600`);}

if (pizzaEconomica === false) {
console.log (`No, no hay pizzas que valgan menos de $600`)
};




// EJERCICIO C: nombre de cada pizza con su respectivo precio //


const pizzaYPrecio = pizzas.forEach ((pizza) => {
  console.log(`La ${pizza.nombre}, vale $${pizza.precio}`)
});




// EJERCICIO D: ingredientes de cada pizza //

const nombrePizzas = pizzas.forEach ((pizza) => {
  console.log(`La ${pizza.nombre} esta hecha con:`);
  pizza.ingredientes.forEach ((ingredientes) => {
    console.log(`° ${ingredientes}`);
  })
});
