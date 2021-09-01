const createProduct = require('./createProduct');
const deleteProducts = require('./deleteProduct');
const findAllProducts = require('./findAllProducts');
const findOneUser = require('./findOneUser');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const uniqueInAction = require('./uniqueInAction');

module.exports = {
  createProduct,
  findAllProducts,
  ...deleteProducts,
  uniqueInAction,
  findOneUser,
  ...updateUser,
  createUser
}