import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword, 
    getAuth,
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";
import {
    addDoc,
    collection,
    getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyC1OkPAGOAjxEoWoRw0O3ssHA_rYbwK3Mg",
  authDomain: "netflix-clone-7021d.firebaseapp.com",
  projectId: "netflix-clone-7021d",
  storageBucket: "netflix-clone-7021d.firebasestorage.app",
  messagingSenderId: "62224696961",
  appId: "1:62224696961:web:a0ca6431449c6e0b06af80"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const signup=async (name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })

    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));

    }

}


const login=async ()=>{
    try{
await signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));

    }
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout};