import { getOneHero } from "@/api/heroes";
import Header from "@/components/Header";
import { HeroType } from "@/types/heroType";

const HeroPage = async ({ params }: { params: { id: string } }) => {
    const res = await getOneHero(params.id);
    const hero: HeroType = res.data;

    return (
        <div className="flex min-h-screen w-full font-grotesk app-bg">
            <div className="w-full flex flex-col flex-1 items-center">
                <Header title={hero.nickname ?? "Loading..."} />

                <main className="relative flex-1 w-full overflow-y-auto main-depth">

                </main>
            </div>
        </div>
    );
}

export default HeroPage;