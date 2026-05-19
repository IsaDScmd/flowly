import StatCard from "../components/StatCard"
import { ClipboardList, Clock3, CheckCircle2 } from "lucide-react"

function Dashboard() {
    return (
        <div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">

                <div>
                    <h1 className="text-4xl font-bold text-[#1E1B4B]">
                        Flowly
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage your tasks and workflow
                    </p>
                </div>

                <button className="bg-[#6C5CE7] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                    + New Task
                </button>

            </div>

            <div className="grid grid-cols-3 gap-6">

                <StatCard
                    title="Total Tasks"
                    value="24"
                    icon={
                        <ClipboardList className="text-[#6C5CE7]" />
                    }
                />

                <StatCard
                    title="In Progress"
                    value="8"
                    color="text-[#6C5CE7]"
                    icon={
                        <Clock3 className="text-[#6C5CE7]" />
                    }
                />

                <StatCard
                    title="Completed"
                    value="16"
                    color="text-green-500"
                    icon={
                        <CheckCircle2 className="text-green-500" />
                    }
                />

            </div>

        </div>
    )
}

export default Dashboard