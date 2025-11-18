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

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

let german="peronchosdfgsdfhdfghdfg";
