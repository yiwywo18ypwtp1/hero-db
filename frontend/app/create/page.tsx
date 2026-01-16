'use client';

import Header from "@/components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createHero } from "@/api/heroes"

const NewRecord = () => {
    const router = useRouter();

    const [nickname, setNickname] = useState<string>("");

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const [description, setDescription] = useState<string>("");
    const MAX_DESC_LENGHT = 650;

    const [superpowers, setSuperpowers] = useState<string>("");
    const MAX_SUPER_LENGHT = 200;

    const [catchPhrase, setCatchPhase] = useState<string>("");
    const MAX_CATCH_LENGHT = 100;

    const [images, setImages] = useState<File[]>([]);

    const handleCreate = async () => {
        if (!nickname || !description || !superpowers) {
            alert("Fill required fields");
            return;
        }

        const formData = new FormData();

        formData.append("nickname", nickname);
        formData.append("real_name", `${firstName} ${lastName}`.trim());
        formData.append("origin_description", description);
        formData.append("superpowers", superpowers);
        formData.append("catch_phrase", catchPhrase);

        images.forEach((file) => {
            formData.append("images", file);
        });

        await createHero(formData);

        // await axios.post("http://localhost:5001/heroes", formData, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        // });

        router.push("/");
    };

    return (
        <div className="flex min-h-screen w-full font-grotesk app-bg">
            <div className="w-full flex flex-col flex-1 items-center">
                <Header title="New Record" />

                <main className="relative flex-1 w-full overflow-y-auto main-depth flex items-center justify-center">
                    <div className="border w-1/4 slate-block">
                        <div className="flex flex-col gap-1">
                            <label className="text-white/50">Nickname</label>
                            <input onChange={(e) => setNickname(e.target.value)} type="text" className="input" />
                        </div>

                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-white/50">First name</label>
                                <input onChange={(e) => setFirstName(e.target.value)} type="text" className="input w-full" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1">
                                    <label className="text-white/50">Last name</label>
                                    <span className="opacity-25 text-xs">optional</span>
                                </div>

                                <input onChange={(e) => setLastName(e.target.value)} type="text" className="input w-full" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                                <label className="text-white/50">Origin description</label>
                                <span className="opacity-35 text-xs">{description.length}/{MAX_DESC_LENGHT}</span>
                            </div>

                            <textarea
                                maxLength={MAX_DESC_LENGHT}
                                onChange={(e) => setDescription(e.target.value)}
                                className={`${description.length >= MAX_DESC_LENGHT ? "input input-err" : "input"} w-full max-h-40`}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                                <label className="text-white/50">Superpowers</label>
                                <span className="opacity-35 text-xs">{superpowers.length}/{MAX_SUPER_LENGHT}</span>
                            </div>

                            <textarea
                                maxLength={MAX_SUPER_LENGHT}
                                onChange={(e) => setSuperpowers(e.target.value)}
                                className={`${superpowers.length >= MAX_SUPER_LENGHT ? "input input-err" : "input"} w-full max-h-40`}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1">
                                <label className="text-white/50">Catch phrase</label>
                                <span className="opacity-35 text-xs">{catchPhrase.length}/{MAX_CATCH_LENGHT}</span>
                            </div>

                            <textarea
                                maxLength={MAX_CATCH_LENGHT}
                                onChange={(e) => setCatchPhase(e.target.value)}
                                className={`${catchPhrase.length >= MAX_CATCH_LENGHT ? "input input-err" : "input"} w-full max-h-40`}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-white/50">Images</label>

                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={(e) => {
                                    if (!e.target.files) return;
                                    setImages(Array.from(e.target.files));
                                }}
                                className="input border-dashed! hover:border-solid! cursor-pointer transition=all"
                            />
                        </div>

                        <button
                            onClick={handleCreate}
                            className="nebula-btn flex items-center justify-center shadow-blu-s/50 mt-2"
                        >
                            <span className="text-shadow-wht">Create</span>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default NewRecord;