const express = require('express')
const app = express()
const cats = require('./route/global')
var bodyParser = require('body-parser')
 
app.use(bodyParser.json());

app.use('/cats', cats)
app.get('/',(req,res)=>{
return res.send("welcome in my api")
})


app.listen(3002,()=>{console.log("lisinting")})