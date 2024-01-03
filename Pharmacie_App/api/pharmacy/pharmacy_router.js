const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createPharmacy,
  getPharmacies,
  getPharmacyById,
  updatePharmacy,
  deletePharmacy,
  getPharmacyByName,
  getPharmacists,
  getPeriodes,
  getPharmaciesByDistance,
  getGardePharmacieByDistance,
  createGardePharmacy,
} = require("./pharmacy_controller");

router.post("/", checkToken, createPharmacy);
router.get("/", checkToken, getPharmacies);
router.get("/:id", checkToken, getPharmacyById);
router.get("/name/:name", checkToken, getPharmacyByName); 
router.patch("/", checkToken, updatePharmacy);
router.delete("/:id", checkToken, deletePharmacy);
router.get("/:id/pharmacists", checkToken, getPharmacists);
router.get("/:id/periodes", checkToken, getPeriodes);
router.get("/distance/:lat/:lon", checkToken, getPharmaciesByDistance);
//get pharmacies de garde by distance
router.get("/garde/:lat/:lon", checkToken, getGardePharmacieByDistance);
router.post("/garde", checkToken, createGardePharmacy);

module.exports = router;
