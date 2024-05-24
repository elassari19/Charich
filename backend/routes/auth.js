const express = require('express');

const router = express.Router();

router.post("/auth/login", async (request, response) => {
  const { email, password, cookies } = request.body;
  console.log("/auth/login", email, password, cookies)
  if (!email || !password) {
    return response.status(400).json({ message: "Invalid request" });
  }
  response.status(200).json({ message: "Login successful" });
});

router.post("/auth/logout", (request, response) => {

});

router.post("/auth/forgetpassword", async (request, response) => {

});

router.post("/auth/confirmation/:id", async(request, response) => {

});

router.get("/auth/status", (request, response) => {

});

module.exports = router;
