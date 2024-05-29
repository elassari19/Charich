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

const logoutController = async (request, response) => {
  return response.status(200).json({ message: "Logged out" });
}

const forgetPasswordController = async (request, response) => {
  const { email } = request.body;

  try {
    const user = await User.findOne({ email})
    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }
    // generate token
    const salt = bcrypt.genSaltSync(10);
    // send email
    return response.status(200).json({ message: "Email sent", link: `${request.headers.host}/forgetPassword/${salt}` });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}

const confirmEmailController = async (request, response) => {
  const { id } = request.params;

  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }
    // update user status
    const updatedUser = await User.findOneAndUpdate({ _id: user._id }, { status: "active" }, { new: true });
    return response.status(200).json({ user: updatedUser.status });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}

