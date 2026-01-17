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
        const images = req.files?.map(
            (file) => `/uploads/heroes/${file.filename}`
        ) || [];

        const hero = await heroService.create({
            ...req.body,
            images,
        });

        res.status(201).json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateHero = async (req, res) => {
    try {
        const hero = await heroService.update(req.params.id, req.body);

        if (!hero) {
            return res.status(404).json({ message: "hero not found" });
        }

        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const addImages = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "no images uploaded" });
        }

        const imagePaths = req.files.map(
            (file) => `/uploads/heroes/${file.filename}`
        );

        const hero = await heroService.addImages(id, imagePaths);

        if (!hero) {
            return res.status(404).json({ message: "hero not found" });
        }

        res.json(hero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteHero = async (req, res) => {
    try {
        const { id } = req.params;

        const hero = await heroService.deleteById(id);

        if (!hero) {
            return res.status(404).json({ message: "hero not found" });
        }

        res.json({ message: "Hero deleted", hero });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};