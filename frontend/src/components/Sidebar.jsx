import logo from "../assets/logo/flowly-logo.png"
import { NavLink, useNavigate } from "react-router-dom"
import { LayoutDashboard, Columns3, Settings, LogOut } from "lucide-react"

function Sidebar() {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("flowlyToken")
        navigate("/login")
    }

    return (
        <aside className="w-64 bg-gradient-to-b from-[#6C5CE7] to-[#8B5CF6] rounded-r-3xl p-4 flex flex-col items-center">
            <div className="mt-4 flex items-center justify-center">
                <img
                    src={logo}
                    alt="Flowly logo"
                    className="w-42 h-42 object-contain"
                />
            </div>

            <nav className="mt-8 flex flex-col gap-4 w-full px-3">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-2xl transition duration-300 ${isActive
                            ? "bg-white/25 text-white shadow-lg"
                            : "text-white/70 hover:bg-white/15 hover:text-white"
                        }`
                    }
                >
                    <LayoutDashboard size={22} />
                    <span className="text-sm font-semibold">Dashboard</span>
                </NavLink>

                <NavLink
                    to="/boards"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-2xl transition duration-300 ${isActive
                            ? "bg-white/25 text-white shadow-lg"
                            : "text-white/70 hover:bg-white/15 hover:text-white"
                        }`
                    }
                >
                    <Columns3 size={22} />
                    <span className="text-sm font-semibold">Boards</span>
                </NavLink>

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-2xl transition duration-300 ${isActive
                            ? "bg-white/25 text-white shadow-lg"
                            : "text-white/70 hover:bg-white/15 hover:text-white"
                        }`
                    }
                >
                    <Settings size={22} />
                    <span className="text-sm font-semibold">Settings</span>
                </NavLink>
            </nav>

            <button
                onClick={handleLogout}
                className="
    mt-auto mb-6
    flex items-center gap-3
    px-4 py-3 rounded-2xl
    bg-white/10 hover:bg-white/20
    text-white/70 hover:text-white
    transition duration-300
    border border-white/10
    backdrop-blur-sm
  "
            >
                <LogOut size={20} />

                <span className="text-sm font-semibold">
                    Logout
                </span>
            </button>

        </aside>
    )
}

export default Sidebar