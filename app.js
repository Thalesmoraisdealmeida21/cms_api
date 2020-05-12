const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const porta = process.env.PORT_APP || 3333



app.use(bodyParser.json ({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded ({limit: '50mb', extended: true}))
app.use('/images', express.static(path.join(__dirname, '/src/images')))
app.use(express.json())
app.use(cors());
app.use("/", cors(), require('./src/routes/index'))


require('./src/database/index')


app.listen(porta, ()=>{
    console.log("Application has been started in port " + porta)
})