import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Hero from '../models/heroModel.js';


const heroRouter = express.Router();

heroRouter.get(
    '/hijazi',
    expressAsyncHandler(async (req, res) => {
      await Hero.remove({});
      const hero = data.hero.map((hero) => ({
        ...hero,
      }));
      const createdHero = await Hero.insertMany(hero);
      res.send({ createdHero });
    })
  );

  
  heroRouter.get(
    '/hero',
    expressAsyncHandler(async (req, res) => {
      const hero = await Hero.find();
      console.log("hero",hero);
      res.send(hero)
    })
  );  


export default heroRouter;