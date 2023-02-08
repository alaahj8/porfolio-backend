import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken, isAdmin, isAuth } from '../user.js';

const userRouter = express.Router();

userRouter.get(
  '/user',
  expressAsyncHandler(async (req, res) => {
    const user = await User.find({ isAdmin: true })
      
    res.send(user);
  })
);

userRouter.get(
  '/hijazi',
  expressAsyncHandler(async (req, res) => {
     await User.remove({});
    const createdUsers = await User.insertMany(data.user);
    res.send({ createdUsers });
  })
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ name: req.body.name });
    if (user) {
      if (bcrypt.compareSync(req.body.passwordHash, user.passwordHash)) {
        res.send({
          _id: user._id,
          name: user.name,
          passwordHash: user.password,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid name or password' });
  })
);



export default userRouter;