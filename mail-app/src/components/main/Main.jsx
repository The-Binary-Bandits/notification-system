import React from 'react'
import { useState } from "react";


function Main() {

  const [mailerState, setMailerState] = useState({
    name: "Predefined Title",
    email: "",
    message: "Hello World",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
 
 
  
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {

        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }

      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };
 
  return (
    <div className='h-[80vh] flex items-center justify-center'>
      <form
       style={{
         display: "flex",
         height: "100vh",
         justifyContent: "center",
         alignItems: "center",
       }}

       method="POST"

       onSubmit={submitEmail}

     >
       <fieldset
         style={{
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           width: "50%",
         }}
       >
         <legend>React NodeMailer Contact Form</legend>
         <input
           placeholder="Name"
           onChange={handleStateChange}
           name="name"
           value={mailerState.name}
         />
         <input
           placeholder="Email"
           onChange={handleStateChange}
           name="email"
           value={mailerState.email}
         />
         <textarea
           style={{ minHeight: "200px" }}
           placeholder="Message"
           onChange={handleStateChange}
           name="message"
           value={mailerState.message}
         />
         <button type='submit' 
           >Send Message</button>
       </fieldset>
     </form>
    </div>
  )
}

export default Main