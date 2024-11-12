"use client"

import React, { useRef } from 'react';


function ScrollToBox() {
  // Create refs for each box
  const boxRefs = Array.from({ length: 5 }, () => useRef(null));

  // Function to scroll to the associated box
  const scrollToBox = (index) => {
    boxRefs[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div>
      {/* Buttons for each name */}
      <div className="name-buttons">
        {['Name1', 'Name2', 'Name3', 'Name4', 'Name5'].map((name, index) => (
          <button
            key={name}
            onClick={() => scrollToBox(index)}
            className="my-2 p-2 border rounded bg-primary text-white"
          >
            {name}
          </button>
        ))}
      </div>

      {/* Boxes */}
      <div className="boxes-container">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            ref={boxRefs[index]}
            className="box"
            style={{ height: '90vh', border: '1px solid gray', marginBottom: '1rem' }}
          >
            Box {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollToBox;
