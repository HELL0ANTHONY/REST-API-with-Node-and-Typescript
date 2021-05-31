"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProject = exports.deleteProject = exports.getOneProject = exports.getProjects = exports.createProject = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const createProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProject = yield Project_1.default.create(req.body);
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
});
exports.createProject = createProject;
const getProjects = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project_1.default.findAll();
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
});
exports.getProjects = getProjects;
const getOneProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const project = yield Project_1.default.findOne({
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
});
exports.getOneProject = getOneProject;
const deleteProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const rowsAffected = yield Project_1.default.destroy({
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
});
exports.deleteProject = deleteProject;
const updateProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const dataToUpdate = req.body;
        const record = yield Project_1.default.findOne({
            where: {
                id
            }
        });
        if (!record)
            throw new Error("No record found");
        const recordUpdated = yield record.update(dataToUpdate);
        return res.json({
            message: "Data updated successfully",
            data: recordUpdated
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.updateProject = updateProject;
