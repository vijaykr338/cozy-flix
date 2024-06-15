import { auth, googleProvider } from "../../config/firebase-config"
import {  createUserWithEmailAndPassword, signInWithPopup, signOut  } from 'firebase/auth'
import { useState } from "react";


export const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async (e) => {

        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch(err){
            console.log(err, "Something happened")
        }
    };


    const signInWithGoogle = async () => {
      try{
        await signInWithPopup(auth, googleProvider);
      } catch(err) {
        console.error(err);
      }
    }
    
    const logOut = async () => {
      try{
        await signOut(auth);
      } catch(err) {
        console.error(err)
      }
    }

  return (
    <div className="flex flex-col items-center justify-center my-3 ">
        <form  
         className="flex flex-col space-y-4"
         onSubmit={signIn}
        >
           <input 
            placeholder="Email..." 
            onChange={(e) => setEmail(e.target.value)}
            
            />
        <input 
        type="text" 
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
         />  
        <button onClick={signIn}>Sign in</button> 
        <button onClick={signInWithGoogle}>Sign In with Google</button>
        <button onClick={logOut}>Log out</button>
        </form>
      
    


    </div>
  )
}
