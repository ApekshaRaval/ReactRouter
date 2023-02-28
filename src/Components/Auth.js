import React ,{ useContext,createContext,useState}from 'react'
const AuthContext = createContext(null)


export const AuthProvider = ({children}) => {
    const[user,setUser]=useState()
    console.log("user", user);
    const login =(user)=>{
        console.log("auth");
        setUser(user)
    }
    const logout =()=>{
        console.log("fdsjfhjs")
        setUser(null)
    }
  return (
    <div>
      <AuthContext.Provider value={{user,login,logout}}>
      {children}
      </AuthContext.Provider>
     
    </div>
  )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}
