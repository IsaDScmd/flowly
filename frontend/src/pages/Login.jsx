import { useState } from "react"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#1E1B4B] mb-2">
                Welcome back
            </h2>

            <p className="text-gray-500 mb-8">
                Log in to continue managing your tasks.
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
            >
                <div>
                    <label className="block text-sm font-semibold text-[#1E1B4B] mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#6C5CE7]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-[#1E1B4B] mb-2">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#6C5CE7]"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#6C5CE7] text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition"
                >
                    Log in
                </button>
            </form>
        </div>
    )
}

export default Login