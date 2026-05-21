function BoardCard({ title, description, variant = "default" }) {
    const isPrimary = variant === "primary"

    return (
        <div
            className={`
        p-6 rounded-3xl shadow-sm hover:shadow-md
        hover:-translate-y-1 transition duration-300 cursor-pointer
        ${isPrimary
                    ? "bg-[#6C5CE7] text-white"
                    : "bg-white text-[#1E1B4B]"
                }
      `}
        >
            <h2 className="text-xl font-bold">
                {title}
            </h2>

            <p className={`mt-2 ${isPrimary ? "text-white/70" : "text-gray-500"}`}>
                {description}
            </p>
        </div>
    )
}

export default BoardCard