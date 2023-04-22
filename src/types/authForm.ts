export interface IAuthProps {
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    handleSignIn: () => Promise<void>,
    signInWithGoogle: () => Promise<void>,
    handleLogOut: () => Promise<void>
}