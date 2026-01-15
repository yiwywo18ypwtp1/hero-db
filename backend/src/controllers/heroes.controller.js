import * as heroService from "../services/heroes.service.js"

export const getHeroList = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 6;

        const heroes = await heroService.getAll({ page, limit });

        res.json(heroes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getHero = async (req, res) => {
    try {
        const hero = await heroService.getOne(req.params.id);
        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createHero = async (req, res) => {
    try {
        const hero = await heroService.create(req.body);
        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateHero = async (req, res) => {
    try {
        const hero = await heroService.update(req.params.id, req.body);
        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteHero = async (req, res) => {
    try {
        const hero = await heroService.deleteOne(req.params.id);
        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};