import { Model, DataTypes as type } from "sequelize";
import sequelize from "../database";

interface ProjectAttributes {
  id: number;
  name: string;
  priority: number;
  deliveryDate: string;
  description: string | null;
}
class Project extends Model<ProjectAttributes>
  implements ProjectAttributes {
  public id!: number;
  public name!: string;
  public priority!: number;
  public deliveryDate!: string;
  public description!: string | null;

  public static associations: {
    // projects: Association<User, Project>;
  };
};

Project.init(
  {
    id: {
      type: type.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
    priority: {
      type: type.STRING,
      allowNull: false,
    },
    description: {
      type: type.STRING,
      allowNull: true
    },
    deliveryDate: {
      type: type.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "projects",
  }
);