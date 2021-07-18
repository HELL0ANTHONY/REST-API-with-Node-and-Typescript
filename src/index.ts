import app from "./app";
import { sequelize } from "./database";
const PORT: number = 5000;

sequelize.sync({ force: true })
  .then((): void => {
    app.listen(PORT, (): void => {
      console.log("server running at PORT:", PORT);
    });
  });