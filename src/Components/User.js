import React from 'react'
import { Outlet ,useSearchParams} from 'react-router-dom'

const User = () => {
  const [serachParams,setSearchParams]=useSearchParams()
  const showActiveUsers = serachParams.get('filter')==='active'
  return (
    <>
    <div>
      <h2>user 1</h2>
      <h2>user 2</h2>
      <h2>user 3</h2>
      <Outlet/>
      <button onClick={()=>setSearchParams({filter :'active'})}>Active Users</button>
      <button onClick={()=>setSearchParams({})}>Reset Filter</button>
    </div>
    {
      showActiveUsers? <h2>Show active users</h2>:<h2>Show All users</h2>
    }
    </>
  )
}

export default User
