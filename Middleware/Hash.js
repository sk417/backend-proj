const bcrypt = require('bcryptjs');

const hashPassword  = async (password) => {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (error) {
    throw new Error('Password hashing failed');
  }
};

const comparePassword = async (password, dbPassword) => {
  return await bcrypt.compare(password, dbPassword);
}

module.exports = {
    hashPassword,
    comparePassword
};