import React from 'react'
import './NavBar.css'
import { useState, useContext } from 'react'
import { ThemeContext } from './../../App'

const NavBar = () => {
    const [showMenu, setshowMenu] = useState(true)
    const [theme, setTheme] = useContext(ThemeContext)
    let body = document.body
    {
        theme==='dark'  ? body.style.backgroundColor='rgb(30, 30, 30)'  : body.style.backgroundColor='white'
        theme==='dark'  ? body.classList.add('theme')  : ""

    }
    
    return (
        <div>
            
            <nav className=  {`${theme === 'dark' ? "navBackground nav theme " : "nav theme"}`} >
                <div className="logo">
                    {theme === 'dark' ? <img src="/images/Logo-Dark.svg" alt="" />
                        :
                        <img src="/images/Logo-Light.svg" alt="" />}
                </div>
                <div className="pages">
                    <ul className={`${theme === 'dark' ? "darkword" : ""}`} >

                        <a href=""><li>Home</li></a>
                        <a href=""><li>News</li></a>
                        <a href=""><li >Promotion of the mount </li></a>
                        <a href=""><li >Plublishs</li></a>
                        <a href=""><li >Subscribe to the newsletter</li></a>
                    </ul>
                </div>


                <div onClick={() => {
                    {
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                }} className="darkMood">
                    {theme === 'dark' ?
                        <img src="/images/DarkMood.png" alt="" />
                        :
                        <img onClick={() => { }} src="/images/LightMood.png" alt="" />
                    }
                </div>
            </nav>
            {/* navbar for mobile screen */}
            <nav className='navMobile' >
                <div className="navMobilecontainer">
                    <div className="logoMobile">
                        {theme === 'dark' ? <img src="/images/Logo-Dark.svg" alt="" /> : <img src="/images/Logo-Light.svg" alt="" />}
                    </div>
                    <div className="menuMobile">
                        <img onClick={() => { setshowMenu(!showMenu) }} src="/images/Menu.png" alt="" />
                    </div>
                </div>
                <div style={{ display: (showMenu) ? "none" : "block" }} className="pagesMobile">
                    <img onClick={() => { setshowMenu(!showMenu) }} className='pageMobileExit' src="/images/exit.png" alt="" />
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href=""><li>News</li></a>
                        <a href=""><li>Promotion of the mount </li></a>
                        <a href=""><li>Plublishs</li></a>
                        <a href=""><li>Subscribe to the newsletter</li></a>
                    </ul>
                    <div className="navMobileLine"></div> <br />

                    <div className="togle" >
                        <p style={{ color: 'black' }}  >Dark Mood</p>
                        <label class="ui-switch"  >
                            <input onClick={() => { setChangeColor(!ChangeColor) }} type="checkbox" />
                            <div class="slider" onClick={() => {
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }}>
                                <div class="circle"></div>
                            </div>
                        </label>
                    </div>
                    <br />

                </div>
            </nav>
        </div>
    )
}

export default NavBar