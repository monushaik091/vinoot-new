const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors"); // Import the cors package

const masterAdminRoutes = require('./routes/MasterAdminRout');

const app = express();

app.use(cors()); 

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.use('/api', masterAdminRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
