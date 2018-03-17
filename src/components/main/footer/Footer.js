import React from 'react';

export class Footer extends React.Component {
  constructor() {
    super();
    this.state = { footer: 'This is footer!' };
  }
  render() {
    return (
      <div>
        <span>{this.state.footer}</span>
      </div>
    );
  }
}
