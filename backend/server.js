const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const { productRouter } = require('./routes/product');
const routes = require('./routes');
const auth = require ('./routes/auth');


require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

// middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/product", productRouter);
app.use("/api/v1", routes.userRouter);

app.get('/api/v1/', (req, res) => {
    res.send('Welcome to the Charich API');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});
app.use(routes.auth);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
