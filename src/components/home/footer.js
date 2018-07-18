// @flow
import React from 'react';

import Btn from '@/common/styled';

type Props = {
  name: string,
  creatorDate: string,
}

type State = {
  count: number,
}

class FooterComp extends React.Component<Props, State> {
  state = {
    count: 0
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    let { name, creatorDate } = this.props;
    return (
      <ul>
        <li>公司名称: {name}</li>
        <li>成立日期: {creatorDate}</li>
        <li>{this.state.count}</li>
        <li><Btn onClick={this.onIncrement.bind(this)}>Increment</Btn></li>
      </ul>
    )
  }
}

export default FooterComp;
