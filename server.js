import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import productRouter from './productRouter.js';
import projectRouter from './Routes/projectRouter.js';
import blogRouter from './Routes/blogRouter.js';
import aboutRouter from './Routes/aboutRouter.js';
import contactRouter from './Routes/contactRouter.js';
import heroRouter from './Routes/heroRouter.js';
import skillsRouter from './Routes/skillsRouter.js';
import userRouter from './Routes/userRouter.js';


const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/api/products', productRouter);
app.use('/api/projects', projectRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/about', aboutRouter);
app.use('/api/contact', contactRouter);
app.use('/api/hero', heroRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/user', userRouter);
app.use('/api/signin', userRouter);



const uri = 'mongodb+srv://alhj8:120003001546alaa@backend.bj9dxpr.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("connected to mongodb");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("server started on port 8000");
});