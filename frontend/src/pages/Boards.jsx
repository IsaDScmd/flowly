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
                    title="Work Tasks"
                    description="Daily work organization and priorities."
                    to="/boards/work"
                />

                <BoardCard
                    title="Quality Follow-up"
                    description="Track audits, incidents and recurring actions."
                    to="/boards/quality"
                />

                <BoardCard
                    title="+ New Board"
                    description="Create a new workspace."
                    variant="primary"
                />
            </div>
        </div>
    )
}

export default Boards