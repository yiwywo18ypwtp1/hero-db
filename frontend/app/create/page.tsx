import Header from "@/components/Header";

const NewRecord = () => {
    return (
        <div className="flex min-h-screen w-full font-grotesk app-bg">
            <div className="w-full flex flex-col flex-1 items-center">
                <Header title="New Record" />

                <main className="relative flex-1 w-full overflow-y-auto main-depth">

                </main>
            </div>
        </div>
    );
}

export default NewRecord;