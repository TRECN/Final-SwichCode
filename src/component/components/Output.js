import React from 'react'
import "../../css/Output.css"
import { BsPlayCircleFill } from "react-icons/bs"

export default function Output({output,color}){
  return (
    <div className="Output">
        
        <label className='output'><h3><BsPlayCircleFill /> </h3> OUTPUT</label>
        
            <pre className='out-pre'>
            <div className="Output-w" style={{color:`${color}`}}>{output}
            </div></pre>
            
        
    </div>
  )
}