import { HeroType } from "@/types/heroType";

const HeroCard = ({ nickname, real_name, origin_description, superpowers, catch_phrase, images }: HeroType) => {
    return (
        <div className="w-full border border-[#273040] rounded-md flex flex-wrap p-5 bg-linear-to-bl from-[#202836] to-[#0d0f17] shadow-wht-xs">
            <div className="relative h-1/2 w-full overflow-hidden rounded">
                {images?.[0] ? (
                    <img
                        src={images[0]}
                        alt={nickname}
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


                {images?.[0] && <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/55 to-black/90" />}
            </div>

            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl">{nickname}</h1>

                    <p className="line-clamp-3 text-white/50">{origin_description}</p>
                </div>

                <div className="flex items-center w-full gap-3">
                    <button className="
                        w-1/2 text-center border border-white/20 h-10 rounded bg-white/5
                        hover:border-blu hover:shadow-blu-s/50 hover:text-blu hover:bg-blu/10 transition-all duration-200 cursor-pointer
                    "
                    >
                        View
                    </button>

                    <button className="
                        text-center gap-1 w-1/2 border border-white/20 h-10 rounded bg-white/5
                        hover:border-blu hover:shadow-blu-s/50 hover:text-blu hover:bg-blu/10 transition-all duration-200 cursor-pointer
                    "
                    >
                        Edit
                    </button>
                </div>
            </div>

        </div>
    );
}

export default HeroCard;