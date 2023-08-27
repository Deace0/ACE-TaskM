const express = require("express");
const router = express.Router();
const {
  login,
  register,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");
const loginLimiter = require("../middleware/loginLimiter");

router.route("/").post(loginLimiter, login);

router.route("/register").post(register);

router.route("/forgotpassword").post(forgotPassword);

router.route("/resetpassword/:passwordResetToken").patch(resetPassword);

module.exports = router;
