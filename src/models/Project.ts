import { Sequelize, DataType } from 'sequelize';
import { database } from './../database/index';

interface ProjectAttributes {

}

const Project = database.define("Project", {

});

/* priority, name, description, delivery_date (Project) */
/* id, name, project_id, done (Task) */