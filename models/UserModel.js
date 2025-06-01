const db = require("../config/db");

const findUserByEmail = async (user_email) => {
  try {
    const query = `
  SELECT
    user_email AS email,
    user_password AS password,
    user_name AS name
  FROM users 
  WHERE user_email = ?
`;
    const [rows] = await db.execute(query, [user_email]);
    if (typeof email == "undefined") {
      throw new Error("Email is required");
    }
    return rows[0] || null;
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const query = `INSERT INTO users 
    (user_email, user_password, user_name)
    VALUES (?, ?, ?)`;
    const [result] = await db.execute(query,
        [userData.email, userData.password, userData.name]);
    return result.insertId;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

module.exports = {
  findUserByEmail,
  createUser,
};
