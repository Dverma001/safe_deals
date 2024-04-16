import React, { useState } from 'react';
import './QuoteForm.css'; // Import the CSS file

function QuoteForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission, such as sending the data to a server, here.
    // For this example, we'll log the data to the console.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="quote-container">
      <h2>Get a Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Any preferences:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {(
        <div className="submitted-data">
          <h2>Quote</h2>
          <p>Name:</p>
          <p> {name  }</p>
          <p>Email:</p>
          <p> {email }</p>
          <p> Your preferences:</p>
          <p> {message  }</p>
          
        </div>
      )}
    </div>
  );
}

export default QuoteForm;
