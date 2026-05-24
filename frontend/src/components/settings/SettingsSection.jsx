function SettingsSection({ title, children }) {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h2 className="text-xl font-bold text-[#1E1B4B] mb-4">
                {title}
            </h2>

            {children}
        </div>
    )
}

export default SettingsSection