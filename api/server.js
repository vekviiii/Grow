const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require("./routes/product");
app.use("/api/product", productRoutes);

mongoose.connect(process.env.MONGO_DB_URL)
.then(()=> console.log("Mongoose Connected"))
.catch(err => console.error(err))

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api', (req, res) => {
    res.send('API is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));