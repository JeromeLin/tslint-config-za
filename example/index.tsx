import React, { Component } from 'react';

export interface TestProps {
  name?: string;
}

export interface TestState {
  visible: boolean;
}

export default class Test extends Component<TestProps, TestState> {
  static defaultProps = {
    name: 'jerome',
  };

  constructor(props: TestProps) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onVisibleChange = () => {
    this.setState({ visible: false });
  }

  render() {
    return <div onClick={this.onVisibleChange}>{this.props.name}</div>;
  }
}
