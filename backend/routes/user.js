const express = require('express');
const {
	findUserByEmail
} = require("../controllers/user");

const router = express.Router();

// Create a new user (account)
router.post("/user", async(request, response) => {

});

// Find user by email
router.get("/user", findUserByEmail);

router.get("/user/:id", async(request, response) => {
	const { id } = request.params;
	return response.status(200).json({ message: "User found", id });
});

router.patch("/user/:id", async(request, response) => {

});

router.delete("/user/:id", async(request, response) => {

});

module.exports = router;
