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

export const update = async ({ params, body }) => {
    return null;
};

export const deleteOne = async (id) => {
    return null;
};