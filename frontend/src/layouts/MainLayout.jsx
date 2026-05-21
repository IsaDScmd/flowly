import { Outlet } from "react-router-dom"

import Sidebar from "../components/Sidebar"

function MainLayout() {
    return (
        <div className="min-h-screen bg-[#F5F7FB] flex">
            <Sidebar />

            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout