import mongoose from 'mongoose';
const { Schema } = mongoose;


export const CatSchema = new mongoose.Schema({
        name: String,
        age: Number,
        breed: String,
});
      