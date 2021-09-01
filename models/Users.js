const { Schema, model } = require('mongoose');

const UsersSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  data: { type: Date, default: Date.now() },
  name: String
})

module.exports = model('Users', UsersSchema)