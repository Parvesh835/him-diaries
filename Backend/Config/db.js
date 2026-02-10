import mongoose from 'mongoose';

export const db = async () => {
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("connected to database");
    }
    catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};