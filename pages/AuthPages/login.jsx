import React,{useState} from 'react'
import { useRouter } from 'next/router';
import { firebaseapp } from '../../firebase/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider} from 'firebase/auth'
import {getAuth,signOut} from  "firebase/auth";
import {collection,doc,setDoc,getDocs,orderBy,query,getFirestore} from "firebase/firestore"
import {ImSpinner8} from "react-icons/im"

function Login(){
  
        const [loading,setLoading] = useState(false)
        const [email,setEmail] = useState('')
        const [pwd,setPwd] = useState('')
        const router = useRouter();
        const auth = getAuth(firebaseapp)
        const projectFirestore = getFirestore(firebaseapp)
  
        const start = async ()=>{
      setLoading(true)

      try{
        await signInWithEmailAndPassword(auth,email,password).then((response)=>{
            updateDoc(
               doc(projectFirestore, "Users",response.user.uid), {
                 IsOnline:true
               });
       })
      }
      catch(err){

      }
    
        }

        const navigate = ()=>{
            router.push("/AuthPages/signup")
        }
    return(
        <>
        <div className="p-3 mt-[80px]">
            <div>
                <h1 className="font-bold text-3xl">Hello,Welcome Back</h1>
                <p className=" mt-[10px]">Happy to see you again, to use your account please login first.</p>

            </div>

            <div className='flex flex-col items-center justify-center mt-[80px] gap-[20px]'>
                <div>
                    <label>Email Address</label><br/>
                    <input type="email" required className='border-[1px] w-[350px] p-3 mt-[20px] rounded-3xl h-[60px]'/>
                </div>
                <div>
                <label>Password</label><br/>
                    <input type="email" required className='border-[1px] w-[350px] p-3 mt-[20px] rounded-3xl h-[60px]'/>
                </div>
                <div style={{float:'right'}}>
                    Forgot Password?
                </div>
                <div>
        <button className="w-[350px] p-2 rounded-md bg-[#e4b021] text-white  h-[55px] flex items-center justify-center mt-[20px]" onClick={start}>{loading?  <ImSpinner8 className="animate-spin w-8 h-8 text-[#FFFF] " />:<span>login</span>}</button>
      </div>
      <div>
        <p>Don't have a ChitChat account? <span className=" text-[#feca38] font-bold " onClick={navigate}>Sign Up</span></p>
      </div>
            </div>
        </div>
        </>
    )
}

export default Login;