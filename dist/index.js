"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database/");
const app_1 = __importDefault(require("./app"));
const PORT = 3000;
database_1.database.sync({ force: true }).then(_ => {
    app_1.default.listen(PORT, () => {
        console.log("server on PORT:", PORT);
    });
});
