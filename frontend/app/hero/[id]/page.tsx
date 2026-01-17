'use client';

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { use } from "react";
import { deleteHero, getOneHero, uploadNewPhoto } from "@/api/heroes";
import { HeroType } from "@/types/heroType";
import { getImageUrl } from "@/utils/media";
import { useRouter } from "next/navigation";

const HeroPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const router = useRouter();

    const { id } = use(params);
    const [hero, setHero] = useState<HeroType | null>(null);

    const [newImage, setNewImage] = useState<File | null>(null);

    useEffect(() => {
        const fetchHero = async () => {
            const res = await getOneHero(id);
            setHero(res.data);
        };

        fetchHero();
    }, [id]);

    const addNewPhoto = async () => {
        const formData = new FormData();

        if (!newImage)
            return;

        formData.append("images", newImage);

        await uploadNewPhoto(id, formData);

        const res = await getOneHero(id);
        setHero(res.data);

        setNewImage(null);
    }

    const handleDelete = async () => {
        await deleteHero(id);

        alert(`${hero?.nickname} deleted!`);
        router.push("/");
    }

    return (
        <div className="flex min-h-screen w-full font-grotesk app-bg">
            <div className="w-full flex flex-col flex-1 items-center">
                <Header title={hero?.nickname ?? "Loading..."} heroDelete={handleDelete} />

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
                        <div className="flex items-center gap-3">
                            <span className="opacity-50 font-orbit text-4xl">All photos</span>

                            <span>|</span>

                            <span>Add new image</span>

                            <input
                                id="hero-image-upload"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0] || null;
                                    setNewImage(file);
                                }}
                                className="hidden"
                            />

                            <label
                                htmlFor="hero-image-upload"
                                className="
                                    flex items-center text-center w-fit gap-1 px-2 border border-white/20 h-10 rounded bg-white/5
                                    hover:border-blu hover:shadow-blu-s/50 hover:text-blu hover:bg-blu/10 transition-all duration-200 cursor-pointer
                                "
                            >
                                <img src={newImage ? "/done.svg" : "/upload.svg"} className="h-4 opacity-70" />
                                {newImage ? "Done" : "Upload"}
                            </label>

                            <button
                                disabled={!newImage}
                                onClick={addNewPhoto}
                                className={`
                                    text-center w-fit gap-1 px-2 border border-white/20 h-10 rounded bg-white/5 transition-all duration-200
                                    ${newImage ? "border-blu shadow-blu-s/50 text-blu hover:bg-blu/10 cursor-pointer" : "cursor-not-allowed"}
                                `}
                            >
                                Add new photo
                            </button>
                        </div>

                        <hr className="opacity-20" />

                        <div className="columns-4 gap-4 space-y-4 mt-1">
                            {hero?.images?.slice(1).map((img, i) => (
                                <img
                                    key={i}
                                    src={getImageUrl(img)}
                                    alt="Image error"
                                    className="w-full rounded-md border border-white/15 break-inside-avoid hover:shadow-blu-s/50 hover:scale-101 transition-all duration-200"
                                />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div >
    );
}

export default HeroPage;