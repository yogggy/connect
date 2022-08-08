
import './App.css';
import Header from './components/header/Header';
import UserPost from './components/userPost/UserPost';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

import CreatePost from './components/createpost/CreatePost';
import { useEffect, useState } from 'react';

function App() {

  const [stage, setStage] = useState('')
  const [orderplace , setorderplace]=useState(false)

  useEffect(()=>{
    const orderstage = setTimeout(()=>{
      console.log("Ready To Pickup")
      setStage("Ready To Pickup")
      setTimeout(()=>{
        console.log('washing')
        setStage("washing")
      },2000)
    },4000)
    return ()=>{
      console.log('cleanup');
      clearTimeout(orderstage)
    }
  },[orderplace])
 
  return (
   <>
   {/* <Header></Header> */}
    {/* <UserPost></UserPost> */}
    <CreatePost></CreatePost>
    {/* <Signup></Signup>
    <Login></Login> */}
   </>
  );
}

export default App;
