import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Blog from '../models/blogModel.js';


const blogRouter = express.Router();

blogRouter.get(
    '/hijazi',
    expressAsyncHandler(async (req, res) => {
      await Blog.remove({});
      const blogs = data.blogs.map((blog) => ({
        ...blog,
      }));
      const createdBlogs = await Blog.insertMany(blogs);
      res.send({ createdBlogs });
    })
  );

  
  blogRouter.get(
    '/blogs',
    expressAsyncHandler(async (req, res) => {
      const blogs = await Blog.find();
      console.log("blogs",blogs);
      res.send(blogs)
    })
  );  


export default blogRouter;