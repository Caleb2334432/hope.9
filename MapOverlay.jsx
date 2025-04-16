import React from 'react';

const regionStyles = [
  { top: '20%', left: '30%', width: '40px', height: '2px', backgroundColor: 'rgba(255,0,0,0.6)' },
  { top: '30%', left: '40%', width: '40px', height: '2px', backgroundColor: 'rgba(0,255,0,0.6)' },
  { top: '40%', left: '50%', width: '40px', height: '2px', backgroundColor: 'rgba(0,0,255,0.6)' },
  { top: '50%', left: '60%', width: '40px', height: '2px', backgroundColor: 'rgba(255,255,0,0.6)' },
  { top: '60%', left: '70%', width: '40px', height: '2px', backgroundColor: 'rgba(255,0,255,0.6)' },
];

export default function MapOverlay({ presence }) {
  return (
    <>
      {presence.map((val, i) =>
        val === 'Y' ? (
          <div
            key={i}
            className="absolute"
            style={{
              ...regionStyles[i],
              position: 'absolute',
            }}
          />
        ) : null
      )}
    </>
  );
}
