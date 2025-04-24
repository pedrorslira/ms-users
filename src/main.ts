import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { AppDataSource } from './config/data-source';
import { errorHandler } from './middlewares/error.middleware';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001

app.use(express.json());
app.use(cors())
app.use('/msusers', routes);
app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {
    console.log('Successfully connected to database');

    app.listen(port, () => {
      console.log(`Service running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to database', err);
  });


