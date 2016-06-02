import React from 'react';
import { Link } from 'react-router'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <ul className="menu">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/overview">View Lists</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
};
