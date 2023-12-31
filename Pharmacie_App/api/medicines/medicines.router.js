const express = require("express");
const router = express.Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createMedicineController,
  getMedicinesController,
  getMedicineByIdController,
  updateMedicineController,
  deleteMedicineController,
  getMedicineByNameController,
} = require("./medicines.controller");

// POST: Create a new medicine (requires token)
router.post("/", checkToken, createMedicineController);

// GET: Get all medicines (requires token)
router.get("/", checkToken, getMedicinesController);

// GET: Get a medicine by ID (requires token)
router.get("/:id", checkToken, getMedicineByIdController);

// GET: Get a medicine by name (requires token)
router.get("/name/:name", checkToken, getMedicineByNameController);

// PATCH: Update a medicine by ID (requires token)
router.patch("/:id", checkToken, updateMedicineController);

// DELETE: Delete a medicine by ID (requires token)
router.delete("/:id", checkToken, deleteMedicineController);

module.exports = router;
