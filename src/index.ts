import { database } from "./database/";
import app from "./app";

const PORT: number = 3000;

database.sync({ force: true }).then(_ => {
  app.listen(PORT, () => {
    console.log("server on PORT:", PORT);
  });
});