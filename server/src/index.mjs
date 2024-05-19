import mongoose from "mongoose";
import { createApp } from "./createApp.mjs";
import dotenv from "dotenv";

// mongoose
// 	.connect("mongodb://localhost/express_tutorial")
// 	.then(() => console.log("Connected to Database"))
// 	.catch((err) => console.log(`Error: ${err}`));

// dotenv library
dotenv.config();

const app = createApp();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});
