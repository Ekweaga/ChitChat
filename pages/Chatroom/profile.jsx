import React,{useState,useEffect} from "react"
import {getAuth,signOut} from  "firebase/auth";
import { firebaseapp } from "../../firebase/firebase";
import {collection,doc,setDoc,getDoc,orderBy,query} from "firebase/firestore"
import { ref,getDownloadURL,uploadBytes,deleteObject} from 'firebase/storage';


function Profile(){
    const [user,setUser] = useState({})
    const auth = getAuth(firebaseapp)


    
    useEffect(()=>{
        getDoc(doc(db,"Users",auth.currentUser.uid)).then((docsnap)=>{
            if(docsnap.exists){
                setUser(docsnap.data())
            }
        })
    })
    return(
        <>
        <div>

            <div>
                {user?.username}
            </div>

        </div>

        </>
    )
}

export default Profile;