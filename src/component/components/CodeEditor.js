import React, { useState } from 'react'

import Editor from "@monaco-editor/react";

export default function CodeEditor({code,setCode,theme,language,fSize}) {

    const [value,setValue]=useState(code||'');
    const handleChange=(value)=>{
        setValue(value)
        setCode(value)
    }

  return (
   <div className="codeEditor">
        <Editor
            height='92vh'
            width='100%'
            language={language || "cpp"}
            value={value}
            onChange={handleChange}
            theme={theme}
            options={{
                fontSize:fSize
            }}
        />
   </div>
  )
}