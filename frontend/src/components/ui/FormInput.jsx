function FormInput({ label, type = "text", placeholder, value, onChange }) {
    return (
        <div>
            <label className="block text-sm font-semibold text-[#1E1B4B] mb-2">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#6C5CE7]"
            />
        </div>
    )
}

export default FormInput