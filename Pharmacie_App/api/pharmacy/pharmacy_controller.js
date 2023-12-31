const {
    createPharmacy,
    getPharmacies,
    getPharmacyById,
    updatePharmacy,
    deletePharmacy,
    getPharmacyByName
  } = require("./pharmacy_services");
  //const { v4: uuidv4 } = require('uuid');
  
  module.exports = {
    createPharmacy: (req, res) => {
      const body = req.body;
      createPharmacy(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
  
    getPharmacies: (req, res) => {
      getPharmacies((err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
  
    getPharmacyById: (req, res) => {
      const id = req.params.id;
      getPharmacyById(id, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        if (!results) {
          return res.status(404).json({
            success: 0,
            message: "Pharmacy not found"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    getPharmaciesByDistance: (req, res) => {
      const latReference = parseFloat(req.params.lat); // Use req.params.lat for latitude
      const lonReference = parseFloat(req.params.lon); // Use req.params.lon for longitude
    
      if (isNaN(latReference) || isNaN(lonReference)) {
        return res.status(400).json({
          success: 0,
          message: "Invalid latitude or longitude values"
        });
      }
    
      pharmacyService.getPharmaciesByDistance(latReference, lonReference, (error, pharmacies) => {
        if (error) {
          console.error(error);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
    
        if (!pharmacies || pharmacies.length === 0) {
          return res.status(404).json({
            success: 0,
            message: "No pharmacies found within the specified distance"
          });
        }
    
        return res.status(200).json({
          success: 1,
          data: pharmacies
        });
      });
    },
    
    updatePharmacy: (req, res) => {
      const body = req.body;
      updatePharmacy(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        return res.status(200).json({
          success: 1,
          message: "Pharmacy updated successfully"
        });
      });
    },
  
    deletePharmacy: (req, res) => {
      const id = req.params.id;
      deletePharmacy(id, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        if (!results) {
          return res.status(404).json({
            success: 0,
            message: "Pharmacy not found"
          });
        }
        return res.status(200).json({
          success: 1,
          message: "Pharmacy deleted successfully"
        });
      });
    },
  
    getPharmacyByName: (req, res) => {
      const name = req.params.name;
      getPharmacyByName(name, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
  
        if (results.length === 0) {
          return res.status(404).json({
            success: 0,
            message: "Pharmacy not found"
          });
        }
  
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    getPharmacists: (req, res) => {
        const pharmacyId = req.params.id;
        getPharmacists(pharmacyId, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error"
            });
          }
    
          if (results.length === 0) {
            return res.status(404).json({
              success: 0,
              message: "No pharmacists found for the specified pharmacy"
            });
          }
    
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
      },
      getPeriodes: (req, res) => {
        const pharmacyId = req.params.id;
        getPeriodes(pharmacyId, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error"
            });
          }
    
          if (results.length === 0) {
            return res.status(404).json({
              success: 0,
              message: "No periodes found for the specified pharmacy"
            });
          }
    
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
      },
  };
  