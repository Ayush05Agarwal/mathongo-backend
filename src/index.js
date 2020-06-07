const express = require('express')
require('./db/mongoose')
const regRouter = require('./routers/register')
const sendRouter = require('./routers/sendotp')
const verified = require('./routers/verified')
var cors = require('cors');
const app = express()
const port = process.env.PORT || 3001
app.use(cors());
app.use(express.json())
app.use(regRouter)
app.use(sendRouter)
app.use(verified)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})