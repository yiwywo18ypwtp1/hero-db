import mongoose, { Mongoose } from "mongoose"

const heroSchema = new mongoose.Schema(
    {
        nickname: { type: String, required: true },
        real_name: String,
        origin_description: String,
        superpowers: String,
        catch_phrase: String,
        images: [String],
    },
    { timestamps: true }
);

export const Hero = mongoose.model("Hero", heroSchema, "heroes");