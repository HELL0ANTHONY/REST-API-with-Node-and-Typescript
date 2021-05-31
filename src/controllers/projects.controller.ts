import { Request, Response, NextFunction } from "express";
import Project from "../models/Project";

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const result = await Project.create(req.body);
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export default createProject;