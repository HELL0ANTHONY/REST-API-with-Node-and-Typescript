import { Model, DataTypes as Type } from "sequelize";
import { sequelize } from "../database";

interface TaskAttributes {
  id?: number;
  name: string;
  projectId: number;
  done?: boolean;
}

interface TaskInstance
  extends Model<TaskAttributes>,
  TaskAttributes { }

const Task = sequelize.define<TaskInstance>("task", {
  id: {
    type: Type.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Type.STRING,
    allowNull: false
  },
  projectId: {
    type: Type.INTEGER,
    allowNull: false
  },
  done: {
    type: Type.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  timestamps: false
});

export default Task;