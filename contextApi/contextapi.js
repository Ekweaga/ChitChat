import { createContext,useState,useEffect } from "react";
import {useRouter} from "next/router"
import {getAuth,signOut} from  "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseapp } from "../firebase/firebase";
import { ref,getDownloadURL,uploadBytes,deleteObject} from 'firebase/storage';
import {collection,doc,setDoc,getDocs,orderBy,query,getFirestore,where,onSnapshot} from "firebase/firestore"


export const Authcontext = createContext()

 const Authcontentprovider = ({children})=>{
   
    const [chat,setChat]  = useState({})

    const [users,setUsers] = useState([])
    const[authuser,setUser] = useState(null)
    const auth = getAuth(firebaseapp)
    const db = getFirestore(firebaseapp)
 
    const [loading,setLoading] = useState(true)
   
    const [text,setText] = useState('')
    const [img, setImg]  = useState('')
    const [messages,setMessages] = useState([])
    const [serverErr,setServerErr] = useState(false)
    const router = useRouter()
    const loginUser = auth.currentUser?.uid;

    const getListUsers = async()=>{
        
        const userRef = collection(db, "Users");
        const q = query(userRef, where('uid', 'not-in', [loginUser]))
        const unsub = onSnapshot(q, querySnapshot =>{
            let userses = []
            querySnapshot.forEach(doc =>{
               userses.push(doc.data()) 
            });
            setUsers(userses)
            if(users){
                setLoading(false)
            }
        }
        
            )
           return ()=> unsub();

       
    }


    const handleSend = async (e)=>{
        e.preventDefault();
       
       const otheruser = chat.uid;
       const id = loginUser > otheruser ? `${otheruser + loginUser}` : `${loginUser + otheruser}`
       let url;
       if(img){
        
            const imgref = ref(
                storage,`images/${new Date().getTime()} - ${img.name}` 
            );
           
               
                const snap = await uploadBytes(imgref,img);
                const durl = await getDownloadURL(ref(storage,snap.ref.fullPath));
                url = durl;
      
    };
        await addDoc(collection(db,'messages', id , 'chat'),{
            text,
           media: url || "",
        from:loginUser,
        to:otheruser,
        CreatedAt:Timestamp.fromDate(new Date())
        })

        await setDoc(collection(db,"lastMsg",id),{
            lastText:text,
            media: url || "",
            from:loginUser,
            to:otheruser,
            CreatedAt:Timestamp.fromDate(new Date())
        })

    setText("")
    

    }


   
    
    useEffect(()=>{
        onAuthStateChanged(auth,(user) =>{
            setUser(user)
        })
    }, [])
   
    const getChat = async(userInfo)=>{
        setChat(userInfo);
        //displaying sent messages
        const otheruser = chat.uid;
        const id = loginUser > otheruser ? `${otheruser + loginUser}` : `${loginUser + otheruser}`
        const msgref = collection(db,'messages',id,'chat');
        const q = query(msgref,orderBy('CreatedAt','asc'));
        onSnapshot(q, querySnapshot =>{
            let msgs = [];
            querySnapshot.forEach(doc =>{
            msgs.push(doc.data()) 
            })
        
            setMessages(msgs)
    })
    console.log(chat);
};



     return (<Authcontext.Provider value={{users,chat,getChat,text,setText ,img,setImg,getListUsers,loginUser,serverErr,loading,messages,img,setImg,handleSend}}>{children}</Authcontext.Provider>)
 }


 export default Authcontentprovider;