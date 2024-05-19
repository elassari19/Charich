import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	fullname: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	email: {
		type: mongoose.Schema.Types.String,
		required: true,
		unique: true,
	},
	password: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	role: {
		type: mongoose.Schema.Types.String,
		default: "client",
	},
});

const AccountSchema = new mongoose.Schema({
	image: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	addriss: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	city: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	zip: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	country: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	phone: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	user: {type: mongoose.Types.ObjectId, ref: "User", require: true}
});

const UserAccountSchema = new mongoose.Schema({
	user: {type: mongoose.Types.ObjectId, ref: "User", require: true},
	account: {type: mongoose.Types.ObjectId, ref: "Account", require: true}
});

export const User = mongoose.model("User", UserSchema);
export const Account = mongoose.model("Account", AccountSchema);
export const UserAccount = mongoose.model("UserAccount", UserAccountSchema);
