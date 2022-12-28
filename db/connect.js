require('dotenv').config();
const db_url=process.env.DB_URL;
const mongoose = require('mongoose')

async function connect() {
    return new Promise((resolve, reject) => {
        mongoose.connect(`${db_url}`, (err) => {
            if (err) {
                console.log('Error in connecting to database')
                return reject(err);
            }
            resolve();
        })
    })
}
module.exports = connect;