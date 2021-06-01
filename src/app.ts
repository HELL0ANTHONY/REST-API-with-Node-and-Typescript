import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import projects from "./routes/projects";
import tasks from "./routes/tasks";

const app = express();

// middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(json());

// routers
app.use("/api/project", projects);
app.use("/api/task", tasks);

export default app;