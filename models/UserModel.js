const db = require ('../config/db');

const findUserByEmail = async (email) => {
  try {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await db.execute(query, [email]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const query = 'INSERT INTO users (email, password, name) VALUES (?, ?, ?)';
    const [result] = await db.execute(query, [userData.email, userData.password, userData.name]);
    return result.insertId;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

/* Remember to add an updateUser and deleteUser function */

module.exports = {
  findUserByEmail,
  createUser
};