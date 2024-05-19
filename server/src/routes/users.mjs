import { Router } from "express";
import { User } from "../mongoose/schemas/user.mjs";

const router = Router();

router.get("/users", async(request, response) => {
	try {
		// const users = await User.find();

		// if (!users) {
		// 	return response.status(404).json({ error: "No users found" });
		// }

		// return response.status(200).json({ users });
	} catch (error) {
		return response.status(500).json({ error: error.message });
	}
});

router.get("/user/:id", async(request, response) => {
	const { id } = request.params;
	return response.status(200).json({ message: "User found", id });
});

router.patch("/user/:id", async(request, response) => {

});

router.delete("/user/:id", async(request, response) => {

});

export default router;
