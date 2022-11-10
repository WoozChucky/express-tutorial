import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();

const app: Express = express()
const port = 3000




import { catsRouter } from './routers/catRouter';

/**
 * Middleware setup
 */
app.use(bodyParser.json());


/**
 * Routing Setup
 */

app.use('/cats', catsRouter);

// Dogs
// Cats
// Owners

// Router Dogs
// Router Cats
// Router Owners

// Controller Dogs
// Controller Cats
// Controller Owners



app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})