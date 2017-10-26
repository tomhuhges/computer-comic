import React, { Component } from 'react';

class Frame extends Component {

  render() {
    return (
      <div className="frame">
        <div className="frame__container">
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Frame;
