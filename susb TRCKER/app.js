import express from 'express';

import { PORT } from './config/env.js'

import userRouter from './routes/user.route.js';

import authRouter from './routes/auth.route.js';

import subscritpionRouter from './routes/subscription.route.js';
import connectToDatabase from './DATABASE/mongodb.js';


const app = express();


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscription', subscritpionRouter)

app.get('/', (req, res) => {
    res.send('welcome to the subscritpion router !');
});

app.listen(PORT,async ()=> {
    console.log(`Server running on port http://localhost:${PORT}`);

    await connectToDatabase();
})

export default app ;