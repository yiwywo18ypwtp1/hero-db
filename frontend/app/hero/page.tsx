import Header from "@/components/Header";

const HeroPage = () => {
    return (
        <div className="flex min-h-screen w-full font-grotesk app-bg">
            <div className="w-full flex flex-col flex-1 items-center">
                <Header />

                <main className="relative flex-1 w-full overflow-y-auto main-depth">

                </main>
            </div>
        </div>
    );
}

export default HeroPage;