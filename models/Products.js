const { Schema, model, SchemaType } = require('mongoose');

const ProductSchema = new Schema({
  name: { type: String, required:  true },
  description: { type: String },
  price: { type: Number, default: 0 } 
})

module.exports = model('Products', ProductSchema)