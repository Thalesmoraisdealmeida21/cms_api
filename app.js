const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();



app.use(bodyParser.json ({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded ({limit: '50mb', extended: true}))
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(express.json())
app.use(cors());
app.use("/", cors(), require('./src/routes/index'))


require('./src/database/index')


app.listen(3000, ()=>{
    console.log("Application has been started")
})