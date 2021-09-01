const User = require('../models/Users');

const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save(); 
    console.log('Usuario creado!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = createUser;