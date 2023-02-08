import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Skills from '../models/skillsModel.js';

const skillsRouter = express.Router();

skillsRouter.get(
    '/hijazi',
    expressAsyncHandler(async (req, res) => {
      await Skills.remove({});
      const skills = data.skills.map((skills) => ({
        ...skills,
      }));
      const createdSkills = await Skills.insertMany(skills);
      res.send({ createdSkills });
    })
  );

  
  skillsRouter.get(
    '/skills',
    expressAsyncHandler(async (req, res) => {
      const skills = await Skills.find();
      console.log("skills",skills);
      res.send(skills)
    })
  );  


export default skillsRouter;