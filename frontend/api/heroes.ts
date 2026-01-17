import { HeroUpdate } from "@/types/heroType";
import { api } from "@/utils/api";

export const getAllHeroes = async (page: number = 1, limit: number = 6) => {
    return await api.get("/heroes", {
        params: { page, limit },
    });
};

export const getOneHero = async (id: string) => {
    return await api.get(`/heroes/${id}`);
};

export const createHero = async (data: FormData) => {
    return await api.post("/heroes", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const updateHero = async (id: string, data: HeroUpdate) => {
    return api.put(`/heroes/${id}`, data);
};