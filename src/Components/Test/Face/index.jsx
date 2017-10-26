import React, { Component } from 'react';

class Face extends Component {

  render() {
    return (
      <div className="head">
        <div className="face">
          <div className="eyebrow"></div>
          <div className="eyebrow eyebrow2"></div>
          <div className="eye"></div>
          <div className="eye eye-2"></div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        {/* <div className="text">
          <h1>"it's the chicken."</h1>
          <h1>"there's something wrong with the chicken."</h1>
        </div> */}
      </div>
    );
  }

}

export default Face;
