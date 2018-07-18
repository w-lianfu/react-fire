// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/components/home';
import About from '@/components/about';
import '@/common/scss/main.scss';

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
