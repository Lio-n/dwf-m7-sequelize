# Challenges

## Let's define a model with Sequalize

- For this challenge, we propose you to use Sequalize to define the Products model with the following fields:

```
Product {
    price: number,
    title: string,
}
// all fields you can think of
```

- Then, you have to create a small rest API with Typescript and Express that allows you to do all the CRUD operations (create, read, update and delete products).

- When you finish, share [Postman's collection](https://documenter.getpostman.com/view/17951846/UVXhpvxv) in the Discord channel of this chapter.

## Tips

To create each of the endpoints, we recommend that you read the following links:

- [POST](https://sequelize.org/master/manual/model-instances.html) /products (crear)

- GET /products (obtener todos)

- [GET](https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries/) /:productId (obtener uno)

- [PATCH](https://sequelize.org/master/manual/model-querying-basics.html#simple-update-queries) /products/:productId (modificar uno)

- [DELETE](https://sequelize.org/master/manual/model-querying-basics.html#simple-delete-queries) /products/:productId (eliminar uno)
