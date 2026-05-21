import StatCard from "../components/StatCard"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import TaskCard from "../components/dashboard/TaskCard"
import KanbanColumn from "../components/dashboard/KanbanColumn"
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

            {/* Kanban Board */}
            <div className="mt-12">

                <h2 className="text-2xl font-bold text-[#1E1B4B] mb-6">
                    Board Preview
                </h2>

                <div className="grid grid-cols-3 gap-6">

                    <KanbanColumn
                        title="To Do"
                        accentColor="bg-blue-400"
                        tasks={[
                            {
                                title: "Revisar incidencias IQD",
                                priority: "High",
                                dueDate: "Today",
                                type: "recurring",
                            },
                            {
                                title: "LPA audit",
                                priority: "Medium",
                                dueDate: "Tomorrow",
                                type: "period",
                            },
                        ]}
                    />

                    <KanbanColumn
                        title="In Progress"
                        accentColor="bg-yellow-400"
                        tasks={[
                            {
                                title: "Hacer teardown IP Basis",
                                priority: "High",
                                dueDate: "Today",
                                type: "single",
                            },
                        ]}
                    />

                    <KanbanColumn
                        title="Done"
                        accentColor="bg-green-400"
                        tasks={[
                            {
                                title: "Entregar 4 FSV Audi",
                                priority: "Low",
                                dueDate: "Yesterday",
                                type: "recurring",
                            },
                        ]}
                    />

                </div>

            </div>

        </div>
    )
}

export default Dashboard