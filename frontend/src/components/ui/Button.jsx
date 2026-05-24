function Button({
    children,
    type = "button",
    onClick,
    variant = "primary",
    fullWidth = true,
}) {

    const variants = {
        primary:
            "bg-[#6C5CE7] text-white hover:opacity-90",

        secondary:
            "bg-gray-100 text-[#1E1B4B] hover:bg-gray-200",
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
        ${fullWidth ? "w-full" : ""}
px-5 py-3 rounded-2xl
        font-semibold transition
        ${variants[variant]}
      `}
        >
            {children}
        </button>
    )
}

export default Button