import { IAuthProps } from "../types/authForm";


function AuthForm({ setEmail, setPassword, handleSignIn, signInWithGoogle, handleLogOut }: IAuthProps) {
    return (
        <>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col items-center justify-center space-y-4">

                <input
                    className="border border-gray-400 focus:border-blue-500 outline-none rounded-md p-2"
                    type="text"
                    placeholder="Email.."
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    className="border border-gray-400 focus:border-blue-500 outline-none rounded-md p-2"
                    type="password"
                    placeholder="Password.."
                    onChange={e => setPassword(e.target.value)}
                />

                <button
                    className="bg-blue-500 text-white text-lg rounded-md p-2"
                    onClick={handleSignIn}
                >
                    Sign in
                </button>

                <button
                    className="bg-red-500 text-white text-lg rounded-md p-2"
                    onClick={signInWithGoogle}
                >
                    Sign in with Google
                </button>

                <button
                    className="bg-slate-500 text-white text-lg rounded-md p-2"
                    onClick={handleLogOut}
                >
                    Log Out
                </button>
            </form>
        </>
    )
}

export default AuthForm;
