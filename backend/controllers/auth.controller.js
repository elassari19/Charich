const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const loginController = async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(404).json({ error: "Invalid Email" });
    }
    // compare password
    const valid = await bcrypt.compareSync(password, user.password);
    if (!valid) {
      return response.status(400).json({ error: "Invalid credentials" });
    }
    // generate token
    const token = `${user.id}${user.email}`;
    response.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    return response.status(200).json({ user, token });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
