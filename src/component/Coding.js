import React, { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import "../css/Coding.css"
import NavBar from './NavBar'
import axios from 'axios'


export default function Coding() {

  const [code, setCode] = useState('')
  const [theme, setTheme] = useState('vs-dark')
  const themeArray = ['vs-dark', 'oceanic-next']
  const [fSize,setFsize]=useState(15)

  const lang = {
    'JAVA': 'java',
    'C++': 'cpp',
    'Python': 'python',
    'C': 'c',
    'JavaScript':'javascript'
  }
  const langid = {
    'JAVA': 62,
    'C++': 54,
    'Python': 71,
    'C': 75,
    'JavaScript':63
  }

  const [langId,setLangId]=useState(62)


  const Lang = ['JAVA', 'C++', 'Python', 'C','JavaScript']

  const [language, setLanguage] = useState('java');

  const handleCompile = () => {

    const formData = {
      language_id: langId,
      // encode source code in base64
      source_code: btoa(code),
      stdin:btoa("1\n2")
    };
    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token)
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        console.log(error);
      });
  };
  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;
      console.log(response.data)
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return
      } else {
        console.log('response.data', atob(response.data.stdout))
        console.log(atob (response.data.compile_output))
        return
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  console.log(code)
  return (
    <div className='CodeBg'>
      <NavBar color='rgb(20, 124, 221)'
        theme={theme}
        setTheme={setTheme}
        themeArray={themeArray}
      />
      <div className="bod">
        <div className="LeftH">
          <CodeEditor
            code={code}
            setCode={setCode}
            theme={theme}
            language={language}
            fSize={fSize}
          />
        </div>
        <div className="RightH">
          <select className="language" onChange={(e) => {
            setLanguage(lang[e.target.value])
            setLangId(langid[e.target.value])
          }}>
            {
              Lang.map(lang => (
                <option value={lang}>{lang}</option>
              ))
            }
          </select>

          <input type="button" value="Run" onClick={handleCompile} />
          <input type="range" name="" id="" onChange={(e)=>{
            setFsize(e.target.value)
            console.log(e.target.value)
          }}/>
        </div>
      </div>
    </div>
  )
}