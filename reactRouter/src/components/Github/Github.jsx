import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData()

    // const [data,setData] = useState('')

    // useEffect(()=>{
    //     // fetch('https://api.github.com/users/devakkii')
    //     // .then(response => response.json())
    //     // .then(data=> {
    //     //     console.log(data)
    //     //     setData(data)
    // })

    // },[])


  return (
    <div>
      <h1 className='text-center m-4 bg-gray-600 p-4'>Github Followers: {data.followers} 
        <img src={data.avatar_url} alt="Git Picture" width={250} />
        <h1 className='text-left ml-20 mt-2'>{data.name}</h1>
      </h1>
    </div>
  )
}

export default Github

export const githubDataLoader = async () =>{
    const response = await fetch('https://api.github.com/users/devakkii')
    return response.json()
}
