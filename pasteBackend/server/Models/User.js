import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create the model
const User = mongoose.model('User', userSchema); // Use a singular form as the model name

export default User; // Export the model using ES module syntax

