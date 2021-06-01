"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.getTaskByName = exports.getTasks = exports.createTask = void 0;
const sequelize_1 = require("sequelize");
const Task_1 = __importDefault(require("../models/Task"));
const createTask = async (req, res, next) => {
    try {
        const taskData = req.body;
        const newTask = await Task_1.default.create(taskData);
        console.info('🔥', ["FileName: task.controller.ts"], ["LineNumber: 19"], "VariableName");
        if (!newTask)
            throw new Error("Something goes wrong. Please check the data");
        return res.json({
            message: "Task was created successfully",
            data: newTask
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.createTask = createTask;
const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task_1.default.findAll();
        return res.json({
            data: tasks
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.getTasks = getTasks;
const getTaskByName = async (req, res, next) => {
    try {
        const taskName = req.query.name;
        const tasks = await Task_1.default.findAll({
            where: {
                name: {
                    [sequelize_1.Op.iLike]: `%${taskName}%`
                }
            }
        });
        if (!tasks.length) {
            return res.json({
                message: `There no tasks with the tag: ${taskName}`,
                data: []
            });
        }
        return res.json({
            data: tasks
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.getTaskByName = getTaskByName;
const deleteTask = async (req, res, next) => {
    try {
        const id = req.params.id;
        const rowsAffected = await Task_1.default.destroy({
            where: {
                id
            }
        });
        if (!rowsAffected) {
            return res.status(404).json({
                message: `There is no data with the id: ${id}`
            });
        }
        return res.json({
            message: `Delete successfully. Rows affected ${rowsAffected}`
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteTask = deleteTask;
