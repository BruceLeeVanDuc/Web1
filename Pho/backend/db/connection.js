// Kết nối MongoDB
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://levanduc06022003:123321123@weblevanduc.b0qksoh.mongodb.net/PhotoApp?retryWrites=true&w=majority&appName=Weblevanduc', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;