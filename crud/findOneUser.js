const User = require('../models/Users');

async function findOneUser (condition) {
  const userFound = await User.findOne(condition);
  console.log(userFound);  
}

module.exports = findOneUser;