import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str +="0123456789"
    }
    if(charAllowed){
      str+="~!@#$%^&*()_+{?<>|"
    }

for (let i = 0; i < length; i++) {
       const num = Math.floor(Math.random()*str.length + 1)
       pass += str.charAt(num)

      
    }
    setPassword(pass)
    





  },[length,numberAllowed,charAllowed,password])

 useEffect(() =>{
  passwordGenerator()
 },[length,numberAllowed,charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-tomato-600 text-center my-3'> Password Generator </h1>
        <div className='flex shadow rounded-lg mb-9 overflow-hidden'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3  rounded-lg'
          placeholder='Password'
          readOnly
           />
           <button className='outline-none bg-blue-700 text-white px-3 py-0.5  rounded-md shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 mb-4'>
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> setLength(e.target.value)}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1 mb-4'>
            <input 
            type="checkbox" 
            value={numberAllowed}
            className='cursor-pointer ml-2'
            onChange={()=> setNumberAllowed(!numberAllowed)}
            />
            <label htmlFor="">Number</label>
          </div>

          <div className='flex items-center gap-x-1 mb-4'>
            <input 
            type="checkbox" 
            value={charAllowed}
            className='cursor-pointer ml-2'
            onChange={()=> setCharAllowed(!charAllowed)}
            />
            <label htmlFor="">Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
