import React, { useState } from "react"
import { Link } from "gatsby"
import '../components/layout.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const [status, setStatus] = useState('');


  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus({ status: "SUCCESS" });
      } else {
        this.setStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }


  return (
    <div className='contactPage'>
      <h1>Leave Me A Message!</h1>
      <SEO title="Contact Page" />
        <form onSubmit={submitForm} action="https://formspree.io/meqelkae" method="POST" className='myContactForm'>
          <label>Name:  </label>
          <input type="text" name="name"/><br />
          <label>Email:  </label>
          <input type="email" name="email" /><br />
          <label>Message:</label>
          <textarea type="text" name="message" rows='10' cols='50'></textarea><br />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      <button className='buttonSpacing'><Link to="/" className='linkStyles'>Go back to the homepage</Link></button>
    </div>
  )
}

export default SecondPage
