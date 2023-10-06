import {  getAuth,signInWithPopup, GoogleAuthProvider,GithubAuthProvider ,FacebookAuthProvider ,createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import App from "../FireBase/FireBase";

 export const AuthContext= createContext(null);
 const  auth =   getAuth(App)

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading, setLoading] = useState(true)
    const  googleProvider= new GoogleAuthProvider();
    const  gitHubProvider= new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


  const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }
  const gitHubSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth,gitHubProvider)

  }
  const faceBookSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth,facebookProvider)

  }
  const signUp=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn=(email,password)=>{
    setLoading
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut=()=>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=>{
   const UnSucribe= onAuthStateChanged(auth,currentUser=>{
      console.log(currentUser)
      setUser(currentUser)
    })
    return()=>{ UnSucribe()}
   },[])

    const authInfo={
      user,
      googleSignIn,
      gitHubSignIn,
      faceBookSignIn,
      signUp,
      logIn,
      logOut,
      loading
    }
    return (
        <AuthContext.Provider  value={authInfo}>{children}</AuthContext.Provider>

    );
};

export default AuthProvider;