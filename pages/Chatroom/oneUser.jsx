import React,{useState,useEffect, useContext} from "react"
import Authcontentprovider, { Authcontext } from "../../contextApi/contextapi";
import Image from "next/image";
import Send from "../../components/sendMessage";
import {HiOutlineUserCircle} from "react-icons/hi"

function OneUser(){
    const {chat,messages,loading} = useContext(Authcontext)
    return(
        <>
      
        <div className="relative h-screen">
            <header className="shadow-md p-2 flex justify-between">
                <div>
                {chat ? <img src={chat?.avatar ? chat?.avatar:<HiOutlineUserCircle/>}  className="w-[45px]"/>:null} {chat?.username}
                </div>
       
            <div className="bg-green-600 rounded-full text-white h-[20px] w-[20px] flex items-center justify-center -ml-[25px["></div>
            </header>

            <div>
                {
                    messages.length == 0 ? <div className="flex items-center justify-center mt-[100px] flex-col gap-[30px]">
                         <Image src="/slide3.png" width={300} height={200}  alt="man"/>    
                        No Conversations</div> : <div> A message</div>
                }
            </div>

            <div className="px-2 absolute bottom-0 right-0 left-0 py-2">
                <Send/>
            </div>
            
           
            
            
            </div>

       
        </>
    )
}


export default OneUser;