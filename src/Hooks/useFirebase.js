import { useEffect, useState } from 'react';
import firebaseInitialization from '../Firebase/firebase.init';
import { getAuth, signInWithPopup,GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

firebaseInitialization();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
        .finally(()=>{setLoading(false)})
    }
    const signInWithGithub=()=>{
        return signInWithPopup(auth, githubProvider)
        .finally(()=>{setLoading(false)})
    }
   
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        const unsaved = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsaved;
    }, [])

    
    
    
    
    
    return{
        user,
        loading,
        signInWithGoogle,
        logOut,
        signInWithGithub
    }
};

export default useFirebase;