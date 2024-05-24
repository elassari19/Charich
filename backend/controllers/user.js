const { User } = require("../models/user");

const findUserByEmail = async (req, res) => {
  const { email } = req.body;

	try {
		const user = await User.find({ email }, { id: 1, email: 1, role: 1, status: 1 });

		if (user.length === 0) {
			return res.status(404).json({ error: "No user found" });
		}

		return res.status(200).json({ user });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

module.exports = {
  findUserByEmail
};