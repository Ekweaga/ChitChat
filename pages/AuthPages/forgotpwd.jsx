import React from 'react'
import {ImSpinner8} from "react-icons/im"

function Forgotpwd(){
    return(
        <>
         <div className='w-full h-screen bg-[#EEEEEE] flex items-center justify-center relative overflow-hidden'>

            <h1 className="text-center font-bold">Forgot Password</h1>
            <form className='mt-[30px] flex flex-col  gap-[10px]'>
          

          <div>
              <label className='font-extrabold text-sm'>Enter Email Address</label>
              <div className='bg-white w-[280px] rounded-full  flex items-center px-2'><input type="email" placeholder="Enter registered email" className='bg-transparent p-2 focus:outline-none'/></div>
          </div>

          <div>
          <button className="w-[350px] p-2 rounded-md bg-[#e4b021] text-white mt-[100px] h-[55px] flex items-center justify-center" onClick={start}>{loading?  <ImSpinner8 className="animate-spin w-8 h-8 text-[#FFFF] " />:<span>Send</span>}</button>
                </div>
               

                <div className='text-[#3FD088] ml-[30px] flex items-center justify-center'>
                    <Link href="/">Go back Home</Link>
                </div>
          
          </form>
      
    </div>
        </>
    )
}

export default Forgotpwd;