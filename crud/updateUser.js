const User = require('../models/Users');

/**
 * @desc Busca a un usuario a través del metodo findOneAndUpdate y lo actualiza
 * @param {*} condition para encontrar a un usuario
 * @param {*} data data para actualizar al usuario
 * @param {*} returnUpdated determina se debe retornar el nuevo objeto actualizado. false = retorna el viejo. true = el actualizado.
 */

const findOneAndUpdate = async (condition, data, returnUpdated = false)=> {
  const userUpdated = await User.findOneAndUpdate(condition, data, { new: returnUpdated })

  console.log(userUpdated);
}

/**
 * @desc Busca a un usuario a través del metodo find, y modifica en este caso su contraseña
 * @param {*} condition para encontrar a un usuario
 */

const findAndManualUpdate = async (condition)=> {
  const oldUser = await User.findOne(condition);
  oldUser.password = '4s5d4a5s4d';

  const userUpdated =  await oldUser.save();
  console.log({ oldUser, userUpdated });
}

async function updateOneUser (condition, data) {
  const userUpdated = await User.updateOne(condition, data);

  console.log(userUpdated);
}

module.exports = {
  findOneAndUpdate,
  findAndManualUpdate,
  updateOneUser
}