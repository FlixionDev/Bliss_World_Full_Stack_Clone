const express=require('express')
const app = express();
const cors = require('cors');
const connect = require('./db/connect');
const cartRoute=require('./routes/cart.routes')
const {orderRouter,productRouter} =require('./controllers/products.controller')
// app.use(cors()); 
app.use(express.json()); 


app.use('/products',productRouter)
app.use("/orders",orderRouter);
app.use(cartRoute)
const registerRouter = require('./controllers/usersRegister.controller');
const loginRouter = require('./controllers/userLogin.controller');
const getUserInfo = require('./controllers/getUserInfo.controller');

/*middle ware testing*/
const AuthMiddleWare = require('./validation/users.middleware');
const router = require('./controllers/tempo');
app.use('/user',AuthMiddleWare,router);
/*middle ware testing*/

app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/user',getUserInfo);


app.use(express.json()); 


const port = Number(process.argv[2]) || 5000;
connect()
.then(() => {
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
    })
})
.catch((err) => {
    console.log('Can\'t start server due to failed db connection')
})