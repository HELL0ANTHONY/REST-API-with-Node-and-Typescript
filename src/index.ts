import app from "./app";
import sequelize from "./database";

const PORT: number = 3001;

sequelize.sync({ force: true }).then((): void => {
  app.listen((): void => {
    console.log("server running at PORT:", PORT);
  });
});