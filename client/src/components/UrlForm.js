import React, { useState } from 'react';
import axios from 'axios';
import './UrlForm.css';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://18.224.74.238:8000/api/shorten/',
        { url },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setShortCode(response.data.short_code);
      setErrorMessage('');
      setTimeout(() => {
        setUrl('');
        setShortCode('');
        setErrorMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error shortening URL:', error);
      setErrorMessage('Failed to shorten URL');
      setShortCode('');
    }
  };

  return (
    <div className="form-container">
      <h2>Shorten URL</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="url">Original URL:</label>
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {shortCode && (
          <p className="shortened-url">Shortened, visit All URLs for redirection</p>
        )}
        <button type="submit" className="btn">
          Shorten
        </button>
      </form>
    </div>
  );
};

export default UrlForm;
