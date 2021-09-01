const createUser = require('./createUser');

async function uniqueInAction(userData) {
  try {
    createUser(userData);
    createUser(userData);
  } catch (error) {
    console.log(error)
  }
}

module.exports = uniqueInAction;