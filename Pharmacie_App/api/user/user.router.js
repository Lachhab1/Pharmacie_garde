const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  getClients,
  getAdmins,
  getPharmacists,
  updateUsers,
  deleteUser
} = require("./user.controller");
router.get("/", checkToken, getUsers);
router.get("/clients", checkToken, getClients);
router.get("/admins", checkToken, getAdmins);
router.get("/pharmacists", checkToken, getPharmacists);
router.post("/",  createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;