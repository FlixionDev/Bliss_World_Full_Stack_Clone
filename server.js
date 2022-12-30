const express = require('express');
const cors = require('cors');
const ConnectDB = require('./connection/connect');
const app = express();
const registerRouter = require('./controllers/usersRegister.controller');
const loginRouter = require('./controllers/userLogin.controller');
const getUserInfo = require('./controllers/getUserInfo.controller');

/*middle ware testing*/
const AuthMiddleWare = require('./validation/users.middleware');
const router = require('./controllers/tempo');
app.use('/user',AuthMiddleWare,router);
/*middle ware testing*/

app.use(express.json())
app.use(cors());

app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/user',getUserInfo);

ConnectDB().then(()=>{
    app.listen(4000,()=>{
        console.log("Databse is connected successfully with on the port http://localhost:4000");
    })
}).catch((err)=>{
    console.log(err);
})
