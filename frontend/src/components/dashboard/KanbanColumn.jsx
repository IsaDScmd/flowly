import TaskCard from "./TaskCard"

function KanbanColumn({
    title,
    tasks,
    accentColor = "bg-[#6C5CE7]",
    onDelete,
}) {
    return (
        <div className="bg-white/70 border border-white p-5 rounded-3xl min-h-[500px] shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${accentColor}`}></span>

                    <h2 className="text-lg font-bold text-[#1E1B4B]">
                        {title}
                    </h2>
                </div>

                <span className="bg-[#F3F0FF] text-[#6C5CE7] text-sm font-semibold px-3 py-1 rounded-full">
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
                        type={task.type}
                        onDelete={() => onDelete(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default KanbanColumn