// @flow
import React from 'react';

type Props = {
  name: String,
  creatorDate: String,
}

type State = {
  count: Number,
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
        <li><button onClick={this.onIncrement.bind(this)}>Increment</button></li>
      </ul>
    )
  }
}

export default FooterComp;
