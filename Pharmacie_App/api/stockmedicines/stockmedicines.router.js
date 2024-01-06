const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    createStockMedicine,
    getStockMedicines,
    getStockMedicineByPharmacyId,
    updateStockMedicine,
    deleteStockMedicine,
} = require("./stockmedicines.controller");

// POST: Create a new stockmedicine (requires token)
router.post("/", checkToken, createStockMedicine);

// GET: Get all stockmedicines (requires token)
router.get("/", checkToken, getStockMedicines);

// GET: Get a stockmedicine by pharmacy ID (requires token)
router.get("/:id", checkToken, getStockMedicineByPharmacyId);


// PATCH: Update a stockmedicine by ID (requires token)
router.patch("/:id", checkToken, updateStockMedicine);

// DELETE: Delete a stockmedicine by ID (requires token)
router.delete("/:id", checkToken, deleteStockMedicine);





module.exports = router;

