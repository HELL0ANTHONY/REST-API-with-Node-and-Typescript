import express from "express";
const app = express();

const PORT: number = 3000;
app.listen(PORT, () => {
  console.log("server on PORT:", PORT);
});