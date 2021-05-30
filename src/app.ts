import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";

// here import the routes;
const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(json());

// app.use(routes);

export default app;