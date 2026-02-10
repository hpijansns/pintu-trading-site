const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection (Replace with your Atlas Link)
mongoose.connect('mongodb://localhost:27017/trading_db')
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

// User Schema
const User = mongoose.model('User', {
    name: String, email: String, balance: { type: Number, default: 0 }, kyc: Boolean
});

// APIs
app.get('/', (req, res) => res.send("Trading Server Running..."));

app.post('/api/trade', async (req, res) => {
    // Trade Logic Here
    res.json({ message: "Trade Executed!" });
});

app.listen(5000, () => console.log("Server on port 5000"));
