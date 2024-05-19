import mongoose from "mongoose";

const CheckoutSchema = new mongoose.Schema({
	description: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
	costumer: {
		type: mongoose.Schema.Types.String,
		required: true,
		unique: true,
	},
	amount: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
  status: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  paymentAuthorized: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  user: {type: mongoose.Types.ObjectId, ref: "User", require: true},
  product: [{type: mongoose.Types.ObjectId, ref: "Product", require: true}]
});

export const Checkout = mongoose.model("Checkout", CheckoutSchema);
