import React, {useState} from 'react'
import { Link } from 'react-scroll';

import './Navbar.css'
import logo from '../../assets/logo.svg'
import theme_photo from '../../assets/theme_photo.webp'

const Navbar = () => {

    const [menu,setMenu] = useState("home")
    return(
        <div className='navbar'>
            <div className= "navbar_logo">
<img src= {logo}  alt="" className ="seemana"/>
    <img src = {theme_photo} alt="" className="theme"/></div>
<ul className="nav-menu"> 
<li className='nav-single-component'><Link className='anchor-link' to='home'><p onClick={()=>setMenu("home")}>Home</p></Link></li>
<li className='nav-single-component'><Link className='anchor-link' offset={50} to='about' smooth='true'><p onClick={()=>setMenu("about")}>About Me</p></Link></li>
<li className='nav-single-component'><Link className='anchor-link' offset={50} to='portfolio' smooth='true'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></Link></li>
<li className='nav-single-component'><Link className='anchor-link' offset={50} to='contact' smooth='true'><p onClick={()=>setMenu("contact")}>Contact</p></Link></li>
</ul>
</div>
    )
}

export default Navbar