const Product = require('../models/Products');

const createProduct = async (product) => {
  try {
    const newProduct = new Product(product);
    const productSaved = await newProduct.save(); 

    console.log({ newProduct, productSaved })
  } catch (error) {
    console.log(error)
  }
}

module.exports = createProduct;