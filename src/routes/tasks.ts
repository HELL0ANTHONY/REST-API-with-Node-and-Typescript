import { Router } from "express";
import {
  createTask,
  getTasks,
  getTaskByName,
  deleteTask
} from "../controllers/task.controller";

const router = Router();

router.post('/', createTask);
router.get('/', getTasks);
router.delete('/:id', deleteTask);
router.get('/search', getTaskByName);

export default router;