const express = require('express');
const cors = require('cors');
const connect = require('./db/connect');
const {orderRouter,productRouter} =require('./controller/products.controller')

const app = express();
app.use(cors()); 
app.use(express.json()); 
app.use('/products',productRouter)
app.use("/orders",orderRouter);
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