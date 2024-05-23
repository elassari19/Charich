import express from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";

export function createApp() {
  dotenv.config();

	// mongoDB();

	const app = express();

	app.use(cors());
	app.use(express.json());
	app.use(cookieParser(process.env.JWT_SECRET));
	app.use(
		session({
			secret: process.env.JWT_SECRET,
			saveUninitialized: true,
			resave: false,
			cookie: {
				maxAge: 60000 * 60 * 24 * 30,
			},
			// store: MongoStore.create({
			// 	client: mongoose.connection.getClient(),
			// }),
		})
	);

	app.use('/api/v1', routes);

	return app;
}