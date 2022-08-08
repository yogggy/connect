
import './App.css';
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

import CreatePost from './components/createpost/CreatePost';
import { useEffect, useState } from 'react';
import Profile from './components/profiles/Profile';
import {Routes , Route} from 'react-router-dom'


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
   <Routes>
    <Route exact path="/" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route path="/landingPage" element={<LandingPage/>}/>
          <Route path="/addpost" element={<CreatePost/>}/>
   </Routes>
   {/* <Header></Header> */}  
   </>
  );
}

export default App;
