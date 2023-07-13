import React from 'react'
import { useState, useEffect } from 'react';
import '../css/WebDev.css'
import { BsPlayCircleFill } from "react-icons/bs"
import Editor from './components/Editor';
import NavBar from './NavBar2';

export default function WebDev({setDisplayNav}) {
  setDisplayNav(false)
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const themeArray = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night']

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 500);
    return () => clearTimeout(timeOut)
  }, [html, css, js])

  const [srcDoc, setSrc] = useState(``)
  const [theme, setTheme] = useState("dracula")


  return (
    <div className="">
      <NavBar 
        color='rgb(245, 47, 103)'
        theme={theme}
        setTheme={setTheme}
        themeArray={themeArray}
      />

      <div className='page'>

        <div className="top">
          <Editor
            language="xml"
            value={html}
            setEditorState={setHtml}
            theme={theme}
          />
          <Editor
            language="css"
            value={css}
            setEditorState={setCss}
            theme={theme}

          /> 
          <Editor
            language="javascript"
            value={js}
            setEditorState={setJs}
            theme={theme}

          />
        </div>
        <div className="bottom">
          <label className='output'><h3><BsPlayCircleFill /> </h3> OUTPUT</label>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="1"
            width="100%"
            height="100%"></iframe>
        </div>
      </div>
    </div>
  )
}