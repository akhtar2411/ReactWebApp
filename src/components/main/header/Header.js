import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Akhtar' };
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}
