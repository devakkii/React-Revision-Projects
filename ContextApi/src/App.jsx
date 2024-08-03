import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'



function App() {
 

  return (
   <UserContextProvider>
   <h1>Akki</h1>
   <Login />
   </UserContextProvider>
  )
}

export default App
