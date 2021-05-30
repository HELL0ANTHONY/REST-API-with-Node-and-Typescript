import { Model, DataTypes as type } from "sequelize";
import sequelize from "../database";

interface TaskAttributes {
  id: number;
  name: string;
  projectId: number;
  done: boolean;
}

class Task extends Model<TaskAttributes>
  implements TaskAttributes {
  public id!: number;
  public name!: string;
  public projectId!: number;
  public done!: boolean;
}

Task.init(
  {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: type.STRING,
      allowNull: false
    },
    projectId: {
      type: type.INTEGER,
      allowNull: false
    },
    done: {
      type: type.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "tasks"
  }
);