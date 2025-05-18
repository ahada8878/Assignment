require('dotenv').config(); // Load environment variables

const mongoose = require("mongoose");

// Get Mongo URI from .env file
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});

// Schema and model
const logInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const collection = new mongoose.model("LoginCollection", logInSchema);

module.exports = collection;
