import React,{useState,useEffect} from 'react'

function Users ({user}){
    const offstyle = { border:'1px red solid'}
    const onstyle={border:'1px green solid'}
    return(
        <>
        <div className='flex mt-[30px] gap-[15px] p-2'>
            <div className={`flex gap-[20px] rounded-full`} >
                {user ? <img src={user?.avatar ? user?.avatar:'/Profile.png'} className="w-[40px]"/>:null}
            </div>
           <span className="text-2xl"> {user.username}</span>
                </div>
      
        </>
    )
}

export default Users