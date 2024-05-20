import passport from "passport";
import { Router } from "express";

const router = Router();

router.post("/auth/login", async (request, response) => {

});

router.post("/auth/logout", (request, response) => {

});

router.post("/auth/forgetpassword", async (request, response) => {

});

router.post("/auth/confirmation/:id", async(request, response) => {

});

router.get("/auth/status", (request, response) => {
	return request.user ? response.send(request.user) : response.sendStatus(401);
});

export default router;
