import React,{useState} from 'react'
import Image from "next/image"
import {ImSpinner8} from "react-icons/im"
import { useRouter } from 'next/router'
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

const welcome = () => {
  const [loading,setLoading] = useState(false)
  const router = useRouter();
   const data = [
        {
            img: "/slide1.png",
          
         
        },
        {
            img: "/slide2.png",
           
        },
        {
            img: "/slide3.png",
            
        }
      
      ]
  const start = ()=>{
setLoading(true)
setTimeout(()=>{
router.push("/AuthPages/login")
},2000)
  }
  return (
    <div className="h-full py-4
    ][ relative " >
      <div className="ml-[30px] mt-[50px]">
        <h1 className="font-bold text-4xl">Get Closer To </h1>
        <h1 className="font-bold text-4xl mb-[5px] ">Everyone</h1>
        <p className="-ml-[10px] mt-[10px]">Helps you to contact everyone with <br/>just easy way</p>
      </div>
      <div className="flex items-center justify-center flex-col mt-[50px] p-2">
      <Image src="/slide3.png" width={300} height={200}  alt="man"/>      
    
         
      <div className="mt-[50px]">
        <button className="w-[350px] p-2 rounded-md bg-[#e4b021] text-white mt-[100px] h-[55px] flex items-center justify-center" onClick={start}>{loading?  <ImSpinner8 className="animate-spin w-8 h-8 text-[#FFFF] " />:<span>Get Started</span>}</button>
      </div>
      </div>
    
    </div>
  )
}

export default welcome
