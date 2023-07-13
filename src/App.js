

import Loginform from './component/Loginform';
import About from './component/About';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import Mainpage from './component/Mainpage';
import { Route,Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from './component/Firebase';
import WebDev from './component/WebDev'
import Coding from './component/Coding'

function App() {
  const [userName,setUserName] =useState(" ");
  const [displayNav,setDisplayNav]=useState(true);
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{

    if(user){
     setUserName(user.displayName) 
    } else setUserName(" ");
   console.log(user)

  });
},[]);

  return (
   
<>

<Navbar displayNav={displayNav}/>
<Routes>
<Route path = "/" element = {<Loginform setDisplayNav={setDisplayNav}/>} />
<Route path ="/About" element ={<About/>} />
<Route path = "/Signup" element = {<Signup/>} />
<Route path = "/Mainpage" element = {<Mainpage name ={userName}/>} />
<Route path='/WebDev' element={<WebDev setDisplayNav={setDisplayNav}/>} />
<Route path='/Coding' element={<Coding setDisplayNav={setDisplayNav}/>} />
</Routes>



</>
  

  )

}

export default App;
