import Routes from "express";
import createProject from "../controllers/projects.controller";

const router = Routes();

router.post("/", createProject);

export default router;