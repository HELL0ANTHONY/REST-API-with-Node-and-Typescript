import Routes from "express";
import {
  createProject,
  getProjects,
  getOneProject,
  deleteProject,
  updateProject
} from "../controllers/projects.controller";

const router = Routes();

router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getOneProject);
router.delete("/:id", deleteProject);
router.put("/:id", updateProject);

export default router;