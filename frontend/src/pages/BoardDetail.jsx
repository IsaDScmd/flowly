import { useParams } from "react-router-dom"
import KanbanColumn from "../components/dashboard/KanbanColumn"
import { Briefcase, User, FolderKanban, Plus } from "lucide-react"

function BoardDetail() {

    const { boardId } = useParams()
    const boards = {
        work: {
            title: "Work",
            icon: <Briefcase size={28} />,
            color: "bg-blue-500",
        },

        personal: {
            title: "Personal",
            icon: <User size={28} />,
            color: "bg-pink-500",
        },

        projects: {
            title: "Projects",
            icon: <FolderKanban size={28} />,
            color: "bg-purple-500",
        },
    }

    const currentBoard = boards[boardId]

    return (
        <div>
            <div className="flex items-center justify-between mb-10">

                <div className="flex items-center gap-4">

                    <div
                        className={`
        w-14 h-14 rounded-2xl
        flex items-center justify-center
        text-white
        ${currentBoard.color}
      `}
                    >
                        {currentBoard.icon}
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold text-[#1E1B4B]">
                            {currentBoard.title}
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Manage your tasks and workflow.
                        </p>
                    </div>

                </div>

                <button
                    className="
      flex items-center gap-2
      bg-[#6C5CE7]
      text-white
      px-5 py-3
      rounded-2xl
      font-semibold
      hover:opacity-90
      transition
    "
                >
                    <Plus size={20} />

                    New Task
                </button>

            </div>

            <div className="grid grid-cols-3 gap-6">
                <KanbanColumn
                    title="To Do"
                    accentColor="bg-blue-400"
                    tasks={[
                        {
                            title: "Review daily incidents",
                            priority: "High",
                            dueDate: "Today",
                            type: "recurring",
                        },
                    ]}
                />

                <KanbanColumn
                    title="In Progress"
                    accentColor="bg-yellow-400"
                    tasks={[
                        {
                            title: "Prepare quality audit",
                            priority: "Medium",
                            dueDate: "Tomorrow",
                            type: "period",
                        },
                    ]}
                />

                <KanbanColumn
                    title="Done"
                    accentColor="bg-green-400"
                    tasks={[
                        {
                            title: "Update Flowly README",
                            priority: "Low",
                            dueDate: "Yesterday",
                            type: "single",
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default BoardDetail