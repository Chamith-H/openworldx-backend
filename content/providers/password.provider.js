const bcrypt = require("bcrypt");

function encryptPassword(plainPassword) {
  try {
    const encryptedPassword = bcrypt.hash(plainPassword, 10);
    return encryptedPassword;
  } catch (error) {
    console.log(error);
  }
}

async function comparePassword(plainPassword, hashPassword) {
  try {
    const verified = await bcrypt.compare(plainPassword, hashPassword);
    return verified;
  } catch (error) {
    throw new Error(error.message);
  }
}

const passwordProvider = {
  encryptPassword,
  comparePassword,
};

module.exports = passwordProvider;
