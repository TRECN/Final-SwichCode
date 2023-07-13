import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div  className='aboutpage'>
      <Link to="/about">
        <img style = {{ width:"100%", height:"94.3vh" }}
          src="https://cdn.dribbble.com/users/67858/screenshots/2482202/attachments/1190214/coming_soon.png"
          alt="example"
        />
      </Link>
     
    </div>
  )
}
