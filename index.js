const express = require('express');
const cors = require('cors');
const ConnectDB = require('./connection/connect');
const app = express();
const registerRouter = require('./controllers/usersRegister.controller');

app.use(express.json())
app.use(cors());

app.use('/register',registerRouter);
ConnectDB().then(()=>{
    app.listen(4000,()=>{
        console.log("Databse is connected successfully with on the port http://localhost:4000");
    })
}).catch((err)=>{
    console.log(err);
})