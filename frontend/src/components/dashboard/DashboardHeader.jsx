function DashboardHeader() {
    return (
        <div className="flex items-center justify-between mb-8">

            <div>
                <h1 className="text-4xl font-bold text-[#1E1B4B]">
                    Flowly
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage your tasks and workflow
                </p>
            </div>

            <button className="bg-[#6C5CE7] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                + New Task
            </button>

        </div>
    )
}

export default DashboardHeader