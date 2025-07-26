const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  price: Number,
  stock: Number
});

module.exports = mongoose.model('Product', ProductSchema);
