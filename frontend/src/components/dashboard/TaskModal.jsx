import Button from "../ui/Button"
import FormInput from "../ui/FormInput"

function TaskModal({
    taskTitle,
    setTaskTitle,
    taskPriority,
    setTaskPriority,
    taskType,
    setTaskType,
    taskError,
    setTaskError,
    onSubmit,
    onCancel,
}) {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-[#1E1B4B] mb-6">
                    Create New Task
                </h2>

                {taskError && (
                    <p className="bg-red-100 text-red-500 text-sm p-3 rounded-2xl mb-5">
                        {taskError}
                    </p>
                )}

                <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-5"
                >
                    <FormInput
                        label="Task title"
                        placeholder="Example: Review weekly report"
                        value={taskTitle}
                        onChange={(e) => {
                            setTaskTitle(e.target.value)
                            setTaskError("")
                        }}
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
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskModal