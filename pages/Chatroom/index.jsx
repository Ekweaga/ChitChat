import React,{useState,useEffect} from "react"
import Header from "./header";
import {getAuth,signOut} from  "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseapp } from "../../firebase/firebase";
import {collection,doc,setDoc,getDocs,orderBy,query,getFirestore,where,onSnapshot} from "firebase/firestore"
import Users from "./users";
import Images from "./images";
import {ImSpinner8} from "react-icons/im"

function Index(){
    const [users,setUsers] = useState([])
    const[authuser,setUser] = useState(null)
    const auth = getAuth(firebaseapp)
    const db = getFirestore(firebaseapp)
    const loginUser = auth.currentUser?.uid;
    const [loading,setLoading] = useState(true)

    const getListUsers = async()=>{
        
        const userRef = collection(db, "Users");
        const q = query(userRef, where('uid', 'not-in', [loginUser]));
        const unsub = onSnapshot(q, querySnapshot =>{
            let userses = []
            querySnapshot.forEach(doc =>{
               userses.push(doc.data()) 
            });
            setUsers(userses)
            if(users){
                setLoading(false)
            }
        }
        
            )
           return ()=> unsub();

       
    }
    useEffect(()=>{
       getListUsers()
        onAuthStateChanged(auth,(user) =>{
            setUser(user)
        })
    console.log(loginUser)
    }, [])
    useEffect(()=>{
      
      
      
        
         
        
    },[]);
    return(
        <>
        <div>
          {loading ?<div className="flex items-center justify-center mt-[80px] m-auto"> <ImSpinner8 className="animate-spin w-8 h-8 text-[#d79f1b] " /> </div>:( <div className="users">
            <div className="flex gap-[20px] w-[80%] mx-auto items-center justify-center mt-[40px] py-2">
            {users.map(user=>
           
               <Images user ={user} key={user.uid}  />)}</div><hr/>

                {users.map(user=>
               <Users user ={user} key={user.uid}  />
           )} 
            </div>)} 
            <div className="chatPlace"></div>
        </div>
        </>
    )
}

export default Index;