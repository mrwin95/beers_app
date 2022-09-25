import { model, Schema } from "mongoose";

const RatingSchema: Schema = new Schema({
    beerId: {
        type: Number,
        unique: true,
        required: [true, 'Cannot be blank'],
        index: true
    },
    rating: {
        type: String,
        required: [true, 'Cannot be blank'],
    },
    comments: {
        type: String
    }
});

export const Rating = model("Rating", RatingSchema);