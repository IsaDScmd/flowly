import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import FormInput from "../components/ui/FormInput"
import Button from "../components/ui/Button"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setError("Please fill in all fields")
            return
        }

        setError("")

        localStorage.setItem("flowlyToken", "fake-token")
        navigate("/dashboard")
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#1E1B4B] mb-2">
                Welcome back
            </h2>

            <p className="text-gray-500 mb-8">
                Log in to continue managing your tasks.
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
                    <FormInput
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setError("")
                        }}
                    />
                </div>

                <div>
                    <FormInput
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setError("")
                        }}
                    />
                </div>

                <Button type="submit">
                    Log in
                </Button>

                <p className="text-sm text-gray-500 text-center">
                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="text-[#6C5CE7] font-semibold hover:underline"
                    >
                        Sing up
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login