import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
    console.log('Service running on port 3000');
});


