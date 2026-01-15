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
    return null;
};

export const create = async (body) => {
    return null;
};

export const update = async ({ params, body }) => {
    return null;
};

export const deleteOne = async (id) => {
    return null;
};