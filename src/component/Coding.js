import React, { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import "../css/Coding.css"
import NavBar from './NavBar2'
import axios from 'axios'
import Output from './components/Output'
import Input from './components/Input'


export default function Coding({setDisplayNav}) {
  setDisplayNav(false)
  const [code, setCode] = useState('')
  const [theme, setTheme] = useState('vs-dark')
  const themeArray = ['vs-dark', 'oceanic-next']
  const [fSize,setFsize]=useState(15)
  const [output,setOutput]=useState();
  const [color,setcolor]=useState("green")
  const [input,setInput]=useState()

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
    console.log("run")
    console.log(code)
    console.log(input)
    const formData = {
      language_id: langId,
      // encode source code in base64
      source_code: btoa(code),
      stdin:btoa(input)
    };
    const options = {
      method: "POST",
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
        "X-RapidAPI-Key": 'd1f4847b2emshd6d521e8d281344p16880bjsn6fdfdaeaddbc',
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
      url: 'https://judge0-ce.p.rapidapi.com/submissions' + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
        "X-RapidAPI-Key": 'd1f4847b2emshd6d521e8d281344p16880bjsn6fdfdaeaddbc',
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;
      console.log(response.data)
      if (statusId === 1 || statusId === 2) {
        //still processing
        setTimeout(() => {
          checkStatus(token)
        }, 100)           
        return             
      } else {
        console.log('response.data', response.data.stdout)
        
        console.log(atob (response.data.compile_output))
        if(response.data.stdout===null){
          setOutput(atob(response.data.compile_output))
          setcolor("red")
        }
        else{
          setOutput(atob(response.data.stdout))
          setcolor("green")
        }
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
          <div className="output-input">
            <Output output={output} color={color}/>
            <Input input={input} setInput={setInput}/>
          </div>
        </div>
      </div>
    </div>
  )
}

// #include<iostream>
// using namespace std;
// int main(){
//     cout<<10;
// }