const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
	const { email, password, fullname } = req.body;
	try {
		const existingUser = await User.findOne({ email });
		if(existingUser) {
			return res.status(400).json({ error: "Email already exists" });
		}

		// hash password using bcrypt
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = new User({ email, password: hashedPassword, fullname });
		await user.save();

		return res.status(201).json({ user });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

const findUserByEmail = async (req, res) => {
  const { email } = req.body;

	try {
		const user = await User.find({ email });

		if (user.length === 0) {
			return res.status(404).json({ error: "No user found" });
		}

		return res.status(200).json({ user });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

const findUserByID = async (req, res) => {
  const { id } = req.params;

	try {
		const user = await User.findOne({ _id: id });

		if (user === null) {
			return res.status(404).json({ error: "No user found" });
		}

		return res.status(200).json({ user });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

const updateUser = async (req, res) => {
	const { id } = req.params;
	const { password, ...rest } = req.body;

	try {
		const existingUser = await User.findOne({ _id: id });
		console.log("existingUser", existingUser);
		if(!existingUser) {
			return res.status(400).json({ error: "No user found" });
		}
		const user = await User.findOneAndUpdate({ _id: id }, { ...rest }, { new: true });
		return res.status(200).json({ user });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}

}

const deleteUser = async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.deleteOne({ _id: id });
		if (user.deletedCount == 1) {
			res.status(204).clearCookie("token");
			return res.status(204).json({ message: "User deleted" });
		}
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}

module.exports = {
  findUserByEmail,
	findUserByID,
	createUser,
	updateUser,
	deleteUser
};