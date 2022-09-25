// export interface Rating {
//     beerId: number;
//     rating: string;
//     comments: string
// }

import { model, Schema } from "mongoose";
import { number } from "zod";

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