import React from 'react'
import "../../css/Input.css"

export default function Input({input,setInput}) {

    const handleChange=(val)=>{
        setInput(val)
        
    }

  return (
    <div className="Input">
        
        <label className='output'>INPUT</label>
        <textarea value={input} className='input-w' cols="30" rows="10" placeholder='Custom Input' onChange={(e)=>{
            handleChange(e.target.value)
        }}></textarea>
          
            
        
    </div>
  )
}