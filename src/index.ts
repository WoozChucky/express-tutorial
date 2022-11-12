import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();

const app: Express = express()
const port = 3000


import { catsRouter } from './routers/catRouter';

import { dogsRouter } from './routers/dogRouter';

import {ownersRouter} from "./routers/ownerRouter";

/**
 * Middleware setup
 */
app.use(bodyParser.json());


/**
 * Routing Setup
 */

app.use('/cats', catsRouter);

app.use('/dogs', dogsRouter);

app.use('/owners', ownersRouter);


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
