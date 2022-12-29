const express = require('express');
const cors = require('cors');
const ConnectDB = require('./connection/connect');
const app = express();

app.use(express.json())
app.use(cors());

ConnectDB().then(()=>{
    app.listen(4000,()=>{
        console.log("Databse is connected successfully with on the port http://localhost:4000");
    })
}).catch((err)=>{
    console.log(err);
})