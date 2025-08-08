import express from 'express';

import { PORT } from './config/env.js'
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to the subscritpion router !');
});

app.listen(3000, ()=> {
    console.log("Server running on port http://localhost:3000");
})

export default app ;