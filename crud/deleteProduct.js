const Product = require('../models/Products');

async function removeProducts(condition = {}) {
  const productsDeleted = await Product.deleteMany(condition);

  console.log('Productos eliminados correctamente: ')
  console.log(productsDeleted) 
}

async function removeOneProduct(condition) {
  const deleteOneProduct = await Product.deleteOne(condition);

  console.log('Producto eliminado correctamente: ')
  console.log(deleteOneProduct)
}

async function findAndRemoveOneProduct(condition) {
  const findAndDeleteOneProduct = await Product.findOneAndDelete(condition);

  console.log('Producto encontrado y eliminado correctamente: ')
  console.log(findAndDeleteOneProduct)
}

async function removeProductById(id) {
  const productDeleted = await Product.findByIdAndDelete(id);
  
  console.log('Producto eliminado por id correctamente: ')
  console.log(productDeleted)
}

module.exports = {
  removeProducts,
  removeOneProduct,
  findAndRemoveOneProduct,
  removeProductById
};

