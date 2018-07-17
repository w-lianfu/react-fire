// @flow
import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import './scss/home.scss';
import HomeStore from './store/home-store';
import FooterComp from './footer';

const store = new HomeStore();

@observer
class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h3>Home Page...!!!</h3>
        <h3>{store.num}</h3>
        <Link to="/about">About Page</Link>
        <hr />
        <FooterComp name="中通快递" creatorDate="2012-05-08" />
      </div>
    )
  }
}

export default Home;
