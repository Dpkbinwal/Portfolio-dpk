import React, { useState, useEffect, useCallback } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  const addSparkle = useCallback((x, y) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FDCB6E', '#6C5CE7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const sparkle = {
      id: Date.now(),
      x,
      y,
      color: randomColor,
      size: Math.random() * 10 + 5, // Random size between 5 and 15 pixels
    };
    setSparkles(prevSparkles => [...prevSparkles, sparkle]);
    setTimeout(() => {
      setSparkles(prevSparkles => prevSparkles.filter(s => s.id !== sparkle.id));
    }, 1700); // Increased duration for better visibility of the effect
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      addSparkle(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [addSparkle]);

  return (
    <>
      <div 
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            backgroundColor: sparkle.color,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;