import { Router } from "express";

import books from "./app/controllers/v1/BooksController";

const routes = new Router();

// Books
routes.get("/v1/books/:isbn", books.show);
routes.post("/v1/books", books.create);
routes.put("/v1/books/:isbn", books.update);
routes.delete("/v1/books/:isbn", books.destroy);

export default routes;
