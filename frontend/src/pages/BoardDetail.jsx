import { useParams } from "react-router-dom"
import KanbanColumn from "../components/dashboard/KanbanColumn"
import Button from "../components/ui/Button"
import TaskModal from "../components/dashboard/TaskModal"
import { Briefcase, User, FolderKanban, Plus } from "lucide-react"
import { useState } from "react"


function BoardDetail() {

    const { boardId } = useParams()
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
    const [taskTitle, setTaskTitle] = useState("")
    const [taskPriority, setTaskPriority] = useState("Medium")
    const [taskType, setTaskType] = useState("single")
    const [taskError, setTaskError] = useState("")
    const [tasks, setTasks] = useState([
        {
            title: "Review daily incidents",
            priority: "High",
            dueDate: "Today",
            type: "recurring",
        },
    ])

    const resetTaskForm = () => {
        setTaskTitle("")
        setTaskPriority("Medium")
        setTaskType("single")
        setTaskError("")
    }

    const handleCreateTask = (e) => {
        e.preventDefault()

        if (!taskTitle.trim()) {
            setTaskError("Task title is required")
            return
        }

        const newTask = {
            title: taskTitle,
            priority: taskPriority,
            dueDate: "Today",
            type: taskType,
        }

        setTasks([...tasks, newTask])

        resetTaskForm()
        setIsTaskModalOpen(false)
    }

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
                    tasks={tasks}
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
                <TaskModal
                    taskTitle={taskTitle}
                    setTaskTitle={setTaskTitle}
                    taskPriority={taskPriority}
                    setTaskPriority={setTaskPriority}
                    taskType={taskType}
                    setTaskType={setTaskType}
                    taskError={taskError}
                    setTaskError={setTaskError}
                    onSubmit={handleCreateTask}
                    onCancel={() => {
                        resetTaskForm()
                        setIsTaskModalOpen(false)
                    }}
                />
            )}

        </div>
    )
}


export default BoardDetail