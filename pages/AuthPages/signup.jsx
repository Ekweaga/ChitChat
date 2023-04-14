import React,{useState} from 'react'
import { useRouter } from 'next/router';
import {getFirestore} from "firebase/firestore"
import { firebaseapp } from '../../firebase/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider} from 'firebase/auth'
import {getAuth,signOut} from  "firebase/auth";
import {ImSpinner8} from "react-icons/im"
import {collection,doc,setDoc,getDocs,orderBy,query} from "firebase/firestore"



function Signup(){
    const [loading,setLoading] = useState(false)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')
    const [error,setError] = useState('')
    const [msg,setMsg] = useState('')

        const router = useRouter();
        const projectFirestore = getFirestore(firebaseapp)
        const auth = getAuth(firebaseapp)



        const signUp = async ()=>{

            if(!name || !email || !pwd){
                    setError("Your fields may be empty");
                    setMsg('')

                    if(pwd.length < 8 ){
                        setError("Password must have at least 8 characters")
                        setMsg('')
                    }
                    if(name.length !== 4){
                        setError("Username should have 4 characters")
                        setMsg('')
                    }

            
            }

            else{
                        
            try{
                setLoading(true)
              await createUserWithEmailAndPassword(auth,email,password).then((response)=>{
                  setDoc(
                     doc(projectFirestore, "Users",response.user.uid), {
                        email:email,
                        name:name,
                        pwd:pwd,
                        IsOnline:false
                     
                     });

                     setLoading(false)
                     setName('')
                     setEmail('')
                     setPwd('')
             })
            }
            catch(err){
      
            }
          
            }
          
      
              }




        const navigate = ()=>{
            router.push("/AuthPages/login")
        }
    return(
        <>
          <div className="p-3 mt-[80px]">
            <div>
                <h1 className="font-bold text-3xl">Hello,Create Account</h1>
                <p className=" mt-[10px]">Happy to see you use ChitChat, to use this platform please create account with us.</p>

            </div>

            <div className='flex flex-col items-center justify-center mt-[80px] gap-[20px]'>
            <div>
                    <label>What's your username</label><br/>
                    <input type="text" required className='border-[1px] w-[350px] p-3 mt-[20px] rounded-3xl h-[60px]' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>Email Address</label><br/>
                    <input type="email" required className='border-[1px] w-[350px] p-3 mt-[20px] rounded-3xl h-[60px]' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label>Password</label><br/>
                    <input type="email" required className='border-[1px] w-[350px] p-3 mt-[20px] rounded-3xl h-[60px]' value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                </div>
                
                <div>
        <button className="w-[350px] p-2 rounded-md bg-[#e4b021] text-white  h-[55px] flex items-center justify-center mt-[20px]" onClick={signUp}>{loading?  <ImSpinner8 className="animate-spin w-8 h-8 text-[#FFFF] " />:<span>Sign Up</span>}</button>
      </div>
      <div className="text-red-700">{error?<p>{error}</p>:null}</div>
      <div>
        <p>Already have a ChitChat account? <span className=" text-[#feca38] font-bold ">Login</span></p>
      </div>
            </div>
        </div>
        </>
    )
}

export default Signup;