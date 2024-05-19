import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
	name: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
  description: {
		type: mongoose.Schema.Types.String,
		required: true,
	},
  price: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  countInStock: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  imageUrl: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  rating: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  reviews: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  orders: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
});

export const Product = mongoose.model("Product", ProductSchema);
