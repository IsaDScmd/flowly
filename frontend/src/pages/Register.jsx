import { useState } from "react"
import { Link } from "react-router-dom"

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError("Please fill in all fields")
            return
        }

        setError("")

        console.log("name", name)
        console.log("Email:", email)
        console.log("Password:", password)
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#1E1B4B] mb-2">
                Create account
            </h2>

            <p className="text-gray-500 mb-8">
                Start organizing your workflow with Flowly.
            </p>

            {error && (
                <p className="bg-red-100 text-red-500 text-sm p-3 rounded-2xl mb-5">
                    {error}
                </p>
            )}

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
            >
                <div>
                    <label className="block text-sm font-semibold text-[#1E1B4B] mb-2">
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            setError("")
                        }}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#6C5CE7]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-[#1E1B4B] mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setError("")
                        }}
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
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setError("")
                        }}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#6C5CE7]"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#6C5CE7] text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition"
                >
                    Create account
                </button>

                <p className="text-sm text-gray-500 text-center">
                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="text-[#6C5CE7] font-semibold hover:underline"
                    >
                        Log in
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register