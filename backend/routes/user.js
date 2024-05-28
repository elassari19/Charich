const express = require('express');
const {
	findUserByEmail,
	findUserByID,
	createUser,
	updateUser,
	deleteUser
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", findUserByEmail);

userRouter.get("/:id", findUserByID);

userRouter.patch("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
