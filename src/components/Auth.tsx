import { useState } from "react";
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import AuthForm from "./AuthForm";

function Auth() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    console.log(auth?.currentUser?.email);

    const handleSignIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        }
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            console.log("successfully login with google");
        } catch (err) {
            console.error(err)
        }
    }

    const handleLogOut = async () => {
        try {
            await signOut(auth)
            console.log("successfully logged out :)");

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <h1 className="text-3xl text-center text-slate-800 font-semibold pt-8 pb-16">
                Welcome to Firebase Work Out
            </h1>

            <AuthForm
                setEmail={setEmail}
                setPassword={setPassword}
                handleSignIn={handleSignIn}
                signInWithGoogle={signInWithGoogle}
                handleLogOut={handleLogOut}
            />
        </>
    )
}

export default Auth;
