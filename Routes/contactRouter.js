import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Contact from '../models/contactModel.js';

const contactRouter = express.Router();

contactRouter.get(
    '/hijazi',
    expressAsyncHandler(async (req, res) => {
      await Contact.remove({});
      const contacts = data.contacts.map((contact) => ({
        ...contact,
      }));
      const createdcontacts = await Contact.insertMany(contacts);
      res.send({ createdcontacts });
    })
  );

  
  contactRouter.get(
    '/projects',
    expressAsyncHandler(async (req, res) => {
      const contacts = await Contact.find();
      console.log("contacts",contaccts);
      res.send(contacts)
    })
  );  


export default contactRouter;