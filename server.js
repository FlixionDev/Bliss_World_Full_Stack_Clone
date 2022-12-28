const express=require('express')
const cartRoute=require('./routes/cart.routes')
const connect=require('./db/connect')
const app=express()

app.use(cartRoute)
const port=Number(process.argv[2])||5000
connect().then(()=>{
    app.listen(port,()=>{
        console.log(`Connected to port http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log('Error in connecting to db')
})

