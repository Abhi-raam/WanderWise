import { Children, createContext,useState } from "react";

export const UserContext = createContext()

const Logging =({children})=>{
    const Username = "Abhiram"
    const [user,setUser] = useState({})
    const [userLogin,setUserLogin] = useState(false)

    
    return <UserContext.Provider value={{user,setUser,userLogin,Username,setUserLogin}}>{children}</UserContext.Provider>
}


export default Logging