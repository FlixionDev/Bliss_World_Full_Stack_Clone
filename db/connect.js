require('dotenv').config();
const db_url=process.env.DB_URL;

const mongoose=require('mongoose')

async function connect(){
    mongoose.connect(db_url)
    .then(()=>{
        console.log('Connected to db')
    })
    .catch((error)=>{
       console.log('Unable to connected to db',error)
    })
}

module.exports=connect