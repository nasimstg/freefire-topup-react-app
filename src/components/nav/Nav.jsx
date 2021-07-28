import React, { useState} from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import './nav.css'
import Hamburgr from '../../icons/hamburger.png'
import HamburgrOpen from '../../icons/hamburgerOpen.png'
import About from '../../pages/about/About'
import App from '../../App'

export default function Nav(){  

        const [showMenu, setShowMenu] = useState('false')
        let menu;
        if(showMenu === true){
            menu = <div className="menu">
                <button onClick={()=> setShowMenu(false)}><img src={HamburgrOpen} alt="" /></button>
                <ul className="menuLinkList">
                    <li className="line menuLinkListIteam"><a href="/">About</a></li>
                    <li className="line menuLinkListIteam"><a href="/">TopUp</a></li>
                    <li className="line menuLinkListIteam"><a href="/">Contact</a></li>
                </ul>
            </div>
        }
        return (
            <section className="navBar">
                <div className="navContainer">
                    <div className="navLogo"><p className='navLogoText'><Link className="navLinkA" exact="true" to="/">ffabc.xyz</Link></p></div>
                    <div id="hidden" className="navLinks">
                        <ul className="navLinkList">
                            <Switch>
                                <li className="navLinkListIteam">
                                    <Link className="navLinkA" to="/about">About</Link>
                                </li>
                            </Switch>
                                <li className="navLinkListIteam">
                                    <Link className="navLinkA" to="/topup">TopUp</Link>
                                </li>
                                <li className="navLinkListIteam">
                                    <Link className="navLinkA" to="/contact">Contact</Link>
                                </li>
                        </ul>
                    </div>
                    <div className="navBtn"> <button className='btn'> Check </button>
                    <button id="notHidden" className="hamburger" 
                    onClick={()=> setShowMenu(!showMenu)}><img src={Hamburgr} alt="" /></button></div>
                </div>
                
                {menu}
            </section>
        )
}
