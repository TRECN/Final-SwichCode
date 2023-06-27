import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';


import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si"

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';

import { Controlled as ControlledEditorComponent } from 'react-codemirror2';



const Editor = ({ theme, language, value, setEditorState }) => {

  const handleChange = (editor, data, value) => {
    setEditorState(value);
  }


  return (
    <div className="editor">
      <label className='ht-l'><h3>{language === "xml" ? <AiFillHtml5 /> : language === "css" ? <IoLogoCss3 /> : <SiJavascript />}</h3>{language === 'xml' ? "HTML" : language === 'css' ? "CSS" : "JavaScript"}</label>
      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value={value}
        className="codeMirror"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: theme,
          autoCloseTags: true,
          autoCloseBrackets: true,
        }}
      />
    </div>
  )
}

export default Editor