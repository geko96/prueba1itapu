import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/v1/auth/register', (req, res) => {
    res.send('Register');
});

app.get('/users/german', (req, res) => {
    res.send('Login');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});