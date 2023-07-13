import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { TbCircuitSwitchOpen } from "react-icons/tb"
import "../css/NavBar2.css"

export default function NavBar({ color,theme,setTheme,themeArray }) {
    
    const [hover, setHover] = useState(false)
    const [btnHover, setBtnHover] = useState({
        theme: false,
        save: false,
        signin: false,
        signup: false
    })

    

    var i = 1;
    const handleHoverIn = (btn) => {
        setHover(true)
        if (btn === 'theme') setBtnHover(a => ({
            ...a,
            theme: true
        }))
        else if (btn === 'save') setBtnHover(a => ({
            ...a,
            save: true
        }))
        else if (btn === 'signin') setBtnHover(a => ({
            ...a,
            signin: true
        }))
        else if (btn === 'signup') setBtnHover(a => ({
            ...a,
            signup: true
        }))

    }
    const handleHoverOut = (btn) => {
        setHover(false)
        if (btn === 'theme') setBtnHover(a => ({
            ...a,
            theme: false
        }))
        else if (btn === 'save') setBtnHover(a => ({
            ...a,
            save: false
        }))
        else if (btn === 'signin') setBtnHover(a => ({
            ...a,
            signin: false
        }))
        else if (btn === 'signup') setBtnHover(a => ({
            ...a,
            signup: false
        }))
    }

    return (
        <div>
            <div className="navBar">
                <div className="leftHalf">
                <Link to="/" className="logo-name">
        Switch Code
      </Link>
                </div>

                <div className="rightHalf">
                    <div >
                        <select className="theme"
                            onMouseEnter={() => handleHoverIn('theme')}
                            onMouseLeave={() => handleHoverOut('theme')}
                            style={{ backgroundColor: (btnHover['theme'] && hover) ? color : 'black' }} onChange={(el) => {
                                setTheme(el.target.value)
                            }}>
                                 <option value="none" selected disabled hidden>THEME</option>
                            {
                                themeArray.map(theme => (
                                    <option value={theme} key={i++}>{theme}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="save" onMouseEnter={() => handleHoverIn('save')} onMouseLeave={() => handleHoverOut('save')} style={{ backgroundColor: (btnHover['save'] && hover) ? color : 'black' }} >
                        <Link to="/">SAVE</Link>

                    </div>
                    <div className="signIn" onMouseEnter={() => handleHoverIn('signin')} onMouseLeave={() => handleHoverOut('signin')} style={{ backgroundColor: (btnHover['signin'] && hover) ? color : 'black' }} >
                        <Link to="/">Sign IN</Link>
                    </div>
                    <div className="SignUp" onMouseEnter={() => handleHoverIn('signup')} onMouseLeave={() => handleHoverOut('signup')} style={{ backgroundColor: (btnHover['signup'] && hover) ? color : 'black' }}>
                        <Link to="/">Sign Up</Link>
                    </div>
                </div>


            </div>
        </div>
    )
}