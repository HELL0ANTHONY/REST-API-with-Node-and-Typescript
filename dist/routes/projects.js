"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projects_controller_1 = require("../controllers/projects.controller");
const router = express_1.default();
router.post("/", projects_controller_1.createProject);
router.get("/", projects_controller_1.getProjects);
router.get("/:id", projects_controller_1.getOneProject);
router.delete("/:id", projects_controller_1.deleteProject);
router.put("/:id", projects_controller_1.updateProject);
exports.default = router;
