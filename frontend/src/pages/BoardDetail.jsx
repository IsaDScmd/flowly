import { useParams } from "react-router-dom"
import KanbanColumn from "../components/dashboard/KanbanColumn"

function BoardDetail() {

    const { boardId } = useParams()

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-[#1E1B4B]">
                    {boardId.charAt(0).toUpperCase() + boardId.slice(1)}
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage your tasks across your workflow.
                </p>
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