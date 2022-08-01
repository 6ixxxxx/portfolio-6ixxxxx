import "./FormStyles.css"
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form"
import React, { useRef } from "react";


const Form = () => {

  const { register, handleSubmit,
    formState: { errors }
  } = useForm();

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
    <div className="form">
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