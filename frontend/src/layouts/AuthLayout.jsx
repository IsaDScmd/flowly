import { Outlet } from "react-router-dom"

function AuthLayout() {
    return (
        <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center p-6">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">

                <div className="mb-8 text-center">

                    <h1 className="text-4xl font-bold text-[#1E1B4B]">
                        Flowly
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Your tasks. In flow.
                    </p>

                </div>

                <Outlet />

            </div>

        </div>
    )
}

export default AuthLayout