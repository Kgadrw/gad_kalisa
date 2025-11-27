import mongoose from 'mongoose';

// URL encode the password to handle special characters
const DB_PASSWORD = encodeURIComponent('Kigali20@');
const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://jimmygateterwanda_db_user:${DB_PASSWORD}@cluster0.tn5gjrc.mongodb.net/gadkalisa?retryWrites=true&w=majority&appName=Cluster0`;

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

mongoose.connection.on('error', (error) => {
  console.error('❌ MongoDB error:', error);
});

