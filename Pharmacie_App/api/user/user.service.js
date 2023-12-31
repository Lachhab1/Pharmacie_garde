const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO users (first_name, last_name, email, password, phone, role) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        data.phone,
        data.role
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `SELECT * FROM users WHERE email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `SELECT * FROM users WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `SELECT * FROM users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getClients: callBack => {
    pool.query(
      `SELECT * FROM users WHERE role = 0`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getAdmins: callBack => {
    pool.query(
      `SELECT * FROM users WHERE role = 2`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getPharmacists: callBack => {
    pool.query(
      `SELECT * FROM users WHERE role = 1`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE users 
       SET first_name=?, last_name=?, email=?, password=?, phone=?, role=? 
       WHERE id = ?`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        data.phone,
        data.role,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (id, callBack) => {
    pool.query(
      `DELETE FROM users WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
