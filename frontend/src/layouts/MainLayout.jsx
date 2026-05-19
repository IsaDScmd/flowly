import Sidebar from "../components/Sidebar"
import Dashboard from "../pages/Dashboard"

function MainLayout() {
    return (
        <div className="min-h-screen bg-[#F5F7FB] flex">
            <Sidebar />

            <main className="flex-1 p-8">
                <Dashboard />
            </main>
        </div>
    )
}

export default MainLayout