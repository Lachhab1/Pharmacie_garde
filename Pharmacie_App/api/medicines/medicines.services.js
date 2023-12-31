const pool = require("../../config/database");
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
  
  module.exports = {
    createMedicine: (data, callBack) => {
        const { name_m, description_m, price } = data;
        
        // Assuming you have a function to generate a unique identifier, replace 'generateUniqueId()' with your actual implementation
      //  const id_m = uuidv1(); 
      
        pool.query(
          `INSERT INTO medicines (id_m, name_m, description_m, price) VALUES (0, ?, ?, ?)`,
          [id_m, name_m, description_m, price],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },

  getMedicines: (callBack) => {
    pool.query(
      `SELECT * FROM medicines`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getMedicineById: (id, callBack) => {
    pool.query(
      `SELECT * FROM medicines WHERE id_m = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getMedicineByName: (name, callBack) => {
    pool.query(
      `SELECT * FROM medicines WHERE name_m = ?`,
      [name],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateMedicine: (data, callBack) => {
    pool.query(
      `UPDATE medicines SET name_m=?, description_m=?, price=? WHERE id_m = ?`,
      [data.name_m, data.description_m, data.price, data.id_m],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteMedicine: (id, callBack) => {
    pool.query(
      `DELETE FROM medicines WHERE id_m = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
