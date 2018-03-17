import React from 'react';

export class Aboutus extends React.Component {
  constructor() {
    super();
    this.state = { aboutus: 'This is Aboutus page!' };
  }
  render() {
    return (
      <div>
        <p>{this.state.aboutus}</p>
      </div>
    );
  }
}
