import { useState } from "react";
import { HeroType } from "@/types/heroType";
import { getImageUrl } from "@/utils/media";
import { useRouter } from "next/navigation";
import HeroEditModal from "./HeroEditModal";

type Props = {
    hero: HeroType;
    onUpdated: (hero: HeroType) => void;
}

const HeroCard = ({ hero, onUpdated }: Props) => {
    const router = useRouter();

    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div className="w-full slate-block shadow-wht-xs flex flex-col justify-between">
            <div className="relative max-h-1/2 min-h-1/2 w-full overflow-hidden rounded">
                {hero.images?.[0] ? (
                    <img
                        src={getImageUrl(hero.images?.[0])}
                        alt={hero.nickname}
                        className="h-full w-full object-cover object-[50%_25%] rounded"
                    />
                ) : (
                    <div
                        className="h-full w-full flex flex-col items-center justify-center gap-2 rounded border-2 border-dashed border-white/50"
                    >
                        <img src="/no-photo.svg" alt="" className="h-12 opacity-35" />
                        <span className="font-semibold opacity-35">No image uploaded</span>
                    </div>
                )}

                {hero.images?.[0] && <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/55 to-black/90" />}
            </div>

            <div className="flex flex-col justify-between gap-3 h-full">
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl">{hero.nickname}</h1>

                    <p className="line-clamp-3 text-white/50">{hero.origin_description}</p>
                </div>

                <div className="flex items-center w-full gap-3">
                    <button
                        onClick={() => router.push(`/hero/${hero._id}`)}
                        className="
                            w-1/2 text-center border border-white/20 h-10 rounded bg-white/5
                            hover:border-blu hover:shadow-blu-s/50 hover:text-blu hover:bg-blu/10 transition-all duration-200 cursor-pointer
                        "
                    >
                        View
                    </button>

                    <button
                        onClick={() => setIsEditOpen(true)}
                        className="
                            text-center gap-1 w-1/2 border border-white/20 h-10 rounded bg-white/5
                            hover:border-blu hover:shadow-blu-s/50 hover:text-blu hover:bg-blu/10 transition-all duration-200 cursor-pointer
                        "
                    >
                        Edit
                    </button>
                </div>
            </div>

            <HeroEditModal
                isOpen={isEditOpen}
                hero={hero}
                onClose={() => setIsEditOpen(false)}
                onUpdated={(updatedHero) => {
                    onUpdated(updatedHero);
                    setIsEditOpen(false);
                }}
            />
        </div>
    );
}

export default HeroCard;