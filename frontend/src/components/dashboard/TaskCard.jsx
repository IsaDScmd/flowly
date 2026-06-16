function TaskCard({
    title,
    priority,
    dueDate,
    type = "single",
    onDelete,
}) {

    const taskTypeStyles = {
        single: "bg-gray-100 text-gray-500",
        recurring: "bg-purple-100 text-purple-600",
        period: "bg-blue-100 text-blue-600",
    }

    const taskTypeLabels = {
        single: "One-time",
        recurring: "Recurring",
        period: "Period",
    }

    const priorityBorder = {
        High: "border-l-red-400",
        Medium: "border-l-yellow-400",
        Low: "border-l-green-400",
    }

    return (
        <div
            className={`
    bg-white p-5 rounded-3xl shadow-sm
    hover:shadow-lg hover:-translate-y-1
    transition duration-300
    border-l-4
    ${priorityBorder[priority]}
  `}
        >

            <div className="flex items-center justify-between mb-4">

                <span
                    className={`
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

                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">
                        {dueDate}
                    </span>

                    <button
                        onClick={onDelete}
                        className="text-gray-300 hover:text-red-400 transition"
                    >
                        ✕
                    </button>
                </div>

            </div>

            <h3 className="text-lg font-bold text-[#1E1B4B] mb-4">
                {title}
            </h3>

            <span
                className={`
      text-xs font-semibold px-3 py-1 rounded-full
      ${taskTypeStyles[type]}
    `}
            >
                {taskTypeLabels[type]}
            </span>

        </div>
    )
}

export default TaskCard