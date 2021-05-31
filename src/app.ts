import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import projects from "./routes/projects";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(json());

app.use("/api/project", projects);

export default app;