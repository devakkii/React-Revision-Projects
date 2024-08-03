import React from 'react'
import UserContext from './context/UserContext'
import { useContext } from 'react'

const profile = () => {
  const{user} = useContext(UserContext)
  
  {
    !user ? <div><h1>Please Login</h1></div> : <div><h2>Welcome {user.username}</h2></div>

  }
    
}

export default profile
