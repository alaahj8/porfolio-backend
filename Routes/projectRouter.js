import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Project from '../models/projectModel.js';

const projectRouter = express.Router();

projectRouter.get(
    '/hijazi',
    expressAsyncHandler(async (req, res) => {
      await Project.remove({});
      const projects = data.projects.map((project) => ({
        ...project,
      }));
      const createdProjects = await Project.insertMany(projects);
      res.send({ createdProjects });
    })
  );

  
  projectRouter.get(
    '/projects',
    expressAsyncHandler(async (req, res) => {
      const projects = await Project.find();
      console.log("projects",projects);
      res.send(projects)
    })
  );  


export default projectRouter;