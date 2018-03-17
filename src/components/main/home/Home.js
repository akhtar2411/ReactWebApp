import React from 'react';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = { home: 'This is home page!' };
  }
  render() {
    return (
      <div>
        <p>{this.state.home}</p>
      </div>
    );
  }
}
