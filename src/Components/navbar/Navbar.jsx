import React, { useEffect, useState, useRef } from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Navbar.css'
import logo from './../../assets/logo.png'
import menu_icon from './../../assets/menu-icon.png'

const Navbar = () => {
  
  const [sticky, setSticky] =  useState(false)

  const hideMobileMenu = () => {
    mobileMenu.current.style.className = 'hide_mobile_menu'
  }

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true)
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} alt="logo" className='logo'/>
        <ul className={mobileMenu? '':'hide_mobile_menu'} >
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='project' smooth={true} offset={-260} duration={500}>Projects</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='team' smooth={true} offset={-260} duration={500}>Team</Link></li>
            {/* <li><Link to='testimonials' smooth={true} offset={-256} duration={500}>Testimonials</Link></li> */}
            <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar