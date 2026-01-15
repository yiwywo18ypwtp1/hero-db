const Header = ({ title }: { title?: string }) => {
    return <header className="w-full min-h-24 flex items-center justify-between px-4 border-b border-white/5">
        <h1 className="text-4xl text-shadow-wht">{title}</h1>

        <button className="nebula-btn flex items-center justify-center shadow-blu-l">
            <img src="/plus.svg" alt="" className="h-5 drop-shadow-wht" />
            <span className="text-shadow-wht">Create Record</span>
        </button>
    </header>
}

export default Header;