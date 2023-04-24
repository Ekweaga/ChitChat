import React,{useState,useEffect} from "react"
import Header from "./header";

import Users from "./users";
import Images from "./images";
import {ImSpinner8} from "react-icons/im"
import OneUser from "./oneUser";
import Send from "../../components/sendMessage";
import Authcontentprovider, { Authcontext } from "../../contextApi/contextapi";
import { useContext } from "react";

function Index(){
   
    const {users,chat,getChat,getListUsers,serverErr,loading} = useContext(Authcontext)



    useEffect(()=>{
       getListUsers()
    }, [])
    useEffect(()=>{
      
      
      
        
         
        
    },[]);
    return(
        <>
        <Authcontentprovider>
        <div>
        {
            serverErr ? (<div>Server Error</div>) :(
                <div>

               <div>
                        
              {loading ? ( <div className="flex items-center justify-center mt-[80px] m-auto"> <ImSpinner8 className="animate-spin w-8 h-8 text-[#d79f1b] " /> </div>):(  <><div className="p-2">
            Active Users
         
        </div><hr/><div className="users">
              <div className="flex gap-[20px] w-[80%] mx-auto items-center justify-center py-2">
              {users.map(user=>
             
                 <Images user ={user} key={user.uid}  />)}</div><hr/>
    
                  {users.map(user=>
                 <Users user ={user} key={user.uid}  />
             )} 
              </div></>)
              
            } 
    
    
    </div>
    
                
                
    
    
                
    
            
              
            </div>
            )
        }

            
        </div>
        </Authcontentprovider>

    
       
        </>
    )
}

export default Index;