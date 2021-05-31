import { Model, DataTypes as Type } from "sequelize";
import { sequelize } from "../database";
import Task from "./Task";

interface ProjectAttributes {
  id: number;
  name: string;
  priority: number;
  deliveryDate: Date;
  description: string | null;
}

interface ProjectInstance
  extends Model<ProjectAttributes>,
  ProjectAttributes { }

const Project = sequelize.define<ProjectInstance>("project", {
  id: {
    type: Type.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Type.STRING,
    allowNull: false,
  },
  priority: {
    type: Type.STRING,
    allowNull: false,
  },
  description: {
    type: Type.STRING,
    allowNull: true
  },
  deliveryDate: {
    type: Type.DATE,
    allowNull: false
  }
}, {
  timestamps: false
});

Project.hasMany(Task);
Task.belongsTo(Project);

export default Project;