import {useNavigate} from "react-router-dom"
import React from 'react'
import { useAuth } from './Auth'

const Profile = () => {
    const auth = useAuth()
    // console.log("auth", auth);
    const navigate = useNavigate()
    const handleLogout=()=>{
        auth.logout()
        navigate("/")
    }
  return (
    <div>
  welcome {auth.user}
  <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
