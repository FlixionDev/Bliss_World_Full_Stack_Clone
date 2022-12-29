const mg = require('mongoose');
require('dotenv').config();
const ConnectDB = async()=>{
    return new Promise((resolve,reject)=>{
        mg.connect(process.env.DB_URL,(err)=>{
            if(err){
                console.log(err);
                return reject();
            }
            return resolve();
        })
    })
}
module.exports = ConnectDB;