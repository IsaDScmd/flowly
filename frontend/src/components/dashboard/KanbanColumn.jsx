import TaskCard from "./TaskCard"

function KanbanColumn({ title, tasks }) {
    return (
        <div className="bg-[#EEF2FF] p-4 rounded-3xl min-h-[500px]">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-lg font-bold text-[#1E1B4B]">
                    {title}
                </h2>

                <span className="bg-white text-gray-500 text-sm px-3 py-1 rounded-full">
                    {tasks.length}
                </span>

            </div>

            <div className="flex flex-col gap-4">

                {tasks.map((task, index) => (
                    <TaskCard
                        key={index}
                        title={task.title}
                        priority={task.priority}
                        dueDate={task.dueDate}
                    />
                ))}

            </div>

        </div>
    )
}

export default KanbanColumn