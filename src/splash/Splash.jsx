import React, { useEffect, useState } from 'react';
import './splash.css';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (!isVisible) return null; // Don't render anything if splash screen is not visible

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1>DPK</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
