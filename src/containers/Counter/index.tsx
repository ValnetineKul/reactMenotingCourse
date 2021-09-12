import { Button, Text } from 'components';
import { Component } from 'react'

interface Props {
}

interface State {
  count: number;
};

class Counter extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <Text size="xxxl" align="center">{this.state.count}</Text>
        <Button color="gray" isFullWidth onClick={this.increment}>+</Button>
        <Button color="red" isFullWidth onClick={this.decrement}>-</Button>
      </div>
    );
  }
}

export default Counter;