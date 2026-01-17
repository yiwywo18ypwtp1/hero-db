const Header = ({ title, heroDelete }: { title?: string, heroDelete?: () => void }) => {
    return <header className="w-full min-h-24 flex items-center justify-between px-4 border-b border-white/5">
        <div className="flex gap-3 items-center">
            <h1 className="text-4xl text-shadow-wht">{title}</h1>

            {heroDelete && (
                <>
                    <span>|</span>

                    <button
                        onClick={heroDelete}
                        className="
                    flex items-center justify-center gap-1 w-8 h-8 border border-white/20 rounded bg-white/5
                    hover:border-blu hover:shadow-blu-s/50 hover:text-blu hover:bg-blu/10 transition-all duration-200 cursor-pointer
                "
                    >
                        <img src="/trash.svg" alt="" className="h-4" />
                    </button>
                </>

            )}
        </div>

        <button className="nebula-btn flex items-center justify-center shadow-blu-l">
            <img src="/plus.svg" alt="" className="h-5 drop-shadow-wht" />
            <span className="text-shadow-wht">Create Record</span>
        </button>
    </header>
}

export default Header;