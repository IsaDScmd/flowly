import StatCard from "../components/StatCard"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import TaskCard from "../components/dashboard/TaskCard"
import { ClipboardList, Clock3, CheckCircle2 } from "lucide-react"

function Dashboard() {
    return (
        <div>

            <DashboardHeader />

            {/* Stat cards */}
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

            {/* Recent Tasks */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-[#1E1B4B] mb-6">
                    Recent Tasks
                </h2>

                <div className="grid grid-cols-3 gap-6">
                    <TaskCard
                        title="Design Flowly dashboard"
                        priority="High"
                        dueDate="Today"
                    />

                    <TaskCard
                        title="Create reusable components"
                        priority="Medium"
                        dueDate="Tomorrow"
                    />

                    <TaskCard
                        title="Prepare project README"
                        priority="Low"
                        dueDate="Friday"
                    />
                </div>
            </div>

        </div>
    )
}

export default Dashboard