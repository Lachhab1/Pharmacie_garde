const {
    createMedicine,
    getMedicines,
    getMedicineById,
    getMedicineByName,
    updateMedicine,
    deleteMedicine,
  } = require("./medicines.services");
  
  module.exports = {
    createMedicineController: (req, res) => {
      const body = req.body;
      createMedicine(body, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.status(201).json({
          success: 1,
          data: results,
        });
      });
    },
  
    getMedicinesController: (req, res) => {
      getMedicines((err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.json({
          success: 1,
          data: results,
        });
      });
    },
  
    getMedicineByIdController: (req, res) => {
      const id = req.params.id;
      getMedicineById(id, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.json({
          success: 1,
          data: results,
        });
      });
    },
    getMedicineByNameController: (req, res) => {
        const name = req.params.name; // Assuming the name is provided as a route parameter
        getMedicineByName(name, (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error",
            });
          }
          return res.json({
            success: 1,
            data: results,
          });
        });
      },
  
    updateMedicineController: (req, res) => {
      const body = req.body;
      updateMedicine(body, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.json({
          success: 1,
          message: "Updated successfully",
        });
      });
    },
  
    deleteMedicineController: (req, res) => {
      const id = req.params.id;
      deleteMedicine(id, (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.json({
          success: 1,
          message: "Medicine deleted successfully",
        });
      });
    },
  };
  