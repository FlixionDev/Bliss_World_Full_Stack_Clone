const mg = require('mongoose');
const userSchema = mg.Schema({
    name: {
      type: String,
    },
    password: {
      type: String,
      min: 6,
      max: 16,
      required: true,
    },
  
    email: {
      type: String,
      min: 6,
      max: 32,
      required: true,
    }
  });
  
  const Users = mg.model('users',userSchema);
  module.exports = Users;