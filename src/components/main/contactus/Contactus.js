import React from 'react';

class Contactus extends React.Component {
  constructor() {
    super();
    this.state = { contactus: 'This is Contact us Page!' };
  }
  render() {
    return (
      <div>
        <p> {this.state.contactus}</p>
      </div>
    );
  }
}

export default Contactus;
