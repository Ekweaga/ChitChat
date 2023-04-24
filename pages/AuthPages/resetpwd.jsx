import React from 'react'
import { sendPasswordResetEmail,confirmPasswordReset,getAuth } from 'firebase/auth'

function Reset(){

    const [email,setEmail] = useState('')
    const auth = getAuth(firebaseapp)
    const [message,setMessage] = useState('')
    const[error,setError] = useState('')

const sendPasswordResetEmail = async(e)=>{
  e.preventDefault();
    return await sendPasswordResetEmail(auth,email).then(()=>{
      setMessage("Check your email for reset link")
    }).catch((err)=>{
        setError(err.message)
    })
}


    return(
        <>
            <div className='w-full h-screen bg-[#EEEEEE] flex items-center justify-center relative overflow-hidden'>
            <form className='mt-[30px] flex flex-col  gap-[10px]'>
          

          <div>
              <label className='font-bold text-sm'>New Password</label>
              <div className='bg-white w-[280px] rounded-full  flex items-center px-2'><input type="password" placeholder="Enter new password" className='bg-transparent p-2 focus:outline-none'/></div>
          </div>

          <div>
              <label className='font-bold text-sm'>Confirm Password</label>
              <div className='bg-white w-[280px] rounded-full  flex items-center px-2'><input type="password" placeholder="Enter new password" className='bg-transparent p-2 focus:outline-none'/></div>
          </div>

          <div>
                    <button className='text-black bg-[#3FD088] w-[280px] p-2  text-1xl font-black rounded-md mt-[20px]' onClick={sendPasswordResetEmail}>Send</button>
                </div>
                <div>
                  {message !== "" ?<p>{message}</p>:null}
                </div>
               

                <div className='text-[#3FD088] ml-[30px] flex items-center justify-center'>
                    <Link href="/">Go back Home</Link>
                </div>
          
          </form>
      
    </div>
        </>
    )
}

export default Reset;