import React, {useState,useEffect}from 'react'
import Image from 'next/image'
import {ImSpinner8} from "react-icons/im"
import { useRouter } from 'next/router'

function Logo() {
  const router = useRouter();
   

  useEffect(()=>{
    setTimeout(()=>{
      
      router.push("/LandingPages/welcome")

    },3000)

  })

  return (
  <>
   <main className='bg-white flex items-center justify-center flex-col mt-[200px]'>
    <Image src="/ChitChat.png" width={250} height={100} alt="png"/>
    <div className="-mt-[40px]">
      <ImSpinner8 className="animate-spin w-8 h-8 text-[#F4D16D] " />
    </div>
  

  </main></>
  )
}

export default Logo
