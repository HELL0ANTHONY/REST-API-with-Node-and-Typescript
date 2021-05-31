"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const Task = database_1.sequelize.define("task", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    projectId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    done: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false
});
exports.default = Task;
