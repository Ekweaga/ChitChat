import React,{useState,useEffect} from "react"
import {RiSendPlaneLine} from "react-icons/ri"
import {AiOutlineFileImage} from "react-icons/ai"
function Send(){
    return(
        <>
        <div  style={{border:'1px solid yellow'}} className="flex px-2 items-center gap-2">
            <input type="file" id="file" className="hidden"/>
            <label htmlFor="file">  <AiOutlineFileImage className="w-[30px] text-3xl"/></label>
          
        <input type="text" placeholder="Message" className="w-full p-2 focus:outline-none focus:border-none h-[50px] rounded-md"/>
        <div><RiSendPlaneLine className="w-[30px] text-3xl"/></div>
        </div>
     
        </>
    )
}

export default Send;