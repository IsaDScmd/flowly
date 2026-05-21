function StatCard({
    title,
    value,
    color = "text-[#1E1B4B]",
    icon,
}) {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition">

            <div className="w-14 h-14 rounded-2xl bg-[#F3F0FF] flex items-center justify-center mb-6">
                {icon}
            </div>

            <h3 className="text-gray-500 mb-2">
                {title}
            </h3>

            <p className={`text-4xl font-bold ${color}`}>
                {value}
            </p>

        </div>
    )
}

export default StatCard