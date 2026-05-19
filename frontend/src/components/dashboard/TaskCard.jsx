function TaskCard({ title, priority, dueDate }) {
    return (
        <div className="bg-white p-5 rounded-3xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
                <span className={`
    text-xs font-semibold px-3 py-1 rounded-full
    ${priority === "High"
                        ? "bg-red-100 text-red-500"
                        : priority === "Medium"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                    }
  `}
                >
                    {priority}
                </span>

                <span className="text-sm text-gray-400">
                    {dueDate}
                </span>
            </div>

            <h3 className="text-lg font-bold text-[#1E1B4B]">
                {title}
            </h3>
        </div>
    )
}

export default TaskCard