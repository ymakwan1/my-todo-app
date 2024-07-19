import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UrlList.css';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetchAllUrls();
  }, []);

  const fetchAllUrls = async () => {
    try {
      const response = await axios.get('https://18.224.74.238:8000/api/urls/');
      setUrls(response.data);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };

  const redirectToUrl = (shortCode) => {
    if (typeof window !== 'undefined') {
      window.open(`https://18.224.74.238:8000/api/${shortCode}`, '_blank');
    } else {
      console.error('Window object is not available');
    }
  };

  return (
    <div className="url-list-container">
      <h2>All URLs</h2>
      <table>
        <thead>
          <tr>
            <th>Short Code</th>
            <th>Original URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.short_code}>
              <td>{url.short_code}</td>
              <td>{url.original_url}</td>
              <td>
                <button onClick={() => redirectToUrl(url.short_code)}>Redirect</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlList;
