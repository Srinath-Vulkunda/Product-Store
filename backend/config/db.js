import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Validate MONGO_URI
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        console.error(error.stack); // Log full stack for debugging
        process.exit(1);
    }
};