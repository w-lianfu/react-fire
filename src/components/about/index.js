// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h2>About Page...</h2>
        <Link to="/">Home Page</Link>
      </div>
    )
  }
}

export default About;
