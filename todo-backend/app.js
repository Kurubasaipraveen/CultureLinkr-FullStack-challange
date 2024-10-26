const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import task routes
const taskRoutes = require('./routes/tasks');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/todoDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Use task routes
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
