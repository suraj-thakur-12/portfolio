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
  <label htmlFor="name">Name</label>
  <input type="text" name="name" id="name" placeholder="Enter your name" />

  <label htmlFor="last">Last Name</label>
  <input type="text" name="last" id="last" placeholder="Enter your last name" />

  <label htmlFor="email">Email</label>
  <input type="email" name="email" id="email" placeholder="Enter your email" />

  <label htmlFor="message">Message</label>
  <textarea name="message" id="message" rows={4} placeholder="Type..."></textarea>

  <button className="btn" type="submit">Submit</button>
</form>
        </div>
          <span>{result}</span>
    </div>
  )
}

export default Contact