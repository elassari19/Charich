const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

// Use cors middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// all app routes
app.use("/api/v1", router);

app.get('/api/v1/', (req, res) => {
    res.send('Welcome to the Charich API');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
