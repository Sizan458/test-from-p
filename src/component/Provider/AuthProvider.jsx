import {  getAuth,signInWithPopup, GoogleAuthProvider,GithubAuthProvider ,FacebookAuthProvider  } from "firebase/auth";
import { createContext } from "react";
import App from "../FireBase/FireBase";

 export const AuthContext= createContext(null);
 const  auth =   getAuth(App)

const AuthProvider = ({children}) => {
    const  googleProvider= new GoogleAuthProvider();
    const  gitHubProvider= new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


  const googleSignIn = ()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const gitHubSignIn = ()=>{
    return signInWithPopup(auth,gitHubProvider)

  }
  const faceBookSignIn = ()=>{
    return signInWithPopup(auth,facebookProvider)

  }

    const authInfo={
      googleSignIn,
      gitHubSignIn,
      faceBookSignIn
    }
    return (
        <AuthContext.Provider  value={authInfo}>{children}</AuthContext.Provider>

    );
};

export default AuthProvider;