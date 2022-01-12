import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index";

export class Product extends Model {}

Product.init(
  {
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "product",
  }
);
