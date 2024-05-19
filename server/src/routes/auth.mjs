import passport from "passport";
import { Router } from "express";

const router = Router();

router.post(
	"/auth",
	passport.authenticate("local"),
	(request, response) => {
		response.sendStatus(200);
	}
);

router.get("/auth/status", (request, response) => {
	return request.user ? response.send(request.user) : response.sendStatus(401);
});

router.post("/auth/logout", (request, response) => {
	if (!request.user) return response.sendStatus(401);
	request.logout((err) => {
		if (err) return response.sendStatus(400);
		response.send(200);
	});
});

router.get("/auth/discord", passport.authenticate("discord"));
router.get(
	"/auth/discord/redirect",
	passport.authenticate("discord"),
	(request, response) => {
		response.sendStatus(200);
	}
);

export default router;
