const Product = require('../models/Products');

async function findAll(condition = {}) {
  const allProducts = await Product.find(condition);
  console.log(allProducts);  
}

module.exports = findAll;