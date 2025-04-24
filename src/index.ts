import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { AppDataSource } from './config/data-source';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(routes);

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


