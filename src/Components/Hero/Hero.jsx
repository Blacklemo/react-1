import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import linkedin_logo from '../../assets/linkedin_logo.svg'
import github_logo from '../../assets/github_logo.svg'
import HTML5_logo from '../../assets/HTML5_logo.svg'
import css_logo from '../../assets/css_logo.svg'
import javascript_logo from '../../assets/javascript_logo.svg'
import tailwind_logo from '../../assets/tailwind_logo.svg'
import react_logo from '../../assets/react_logo.svg'
import jquery_logo from '../../assets/jquery_logo.svg'
const Hero = () => {
    return(
        <div id = 'home' className = 'hero'>
<img src= {profile_img} alt="" className= "profile_photo"/>
        <h1><span>Hi, I'm Seemana Dhakal.</span> A passionate Front-end React Developer based in Nepal.</h1>
       <div className = "hero-links">
        <img src = {linkedin_logo} alt="" className="logo" />
        <img src = {github_logo} alt=""  className="logo"/>
        <div className='hero-resume'>My Resume</div>
        </div>
        <div className='skills_logo'>Tech Stack
        
        <img src ={HTML5_logo} alt ="" className = "skills" /> 
        <img src ={css_logo} alt ="" className = "skills" />
        <img src ={javascript_logo} alt ="" className = "skills"/>
        <img src ={tailwind_logo} alt ="" className = "skills"/>
        <img src ={react_logo} alt ="" className = "skills" />
        <img src ={jquery_logo} alt ="" className = "skills" />
       </div>
        </div>
    )
}

export default Hero