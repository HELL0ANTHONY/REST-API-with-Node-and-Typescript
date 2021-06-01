import app from "./app";
import { sequelize } from "./database";

const PORT: number = 3000;

sequelize.sync({ force: false })
  .then((): void => {
    app.listen(PORT, (): void => {
      console.log("server running at PORT:", PORT);
    });
  });