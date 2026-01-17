import { Hero } from "../models/hero.model.js";

export const getAll = async ({ page = 1, limit = 6 }) => {
    const skip = (page - 1) * limit;

    const [heroes, total] = await Promise.all([
        Hero.find().skip(skip).limit(limit),
        Hero.countDocuments(),
    ]);

    return {
        heroes,
        total,
        totalPages: Math.ceil(total / limit),
        page,
    };
};

export const getOne = async (id) => {
    return Hero.findById(id);
};

export const create = async (data) => {
    return Hero.create(data);
};

export const update = async (id, data) => {
    const hero = await Hero.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true },
    );

    return hero;
};

export const addImages = async (id, imagePaths) => {
    return await Hero.findByIdAndUpdate(
        id,
        {
            $push: {
                images: { $each: imagePaths },
            },
        },
        { new: true }
    );
};

export const deleteById = async (id) => {
    const hero = await Hero.findByIdAndDelete(id);
    return hero;
};