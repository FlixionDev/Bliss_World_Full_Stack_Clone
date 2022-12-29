const mg = require('mongoose');
const userSchema = mg.Schema({
    name: {
      type: String,
    },
    password: {
      type: String,
      min: 6,
      max: 32,
      required: true,
    },
  
    email: {
      type: String,
      min: 6,
      max: 32,
      required: true,
    },
    cartItems: [
      {
        type: mg.Schema.Types.ObjectId,
        ref: "cart",
      },
    ],
    orderedItems: [
      {
        type: mg.Schema.Types.ObjectId,
        ref: "order",
      },
    ],
  });
  
  const Users = mg.model('users',userSchema);
  module.exports = Users;