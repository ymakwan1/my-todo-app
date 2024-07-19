import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Analytics.css';

const Analytics = () => {
  const [urlCount, setUrlCount] = useState(0);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get('http://18.224.74.238:8000/api/analytics/');
      setUrlCount(response.data.url_count);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    }
  };

  return (
    <div className="analytics-container">
      <h2>Analytics</h2>
      <p>Total URLs Shortened: {urlCount}</p>
    </div>
  );
};

export default Analytics;
