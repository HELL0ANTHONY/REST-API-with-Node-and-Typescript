import { Request, Response, NextFunction } from "express";
import Project from "../models/Project";

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const newProject: object = await Project.create(req.body);
    return res.json({
      message: "Project was created successfully",
      newProject
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {}
    });
  }
};

export const getProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const projects: object = await Project.findAll();
    return res.json({
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {}
    });
  }
};

export const getOneProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const id: string = req.params.id;
    const project: object | null = await Project.findOne({
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
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const id: string = req.params.id;
    const rowsAffected: number = await Project.destroy({
      where: {
        id
      }
    });
    if (rowsAffected) return res.json({
      message: `Project deleted successfully.Rows affected ${rowsAffected}`
    });
    return res.json({
      message: `The Project with id: ${id} does not exists`,
    });
  } catch (error) {
    console.log(error);
  }
};

interface DataToUpdate {
  name: string;
  priority: number;
  description: string;
  deliveryDate: string;
}

export const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const id: string                 = req.params.id;
    const dataToUpdate: DataToUpdate = req.body;
    const record: any                = await Project.findOne({
      where: {
        id
      }
    });
    if (!record) throw new Error("No record found");
    const recordUpdated: object = await record.update(dataToUpdate);
    return res.json({
      message: "Data updated successfully",
      data   : recordUpdated
    });
  } catch (error) {
    console.error(error)
  }
};