'use client';

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { use } from "react";
import { getOneHero } from "@/api/heroes";
import { HeroType } from "@/types/heroType";
import { getImageUrl } from "@/utils/media";

const HeroPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const [hero, setHero] = useState<HeroType | null>(null);

    useEffect(() => {
        const fetchHero = async () => {
            const res = await getOneHero(id);
            setHero(res.data);
        };

        fetchHero();
    }, [id]);

    return (
        <div className="flex min-h-screen w-full font-grotesk app-bg">
            <div className="w-full flex flex-col flex-1 items-center">
                <Header title={hero?.nickname ?? "Loading..."} />

                <main className="relative flex-1 w-full overflow-y-auto main-depth p-4">
                    <div className="flex gap-8">
                        <div className="flex flex-col gap-3 w-full">
                            <h1 className="opacity-50 font-orbit text-4xl">Origin description</h1>

                            <p className="text-shadow-wht">{hero?.origin_description}</p>
                        </div>

                        <div className="flex flex-col gap-3 w-100 max-100">
                            <div className="min-h-120 w-100 max-w-100">
                                {hero?.images?.[0] ? (
                                    <img
                                        src={getImageUrl(hero?.images?.[0])} alt="Image error" className="rounded-md border border-blu shadow-blu-s/85 min-h-full"
                                    />
                                ) : (
                                    <div
                                        className="h-full w-full flex flex-col items-center justify-center gap-2 rounded border-2 border-dashed border-white/50"
                                    >
                                        <img src="/no-photo.svg" alt="" className="h-12 opacity-35" />
                                        <span className="font-semibold opacity-35">No image uploaded</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-2 *:flex *:items-start *:gap-2">
                                <div className="">
                                    <span className="opacity-50 font-orbit text-2xl">NICKNAME:</span>
                                    <h1 className="text-shadow-wht">{hero?.nickname}</h1>
                                </div>

                                <div>
                                    <span className="opacity-50 font-orbit text-2xl">Real name:</span>
                                    <h1 className="text-shadow-wht">{hero?.real_name}</h1>
                                </div>

                                <div>
                                    <span className="opacity-50 font-orbit text-2xl">Superpowers:</span>
                                    <h1 className="text-shadow-wht">{hero?.superpowers}</h1>
                                </div>

                                <div>
                                    <span className="opacity-50 font-orbit text-2xl">Catch phrase:</span>
                                    <h1 className="text-shadow-wht">{hero?.catch_phrase}</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="flex flex-col w-full gap-3">
                        <span className="opacity-50 font-orbit text-4xl">All photos</span>

                        <hr className="opacity-20" />

                        {hero?.images?.slice(1).map((img) => (
                            <div className="w-auto max-w-100">
                                <img
                                    src={getImageUrl(img)} alt="Image error" className="rounded-md border border-blu min-h-full"
                                />
                            </div>
                        ))}
                    </section>
                </main>
            </div>
        </div >
    );
}

export default HeroPage;