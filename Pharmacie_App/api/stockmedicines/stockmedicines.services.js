const pool = require("../../config/database");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createStockMedicine: (data, callBack) => {
        const { id_m, id_p, stock } = data;
        pool.query(
            `INSERT INTO pharmacy_medicine (id_m, id_p, stock) VALUES (?, ?, ?)`,
            [id_m, id_p, stock],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getStockMedicines: callBack => {
        pool.query(
            `SELECT pharmacy_medicine.id_m ,medicines.name_m,medicines.description_m,medicines.price,pharmacy_medicine.stock,medicines.path FROM pharmacy_medicine join medicines on pharmacy_medicine.id_m=medicines.id_m`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getStockMedicineById: (id, callBack) => {
        pool.query(
            `SELECT * FROM pharmacy_medicine WHERE id_m = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getStockMedicineByPharmacyId: (id_p, callBack) => {
        pool.query(
            `SELECT * FROM pharmacy_medicine WHERE id_p = ?`,
            [id_p],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getStockMedicineByPharmacyIdAndMedicineId: (id_p, id_m, callBack) => {
        pool.query(
            `SELECT * FROM pharmacy_medicine WHERE id_p = ? AND id_m = ?`,
            [id_p, id_m],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateStockMedicine: (id, data, callBack) => {
        const { stock } = data;
        pool.query(
            `UPDATE pharmacy_medicine SET stock = ? WHERE id_m = ?`,
            [stock, id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteStockMedicine: (id, callBack) => {
        pool.query(
            `DELETE FROM pharmacy_medicine WHERE id_m = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
}
