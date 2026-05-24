import BoardCard from "../components/dashboard/BoardCard"

function Boards() {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-[#1E1B4B]">
                    Boards
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage your workspaces and task boards
                </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <BoardCard
                    title="Work"
                    description="Manage your professional workflow and priorities."
                    to="/boards/work"
                />

                <BoardCard
                    title="Personal"
                    description="Track personal goals and daily life tasks."
                    to="/boards/personal"
                />

                <BoardCard
                    title="Projects"
                    description="Organize side projects and long-term initiatives."
                    to="/boards/projects"
                />
            </div>
        </div>
    )
}

export default Boards