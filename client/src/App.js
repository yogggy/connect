
import './App.css';
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { useEffect, useState } from 'react';
import Profile from './components/profiles/Profile';
import {Switch , Route} from 'react-router-dom'
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
   <Switch>
   <Route exact path='/landingPage'>
    <LandingPage></LandingPage>
    </Route>
    <Route exact path='/profile'>
      <Profile></Profile>
    </Route>
   <Route exact path='/signup'>
      <Signup></Signup>
    </Route>
    <Route exact path='/'>
    <Login></Login>
    </Route>

   </Switch>
   {/* <Header></Header> */}  
   </>
  );
}

export default App;
