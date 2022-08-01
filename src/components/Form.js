import "./FormStyles.css"
import emailjs from "emailjs-com";
import React, { useRef } from "react";


const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_oj4ikbh', 
      'template_u2yw1n6', 
      form.current, 
      'Ew23-Nbt6g-NbxDJ-')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent!")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            
            <label>Email</label>
            <input type="email" name="user_email"></input>

            <label>Message</label>
            <textarea rows="6" name="message"
            placeholder="Type Your Message Here" />

            <button className="btn" type="submit"
            value="Send" >Submit</button>

        </form>
    </div>
  )
}

export default Form