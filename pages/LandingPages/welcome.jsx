import React,{useState} from 'react'
import Image from "next/image"
import {ImSpinner8} from "react-icons/im"
import { useRouter } from 'next/router'

const welcome = () => {
  const [loading,setLoading] = useState(false)
  const router = useRouter();
  const start = ()=>{
setLoading(true)
setTimeout(()=>{
router.push("/AuthPages/login")
},2000)
  }
  return (
    <div className="mt-[50px] " >
      <div className="ml-[30px]">
        <h1 className="font-bold text-4xl">Get Closer To </h1>
        <h1 className="font-bold text-4xl mb-[5px] ">Everyone</h1>
        <p className="-ml-[10px] mt-[10px]">Helps you to contact everyone with <br/>just easy way</p>
      </div>
      <div className="flex items-center justify-center flex-col mt-[50px] p-2">
      <Image src="/Group 1.png" width={350} height={100} alt="png"/>
      <div className='flex gap-3 text-3xl mt-[40px]'><span>.</span><span>.</span><span>.</span></div>
      <div>
        <button className="w-[350px] p-2 rounded-md bg-[#e4b021] text-white mt-[100px] h-[55px] flex items-center justify-center" onClick={start}>{loading?  <ImSpinner8 className="animate-spin w-8 h-8 text-[#FFFF] " />:<span>Get Started</span>}</button>
      </div>
      </div>
    
    </div>
  )
}

export default welcome
