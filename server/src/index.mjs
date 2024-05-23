import { createApp } from "./createApp.mjs";


const app = createApp();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});
