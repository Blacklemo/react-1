import React from 'react'
import './About.css'

import about_img from '../../assets/about_img.webp'
const About =() => {
    return(
        <div id = 'about' className = 'about'>
<div className="about-title">
    
    <h1>ABOUT ME</h1>
    
    </div>
   <div className = "about-sections">
    <div className= "about-left">
        <img src ={about_img} alt=""/>
        </div>
        <div className = "about-right">
            <div className = "about-para">
                <h2>Frontend developer</h2>
     <p>As a junior Frontend developer, I possess an impressive arsenal of skills in HTML, CSS,  Javascript, React and Tailwind.
   I excel in designing and maintaining responsive websites that offer a smooth user experience. 
     My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code.
      I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding applications.</p>
      </div>
</div>

</div>
        </div>
    )
}

export default About