const express = require("express");

const app = express();
const PORT = 3000;

//arreglo de productos
const produts = [
  {
    id: 1,
    name: "Pesas de 25kg",
    price: 50,
    image: "images/product-1.jpg",
    stock: 50,
  },

  {
    id: 2,
    name: "name",
    price: 500,
    image: "images/product-2.jpg",
    stock: 50,
  },

  {
    id: 3,
    name: "name",
    price: 300,
    image: "images/product-3.jpg",
    stock: 50,
  },

  {
    id: 4,
    name: "name",
    price: 400,
    image: "images/product-4.jpg",
    stock: 50,
  },

  {
    id: 5,
    name: "name",
    price: 75,
    image: "images/product-5.jpg",
    stock: 50,
  },

  {
    id: 6,
    name: "name",
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
