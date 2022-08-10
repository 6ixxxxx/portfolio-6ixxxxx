import "./FormStyles.css"
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form"
import React, { useRef , useEffect} from "react";
import Aos from "aos"
import "aos/dist/aos.css"


const Form = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
}, [])

  const { register, handleSubmit,
    // eslint-disable-next-line
    formState: { errors }
  } = useForm();
//form validator

  const form = useRef();

  const sendEmail = (data, e) => {

    emailjs.sendForm(
      'service_oj4ikbh', 
      'template_u2yw1n6', 
      form.current, 
      'Ew23-Nbt6g-NbxDJ-')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message Sent!")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="form" id="contact" data-aos="slide-left">
      <h1>Reach Me</h1>
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <label>Your Name</label>
            <input type="text" name="user_name"
            {...register("user_name", {required: "Required"})}
            ></input>
            
            <label>Email</label>
            <input type="email" name="user_email"
            {...register("email", {required: "Required"})}
            ></input>

            <label>Message</label>
            <textarea rows="6" name="message"
            placeholder="Type Your Message Here" 
            {...register("message", {required: "Required"})}
            />

            <button className="btn" type="submit"
            value="Send" >Submit</button>

        </form>
    </div>
  )
}

export default Form