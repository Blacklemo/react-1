import React from 'react'
import './Contact.css'
import Email_icon from '../../assets/Email_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "aa8eeef9-0dce-4ccc-8055-1632cfd16ad0");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    return (
        <div id = 'contact' className= 'contact'>
            <div className="contact-title">
                <h1>GET IN TOUCH</h1>
                            </div>
                            <div className="contact-section">
                                <div className="contact-left">
                                    <h2>Hit me up!</h2>
                                    <p>I'm currently available to take on new projects. Feel free to contact me.</p>
                               <div className="contact-details">
                                <div className="contact-detail">
                                    <img src = {Email_icon} alt=""/> <p>seemanadhakal481@gmail.com</p>
                                </div>
                                <div className="contact-detail">
                                <img src = {location_icon} alt=""/><p>Kathmandu, Nepal</p>
                                </div>
                                
                               </div>
                                </div>
                                <form onSubmit = {onSubmit} className="contact-right">
                                    <label htmlFor="">Your Name</label>
                                    <input type = "text" placeholder = 'Enter your name.' name='name'/>
                                    <label htmlFor = "">Your Email</label>
                                    <input type = "email" placeholder='Enter your email.' name='email'/> 
                                    <label htmlFor="">Write your message here.</label>   
                                      <textarea name="message" rows = "8" placeholder='Enter your message.'></textarea>
                                      <button type= 'submit' className="contact-submit">Submit</button>
                                                               </form>

                            </div>
        </div>
    )
}
export default Contact