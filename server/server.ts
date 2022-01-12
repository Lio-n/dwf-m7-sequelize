import { sequelize } from "./db";
import { Product } from "./db/product";
import * as express from "express";

const app = express();
app.use(express.json());
const port = 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully."), sequelize.sync({ alter: true });
  })
  .catch((err) => console.log(`Error: ${err}`));

// $ Create
app.post("/products", (req, res) => {
  const { title, price, description } = req.body;

  Product.create({
    title,
    price,
    description,
  }).then((item) => res.status(201).json({ item }));
});

// $ Get All Products
app.get("/products", (req, res) => {
  Product.findAll().then((productsColl) => {
    res.status(200).json({ productsColl });
  });
});

// $ Get One Product
app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;

  Product.findByPk(productId).then((item) => {
    if (item !== null) {
      res.status(200).json({ item });
    } else {
      res.status(404).json("Product Not Found");
    }
  });
});

// $ Update One Product
app.patch("/products/:productId", (req, res) => {
  const { productId } = req.params;
  const body = req.body;

  Product.findByPk(productId).then((productRes) => {
    if (productRes !== null) {
      productRes.update(body);
      res.status(200).json(productRes);
    } else {
      res.status(404).json("Product Not Found");
    }
  });
});

// $ Delete One Product
app.delete("/products/:productId", (req, res) => {
  const { productId } = req.params;

  Product.findByPk(productId).then((productRes) => {
    if (productRes !== null) {
      productRes.destroy();
      res.status(200).json("Product Removed");
    } else {
      res.status(404).json("Product Not Found");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
