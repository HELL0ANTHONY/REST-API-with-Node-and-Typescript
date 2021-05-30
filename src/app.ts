import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";

// import here the routes
const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(json());

export default app;