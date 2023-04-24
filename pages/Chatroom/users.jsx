import React,{useState,useEffect, useContext} from 'react'
import { useRouter } from 'next/router'
import { Authcontext } from '../../contextApi/contextapi'

function Users ({user}){
    const offstyle = { border:'1px red solid'}
    const onstyle={border:'1px green solid'}
    const router = useRouter();
    const navigate = ()=>{
      
        router.push("/Chatroom/oneUser")
    }

    const {getChat} = useContext(Authcontext)
    return(
        <>
        <div className='flex mt-[30px] gap-[15px] p-2 justify-between' onClick={()=>{getChat(user); navigate()}}>
            <div className={`flex gap-[20px] rounded-full`} >
                {user ? <img src={user?.avatar ? user?.avatar:'/Profile.png'} className="w-[45px] h-[45px]"/>:null}
                <span className="text-sm flex flex-col"> {user.username} <span>New messages</span></span>
            </div>
            <div className="bg-[#bb8e12] rounded-full text-white h-[30px] w-[30px] flex items-center justify-center -ml-[25px[">1</div>
                </div>
      
        </>
    )
}

export default Users