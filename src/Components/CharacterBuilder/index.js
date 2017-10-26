import React, { Component } from 'react';
import Character from '../Character';

class CharacterBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0,
      wobble: true,
    };
    this.updateWobble = this.updateWobble.bind(this);
  }
  updateTransform(e, axis) {
    const newState = {};
    newState[axis] = e.target.value;
    this.setState(newState);
  }
  updateWobble() {
    this.setState({ wobble: !this.state.wobble });
  }
  render() {
    return (
      <div>
        <h1>Character Builder 0.0.1</h1>
        <Character {...this.state} />
        <h3>Transform - Rotate</h3>
        <label>x</label>
        <input type="range" min="-180" max="180" step="1" value={this.state.x} onChange={e => this.updateTransform(e, 'x')}/>
        <label>y</label>
        <input type="range" min="-180" max="180" step="1" value={this.state.y} onChange={e => this.updateTransform(e, 'y')}/>
        <label>z</label>
        <input type="range" min="-180" max="180" step="1" value={this.state.z} onChange={e => this.updateTransform(e, 'z')}/>
        <h3>Wobble animation</h3>
        <label>On</label>
        <input type="checkbox" checked={this.state.wobble} onChange={this.updateWobble}/>
      </div>
    );
  }

}

export default CharacterBuilder;
