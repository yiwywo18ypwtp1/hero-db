'use client';

import { useEffect, useState } from "react";
import { updateHero } from "@/api/heroes";
import { HeroType } from "@/types/heroType";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    hero: HeroType;
    onUpdated: (hero: HeroType) => void;
};

const MAX_DESC = 650;
const MAX_SUPER = 200;
const MAX_CATCH = 100;

const HeroEditModal = ({ isOpen, onClose, hero, onUpdated }: Props) => {
    const [nickname, setNickname] = useState("");
    const [realName, setRealName] = useState("");

    const [description, setDescription] = useState("");
    const [superpowers, setSuperpowers] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");

    useEffect(() => {
        if (!hero) return;

        setNickname(hero.nickname || "");
        setRealName(hero.real_name || "");
        setDescription(hero.origin_description || "");
        setSuperpowers(hero.superpowers || "");
        setCatchPhrase(hero.catch_phrase || "");
    }, [hero]);

    if (!isOpen) return null;

    const handleSave = async () => {
        const payload = {
            nickname,
            real_name: realName,
            origin_description: description,
            superpowers,
            catch_phrase: catchPhrase,
        };

        const res = await updateHero(hero._id, payload);
        onUpdated(res.data);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="slate-block w-105 relative">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="font-orbit text-xl opacity-80">Edit hero</h2>
                    <button onClick={onClose} className="opacity-50 hover:opacity-100">✕</button>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-white/50">Nickname</label>
                    <input
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="input"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-white/50">Real name</label>
                    <input
                        value={realName}
                        onChange={(e) => setRealName(e.target.value)}
                        className="input"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <label className="text-white/50">Origin description</label>
                        <span className="text-xs opacity-35">
                            {description.length}/{MAX_DESC}
                        </span>
                    </div>
                    <textarea
                        maxLength={MAX_DESC}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="input max-h-40"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <label className="text-white/50">Superpowers</label>
                        <span className="text-xs opacity-35">
                            {superpowers.length}/{MAX_SUPER}
                        </span>
                    </div>
                    <textarea
                        maxLength={MAX_SUPER}
                        value={superpowers}
                        onChange={(e) => setSuperpowers(e.target.value)}
                        className="input max-h-32"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <label className="text-white/50">Catch phrase</label>
                        <span className="text-xs opacity-35">
                            {catchPhrase.length}/{MAX_CATCH}
                        </span>
                    </div>
                    <textarea
                        maxLength={MAX_CATCH}
                        value={catchPhrase}
                        onChange={(e) => setCatchPhrase(e.target.value)}
                        className="input max-h-24"
                    />
                </div>

                <div className="flex gap-2 mt-3 h-12">
                    <button
                        onClick={onClose}
                        className="
                            flex items-center justify-center w-1/2 border border-white/20 h-full rounded bg-white/5
                            hover:border-red-400 hover:shadow-red-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 cursor-pointer
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="w-1/2 nebula-btn shadow-blu-s/60 flex items-center justify-center"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroEditModal;
