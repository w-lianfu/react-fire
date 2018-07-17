// @flow
import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/components/home';
import About from '@/components/about';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={About} />
        </Switch>
      </Router>
    )
  }
}

export default App;
