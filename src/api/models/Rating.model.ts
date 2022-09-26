// import mongoose, { model, Schema } from "mongoose";
const mongoose = require('mongoose');
/**
 * The schema to mapping rating with mongodb
 */
const RatingSchema = new mongoose.Schema({
    beerId: String,
    rating: {
        type: Number,
        required: [true, 'A rating is required'],
        min: [1, 'A minimum rating of "1" is required'],
        max: [5, '"5" is the maximum rating']
    },
    comments: String
});

// RatingSchema.pre('save', function(next:any) {
//     // Math.round(this.rating);
//     next();
// })
export default mongoose.model("Rating", RatingSchema);