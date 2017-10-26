import React, { Component } from 'react';

class Character extends Component {
  render() {
    const animationName = this.props.wobble ? 'wobble' : '';
    const filter = this.props.wobble ? 'url("#hello")' : '';
    return (
      <div className="container" style={{ animationName, filter }}>
        <div className="head">
          <div className="spinner" style={{
            transform: `rotateX(${this.props.x}deg) rotateY(${this.props.y}deg) rotateZ(${this.props.z}deg)`,
          }}>
            <div className="face">
              <div className="eyebrow"></div>
              <div className="eyebrow eyebrow2"></div>
              <div className="eye"></div>
              <div className="eye eye-2"></div>
              <div className="nose"></div>
              <div className="mouth"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Character;
