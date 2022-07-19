import "./FormStyles.css"

import React from "react"


const Form = () => {
  return (
    <div className="form">
        <form action="mailto:Francistrix@gmail.com">
            <label>Your Name</label>
            <input type="text" ></input>
            
            <label>Email</label>
            <input type="email" ></input>

            <label>Subject</label>
            <input type="text" ></input>

            <label>Message</label>
            <textarea rows="6" 
            placeholder="Type Your Message Here" />

            <button className="btn" type="submit">Submit</button>

        </form>
    </div>
  )
}

export default Form