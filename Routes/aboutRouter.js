import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import About from '../models/aboutModel.js';


const aboutRouter = express.Router();

aboutRouter.get(
    '/hijazi',
    expressAsyncHandler(async (req, res) => {
      await About.remove({});
      const about = data.about.map((about) => ({
        ...about,
      }));
      const createdAbout = await About.insertMany(about);
      res.send({ createdAbout });
    })
  );

  
  aboutRouter.get(
    '/blogs',
    expressAsyncHandler(async (req, res) => {
      const about = await About.find();
      console.log("about",about);
      res.send(about)
    })
  );  


export default aboutRouter;