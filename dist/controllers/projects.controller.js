"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProject = exports.deleteProject = exports.getOneProject = exports.getProjects = exports.createProject = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const createProject = async (req, res, next) => {
    try {
        const newProject = await Project_1.default.create(req.body);
        return res.json({
            message: "Project was created successfully",
            newProject
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
};
exports.createProject = createProject;
const getProjects = async (req, res, next) => {
    try {
        const projects = await Project_1.default.findAll();
        return res.json({
            data: projects
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
};
exports.getProjects = getProjects;
const getOneProject = async (req, res, next) => {
    try {
        const id = req.params.id;
        const project = await Project_1.default.findOne({
            where: {
                id
            }
        });
        if (project) {
            return res.json({
                data: project
            });
        }
        return res.json({
            message: `The Project with id: ${id} does not exists`,
            data: project
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getOneProject = getOneProject;
const deleteProject = async (req, res, next) => {
    try {
        const id = req.params.id;
        const rowsAffected = await Project_1.default.destroy({
            where: {
                id
            }
        });
        if (rowsAffected)
            return res.json({
                message: `Project deleted successfully.Rows affected ${rowsAffected}`
            });
        return res.json({
            message: `The Project with id: ${id} does not exists`,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteProject = deleteProject;
const updateProject = async (req, res, next) => {
    try {
        const id = req.params.id;
        const dataToUpdate = req.body;
        const record = await Project_1.default.findOne({
            where: {
                id
            }
        });
        if (!record)
            throw new Error("No record found");
        const recordUpdated = await record.update(dataToUpdate);
        return res.json({
            message: "Data updated successfully",
            data: recordUpdated
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.updateProject = updateProject;
