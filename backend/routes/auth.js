const express = require('express');
const authcontroller = require('../controllers/authcontroller')

const router = express.Router();

router.post("/auth/login", async (request, response) => {
  const { email, password, cookies } = request.body;
  console.log("/auth/login", email, password, cookies)
  if (!email || !password) {
    return response.status(400).json({ message: "Invalid request" });
  }
  response.status(200).json({ message: "Login successful" });
});

router.post("/auth/logout", authcontroller.logout_post);



router.post("/auth/forgetpassword", authcontroller.forgetpassword_post);

router.post("/auth/confirmation/:id", authcontroller.confirmation_post);

router.get("/auth/status", authcontroller.status.get);

module.exports = router;
