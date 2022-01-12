import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  username: "azruflickhewej",
  password: "a47551ad724e777ad4b88743d9eb6953d6fbf8a313bdbb3995515d68cff448d1",
  database: "df41hbu1lr9jo1",
  port: 5432,
  host: "ec2-35-169-49-157.compute-1.amazonaws.com",
  ssl: true,
  // * esto es necesario para que corra correctamente
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
