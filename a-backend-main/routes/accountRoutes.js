const express = require("express");
const router = express.Router();
const {
  getSingleAccount,
  updateAccount,
  updateProfile,
} = require("../controllers/accountController");
const verifyJWT = require("../middleware/verifyJWT");

// Use the verifyJWT middleware for all routes in this file
router.use(verifyJWT);

// Routing with controller methods for different HTTP methods coming into the users route
router
  .route("/:id")
  .get(getSingleAccount)
  .patch(updateAccount)
  .put(updateProfile);

module.exports = router;
