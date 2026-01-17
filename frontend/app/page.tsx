'use client';

import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import { HeroType } from "@/types/heroType";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllHeroes } from "@/api/heroes";
import { useEffect, useState } from "react";

export default function Home() {
    const [heroes, setHeroes] = useState<HeroType[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    const router = useRouter();
    const searchParams = useSearchParams();

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 6;

    const goToPage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", String(newPage));
        params.set("limit", String(limit));

        router.push(`?${params.toString()}`);
    };

    useEffect(() => {
        const fetchHeroes = async () => {
            const res = await getAllHeroes(page, limit);

            setHeroes(res.data.heroes);
            setTotalPages(res.data.totalPages);
        }

        fetchHeroes();
    }, [page, limit]);

    const handleHeroUpdated = (updatedHero: HeroType) => {
        setHeroes(prev => prev
            .map(hero => hero._id === updatedHero._id
                ? updatedHero
                : hero
            )
        );
    }

    return (
        <div className="flex min-h-screen w-full font-grotesk app-bg">
            <div className="w-full flex flex-col max-h-screen items-center">
                <Header title="Records" />

                <main className="relative flex-1 w-full flex flex-col gap-4 main-depth p-4">
                    <div className={`${heroes.length > 0 ? "grid grid-cols-3 grid-rows-2 gap-4 flex-1" : "flex items-center justify-center flex-1"}`}>
                        {heroes.length > 0 ? (
                            heroes.map((hero: HeroType) => (
                                <HeroCard
                                    key={hero._id}
                                    hero={hero}
                                    onUpdated={handleHeroUpdated}
                                />
                            ))
                        ) : (
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-2xl">There's no records yet. Wanna create the first?</span>

                                <button className="nebula-btn flex items-center w-fit justify-center shadow-blu-l">
                                    <img src="/plus.svg" alt="" className="h-5 drop-shadow-wht" />
                                    <span className="text-shadow-wht">Create Record</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="h-10 flex items-center justify-center gap-5">
                        <button
                            disabled={page === 1}
                            onClick={() => goToPage(page - 1)}
                            className={`
                                py-1 border-transparent flex items-center gap-1 transition-all duration-200
                                ${page === 1 ? "opacity-0" : "opacity-50 hover:border-b hover:border-cyn hover:opacity-100 cursor-pointer"}
                            `}
                        >
                            <img src="/prev.svg" alt="" className="h-3" />
                            <span className="italic">Prev</span>
                        </button>

                        <div className="flex items-row gap-3">
                            {Array.from({ length: totalPages }, (_, i) => {
                                const p = i + 1;

                                return (
                                    <button
                                        key={p}
                                        onClick={() => goToPage(p)}
                                        className={`
                                            border border-cyn/75 bg-cyn-drt/25 text-cyn px-3 py-1 rounded-md 
                                            hover:border-cyn hover:bg-cyn-drt/50 transition-all duration-200 cursor-pointer
                                            ${p === page && "border-cyn shadow-cyn-s/50"}    
                                        `}
                                    >
                                        {p}
                                    </button>
                                )
                            })}
                        </div>

                        <button
                            disabled={page === totalPages}
                            onClick={() => goToPage(page + 1)}
                            className={`
                                py-1 border-transparent flex items-center gap-1 transition-all duration-200
                                ${page === totalPages || page === 1 ? "opacity-0" : "opacity-50 hover:border-b hover:border-cyn hover:opacity-100 cursor-pointer"}
                            `}
                        >
                            <span className="italic">Next</span>
                            <img src="/next.svg" alt="" className="h-3" />
                        </button>
                    </div>
                </main>
            </div >
        </div >
    );
}
