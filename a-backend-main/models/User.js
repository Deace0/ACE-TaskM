const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: false,
      default: "",
    },
    role: {
      type: String,
      default: "Employee",
    },
    active: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      select: false,
    },
    deletedAt: {
      type: Date,
      default: null,
      select: false,
    },
    passwordResetToken: {
      type: String,
      default: null,
    },
    passwordResetAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Name the model "User", and pass in the user schema
module.exports = mongoose.model("User", userSchema);
