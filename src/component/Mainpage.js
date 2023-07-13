import React from "react";
import "../css/mainpage.css";



export default function Select(props) {
  return (
    <div className="container">
      <div className="switch-user">
        <span>
         
          <h1>Welcome - {props.name}</h1>
        </span>

       
      </div>
      <div className="text-2">
       
         <h1>  No more hours
          stashing/pulling/installing locally — just click, and start coding.
          </h1>
      </div>
     <hr></hr>
        <div className="choose-web-code">
            <div>WEBDEV</div>
            <div>CODING</div>
        </div>
    <div className="coding-option">
        
        <div className="webdev">
        <div className="html-css">
          {" "}
          <div className="html">
            {" "}
            <a href="/WebDev">
              <span>HTML</span>
            </a>
          </div>
          <div className="css">
            {" "}
            <a href="/WebDev">
              <span>CSS</span>
            </a>
          </div>
        </div>

        <div className="javascript">
          <a href="/WebDev">
            <span>JavaScript</span>
          </a>
        </div>
        </div>
        <div className="coding">
          <div className="cpp-python">
            {" "}
            <div className="c++">
              {" "}
              <a href="/Coding">
                <span>C++</span>
              </a>
            </div>
            <div className="python">
              {" "}
              <a href="/Coding">
                <span>Python</span>
              </a>
            </div>
          </div>

          <div className="java">
            {" "}
            <a href="/Coding">
              <span>Java</span>
            </a>
          </div>
        </div>
        </div>
       
             <div className="main-text">
          <span>
            <h2>This is just the beginning.</h2>
          </span>{" "}
        </div>
        <div className="future">
       <span>We're working with and invested in the fastest growing open source projects to make instant, secure-by-default browser-based computing accessible to everyone.
       </span>  </div>

    </div>
  );
}
