import React from 'react'
import './Contact.css'

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "25dd12ec-2b8a-4a56-9428-e6762acd0995");

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
    <div className='contact' id='contact'>
        <h2 className='h2'>Contact Us</h2>
        <div className='scd'>
          <form onSubmit={onSubmit}>
            <label for="name">Name</label>
            <input type="text" id='name' placeholder='Enter your name' /><br />
            <label for="last">Last Name</label>
            <input type="text" name="last" id="last" placeholder='Enter your last name' /><br />
            <label for="email">Email</label>
            <input type="email" name='email' id='email' placeholder='Enter your email' /><br />
            <textarea name='message' id='message' rows={4} placeholder='type...'></textarea>
            <button className='btn' type='submit'>submit</button>
          </form>
        </div>
          <span>{result}</span>
    </div>
  )
}

export default Contact