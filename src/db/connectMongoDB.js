import mongoose from 'mongoose';
import { Note } from '../models/note.js';

export const connectMongoDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;
    await mongoose.connect(mongoURL);
    console.log('✅ MongoDB connection established successfully');
    await Note.syncIndexes();
  } catch (error) {
    console.log('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};
