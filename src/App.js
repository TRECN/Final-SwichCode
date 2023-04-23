

import Loginform from './component/Loginform';
import About from './component/About';
import Signup from './component/Signup';
import Mainpage from './component/Mainpage';
import { Route,Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from './component/Firebase';
import WebDev from './component/WebDev'
import Coding from './component/Coding'


function App() {
  const [userName,setUserName] =useState(" ");
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{

    if(user){
     setUserName(user.displayName) 
    } else setUserName(" ");
   

  });
},[]);

  return (
   
<>
<Routes>
<Route path = "/" element = {<Loginform/>} />
<Route path ="/About" element ={<About/>} />
<Route path = "/Signup" element = {<Signup/>} />
<Route path = "/Mainpage" element = {<Mainpage name ={userName}/>} />
<Route path='/webDev' element={<WebDev/>}/>
<Route path='/coding' element={<Coding/>}/>
</Routes>



</>
  

  )

}

export default App;
