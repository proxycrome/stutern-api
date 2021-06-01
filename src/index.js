import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';

import { getUsers } from './queries/index.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

dotenv.config();

const db = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.2mjlo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected successfully'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'hello world',
  });
});

//create

//read
app.use('/users', userRouter);

//update

//delete
app.listen(port, () => {
  console.log(`Server connected at  http://localhost:${port}`);
});
