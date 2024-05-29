const express = require('express');
const {
  loginController,
  logoutController,
  forgetPasswordController,
  confirmEmailController
} = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.get("/login", loginController);

authRouter.get("/logout", logoutController);

authRouter.get("/forgetpassword", forgetPasswordController);

authRouter.get("/:id", confirmEmailController);

module.exports = authRouter;
