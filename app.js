const express = require('express');
const app = express();
const cors = require('cors')


app.use(express.json())
app.use(cors());
require('./src/database/index')
app.use("/", cors(), require('./src/routes/index'))

app.listen(3000, ()=>{
    console.log("Application has been started")
})