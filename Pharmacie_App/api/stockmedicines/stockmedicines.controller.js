const {
    createStockMedicine,
  getStockMedicines,
  getStockMedicineByPharmacyId,
  getStockMedicineByPharmacyIdAndMedicineId,
    updateStockMedicine,
    deleteStockMedicine,
} = require("./stockmedicines.services");
module.exports = {
    getStockMedicines: (req, res) => {
        getStockMedicines((err, results) => {
            console.log(results);
            if (err) {
                console.error(err);
                return;
            }
            return res.json({
                success: 1,
                data: results,
            });
        });
    },
getStockMedicineByPharmacyId: (req, res) => {
    const pharmacyId = req.params.pharmacyId;
    getStockMedicineByPharmacyId(pharmacyId, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "Record not Found",
            });
        }
        return res.json({
            success: 1,
            data: results,
        });
    });
},
getStockMedicineByPharmacyIdAndMedicineId: (req, res) => {
    const pharmacyId = req.params.pharmacyId;
    const medicineId = req.params.medicineId;
    getStockMedicineByPharmacyIdAndMedicineId(pharmacyId, medicineId, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "Record not Found",
            });
        }
        return res.json({
            success: 1,
            data: results,
        });
    });
},

updateStockMedicine: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    updateStockMedicine(id, body, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error",
            });
        }
        return res.json({
            success: 1,
            message: "Stock medicine updated successfully",
        });
    });
},

deleteStockMedicine: (req, res) => {
    const id = req.params.id;
    deleteStockMedicine(id, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error",
            });
        }
        return res.json({
            success: 1,
            message: "Stock medicine deleted successfully",
        });
    });
},

getStockMedicineByMedicineId: (req, res) => {
    const medicineId = req.params.medicineId;
    getStockMedicineByMedicineId(medicineId, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        if (!results) {
            return res.json({
                success: 0,
                message: "Record not Found",
            });
        }
        return res.json({
            success: 1,
            data: results,
        });
    });
},
createStockMedicine: (req, res) => {
    const body = req.body;
    createStockMedicine(body, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error",
            });
        }
        return res.status(200).json({
            success: 1,
            data: results,
        });
    });
},
};
