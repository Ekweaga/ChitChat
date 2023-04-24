import React,{useState,useEffect} from "react"
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"




function Images({user}){
    const offstyle = { border:'1px red solid'}
    const onstyle={border:'1px green solid'}
    return(
        <>
      
        <div className={`flex gap-[20px] rounded-full`} style={{border:'2px solid green'}}>
        {user ? <img src={user?.avatar ? user?.avatar:'/Profile.png'}  className="w-[45px]"/>:null}
        </div>
        </>
    )
}

export default Images;