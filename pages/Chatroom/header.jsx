import React,{useState,useEffect} from "react"
import {getAuth,signOut} from  "firebase/auth";
import { firebaseapp } from "../../firebase/firebase";
import {collection,doc,setDoc,getDoc,orderBy,query,getFirestore} from "firebase/firestore"


function Header({loginUser}){
    const [user,setUser]= useState({})
    const auth = getAuth(firebaseapp)
    const db = getFirestore(firebaseapp)
   

    useEffect(()=>{
        getDoc(doc(db,"Users",loginUser)).then((docsnap)=>{
            if(docsnap.exists){
                setUser(docsnap.data())
            }
        })
    })
    return(
        <>
        <div className="flex justify-between items-center p-2 shadow-md ">
          
            <div>{user ? <p>{user?.username}</p>:null}</div>
            {user ? <img src={user?.avatar ? user?.avatar:'/Profile.png'} className="w-[30px]"/>:null}
          
        </div>
        </>
    )
}

export default Header;