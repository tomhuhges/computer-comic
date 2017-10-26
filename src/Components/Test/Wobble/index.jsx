import React, { Component } from 'react';

class Wobble extends Component {

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
      //style={{ position: 'absolute', height: 0, width: 0 }}
      >
        <defs>
          <filter id="hello">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" seed="1">
              <animate attributeName="seed" values="0; 1; 2; 3; 4" repeatCount="indefinite" dur="0.3s"/>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="2">
              <animate attributeName="scale" values="2; 3; 2; 3; 1" repeatCount="indefinite" dur="0.3s"/>
            </feDisplacementMap>
          </filter>
          {/* <filter id="noise">
          	  <feTurbulence type="fractalNoise" baseFrequency="10" result="noisy" />
              <feColorMatrix
                 type="matrix"
                 values= "0 0 0 0 0,
                          0 0 0 0 0,
                          0 0 0 0 0,
                          0 0 0 1 -1"
              />
          </filter> */}
        </defs>
      </svg>
    );
  }

}

export default Wobble;
