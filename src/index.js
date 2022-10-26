const express = require('express')
const bodyParser = require('body-parser');
const catsRouter = require('./routers/catRouter');
const app = express()
const port = 3000




/**
 * Middleware setup
 */
app.use(bodyParser.json())


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



app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})