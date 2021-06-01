import { NextFunction, Response, Request } from "express";
import { Op } from "sequelize";
import Task from "../models/Task";

interface TaskData {
  name: string;
  projectId: number;
  done?: boolean;
}

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const taskData: TaskData = req.body;
    const newTask = await Task.create(taskData);

    console.info('🔥', ["FileName: task.controller.ts"], ["LineNumber: 19"], "VariableName");

    if (!newTask) throw new Error("Something goes wrong. Please check the data");
    return res.json({
      message: "Task was created successfully",
      data: newTask
    });
  } catch (error) {
    console.error(error);
  }
};


export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const tasks: object = await Task.findAll();
    return res.json({
      data: tasks
    });
  } catch (error) {
    console.error(error);
  }
};

interface Tasks {
  id?: number;
  name: string;
  projectId: number;
  done?: boolean;
}

export const getTaskByName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const taskName = req.query.name;
    const tasks: Tasks[] = await Task.findAll({
      where: {
        name: {
          [Op.iLike]: `%${taskName}%`
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
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const id: string = req.params.id;
    const rowsAffected = await Task.destroy({
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
  } catch (error) {
    console.error(error);
  }
};