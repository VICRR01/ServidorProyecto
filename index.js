const express = require("express");

const app = express();
const PORT = 3000;

//arreglo de productos
const produts = [
  {
    id: 1,
    name: "Sack boy la gran aventura",
    price: 50,
    image: "images/product-1.jpg",
    stock: 50,
  },

  {
    id: 2,
    name: "Spiderman Remastered",
    price: 500,
    image: "images/product-2.jpg",
    stock: 50,
  },

  {
    id: 3,
    name: "Death Strandind Director´s cut",
    price: 300,
    image: "images/product-3.jpg",
    stock: 50,
  },

  {
    id: 4,
    name: "A Plague Tail Requiem",
    price: 400,
    image: "images/product-4.jpg",
    stock: 50,
  },

  {
    id: 5,
    name: "The King Of Fighters",
    price: 75,
    image: "images/product-5.jpg",
    stock: 50,
  },

  {
    id: 6,
    name: "Turtles the Cowabunga Collection",
    price: 700,
    image: "images/product-6.jpg",
    stock: 50,
  },
];

app.get("/api/products", (req, res) => {
  res.send(produts);
});

app.use("/", express.static("frontend"));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
