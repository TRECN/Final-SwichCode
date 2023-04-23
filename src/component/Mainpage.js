import React from 'react'
import '../css/mainpage.css' ;

export default function Select(props) {
  return (
     
       <div className='container'>
           
       <a href='/webDev'>
           <span  > Web Dev</span>
           </a>
   
   
       <a href='/coding'>
           <span >Coding</span>
       </a>
           
   <h1>Welcome-{props.name}</h1>
       </div>
  )
}