import { useParams } from "react-router-dom"
import KanbanColumn from "../components/dashboard/KanbanColumn"
import Button from "../components/ui/Button"
import FormInput from "../components/ui/FormInput"
import { Briefcase, User, FolderKanban, Plus } from "lucide-react"
import { useState } from "react"

function BoardDetail() {

    const { boardId } = useParams()
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
    const [taskTitle, setTaskTitle] = useState("")
    const [taskPriority, setTaskPriority] = useState("Medium")
    const [taskType, setTaskType] = useState("single")
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

                <Button
                    fullWidth={false}
                    onClick={() => setIsTaskModalOpen(true)}
                >
                    <div className="flex items-center gap-2 px-2">
                        <Plus size={20} />

                        New Task
                    </div>
                </Button>

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

            {isTaskModalOpen && (
                <div
                    className="
      fixed inset-0
      bg-black/40
      flex items-center justify-center
      z-50
    "
                >

                    <div
                        className="
        bg-white
        w-full max-w-md
        rounded-3xl
        p-8
        shadow-xl
      "
                    >

                        <h2 className="text-2xl font-bold text-[#1E1B4B] mb-6">
                            Create New Task
                        </h2>

                        <form className="flex flex-col gap-5">
                            <FormInput
                                label="Task title"
                                placeholder="Example: Review weekly report"
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />

                            <div>
                                <label className="block text-sm font-semibold text-[#1E1B4B] mb-2">
                                    Priority
                                </label>

                                <select
                                    value={taskPriority}
                                    onChange={(e) => setTaskPriority(e.target.value)}
                                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#6C5CE7]"
                                >
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#1E1B4B] mb-2">
                                    Task type
                                </label>

                                <select
                                    value={taskType}
                                    onChange={(e) => setTaskType(e.target.value)}
                                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#6C5CE7]"
                                >
                                    <option value="single">One-time</option>
                                    <option value="recurring">Recurring</option>
                                    <option value="period">Period</option>
                                </select>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <Button type="submit">
                                    Create Task
                                </Button>

                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={() => setIsTaskModalOpen(false)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>

                    </div>

                </div>
            )}
        </div>
    )
}

export default BoardDetail