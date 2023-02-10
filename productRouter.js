import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from './data.js';
import Product from './productModel.js';

const productRouter = express.Router();

productRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await Product.remove({});
      const products = data.products.map((product) => ({
        ...product,
      }));
      const createdProducts = await Product.insertMany(products);
      res.send({ createdProducts });
    })
  );

export default productRouter;