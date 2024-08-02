import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userid} = useParams()
  return (
    <div>
      <h1 className='bg-green-400 text-tomato-500 p-4' >User: {userid}</h1>
    </div>
  )
}

export default User
