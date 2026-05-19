import logo from "../assets/logo/flowly-logo.png"

function Sidebar() {
    return (
        <aside className="w-24 bg-gradient-to-b from-[#6C5CE7] to-[#8B5CF6] rounded-r-3xl p-4 flex flex-col items-center">
            <div className="mt-4 flex items-center justify-center">
                <img
                    src={logo}
                    alt="Flowly logo"
                    className="w-36 h-36 object-contain"
                />
            </div>

            <nav className="mt-12 flex flex-col gap-6 text-white/70">
                <button className="w-12 h-12 rounded-2xl bg-white/20 text-white">🏠</button>
                <button className="w-12 h-12 rounded-2xl hover:bg-white/20">📋</button>
                <button className="w-12 h-12 rounded-2xl hover:bg-white/20">📅</button>
                <button className="w-12 h-12 rounded-2xl hover:bg-white/20">⚙️</button>
            </nav>
        </aside>
    )
}

export default Sidebar