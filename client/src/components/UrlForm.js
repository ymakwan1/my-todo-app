import React, { useState } from 'react';
import axios from 'axios';
import './UrlForm.css'; // Import your CSS file

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/shorten/', { url });
      setShortCode(response.data.short_code);
    } catch (error) {
      console.error('Error shortening URL:', error);
      setErrorMessage('Failed to shorten URL');
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
          <p className="shortened-url">Shortened URL: http://localhost:8000/{shortCode}</p>
        )}
        <button type="submit" className="btn">
          Shorten
        </button>
      </form>
    </div>
  );
};

export default UrlForm;
