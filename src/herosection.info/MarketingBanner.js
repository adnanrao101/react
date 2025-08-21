import React from 'react';
import './MarketingBanner.css'; // CSS file import
import marketing from "./marketing.gif"

const MarketingBanner = () => {
  const handleGetStarted = () => {
    alert('Redirecting to enrollment page...');
    // Add your logic here (e.g., navigate to another route)
  };

  return (
    <div className="banner-container">
      <div className="text-section">
        <h2><span className="highlight">TOP RATED</span></h2>
        <h1>DIGITAL MARKETING<br />INSTITUTE IN MULTAN</h1>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="image-section">
        <img src={marketing} alt="Digital Marketing Illustration" />
        {/* You can use the original image or a vector illustration */}
      </div>
    </div>
  );
};

export default MarketingBanner;
