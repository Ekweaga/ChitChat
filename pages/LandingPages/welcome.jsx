import React,{useState} from 'react'
import Image from "next/image"
import {ImSpinner8} from "react-icons/im"
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

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
    <div className="mt-[50px] " >
      <div className="ml-[30px]">
        <h1 className="font-bold text-4xl">Get Closer To </h1>
        <h1 className="font-bold text-4xl mb-[5px] ">Everyone</h1>
        <p className="-ml-[10px] mt-[10px]">Helps you to contact everyone with <br/>just easy way</p>
      </div>
      <div className="flex items-center justify-center flex-col mt-[50px] p-2">
        <div>
            <Swiper        
                slidesPerView={1}
                spaceBetween={10}
                
                navigation={{
                    prevEl: ".trend_prev",
                    nextEl: ".trend_next",
                }}
                className="custom-class"
            >
              {data.map((item,i)=>{
              return  ( <SwiperSlide key={i}>
                
                             <img 
                                 src={item.img}
                                 width={150}
                                 height={50}
                                
                                 alt=""
                             /></SwiperSlide>)
              })}


            </Swiper></div>
    
            <div className="arrows">
                <span className="trend_prev">
                   .
                </span>
                <span className="trend_next">
                 .
                </span>
            </div>
      <div>
        <button className="w-[350px] p-2 rounded-md bg-[#e4b021] text-white mt-[100px] h-[55px] flex items-center justify-center" onClick={start}>{loading?  <ImSpinner8 className="animate-spin w-8 h-8 text-[#FFFF] " />:<span>Get Started</span>}</button>
      </div>
      </div>
    
    </div>
  )
}

export default welcome
