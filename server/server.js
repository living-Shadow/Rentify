const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();

require('dotenv').config();

app.use(bodyParser.json());

connectDB();
const corsOptions = {
  origin: ['https://rentify-3w66.onrender.com', 'http://localhost:3000'], 
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
